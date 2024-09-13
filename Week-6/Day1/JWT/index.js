const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());
const JWT_SECRET = "JWT_SECRET";
var users = [];

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let userFound = users.find((users) => users.username == username);
    if (userFound)
        return res
            .status(400)
            .json({ status: 400, message: "Username already exist!" });
    if (username && password) {
        users.push({
            username: username,
            password: password,
        });
        return res
            .status(201)
            .json({ status: 200, message: "User Signup Successfully!" });
    } else
        return res
            .status(400)
            .json({ status: 400, message: "Failed to Signup! Missing data" });
});

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    let userFound = null;

    let user = users.find(
        (users) => users.username == username && users.password == password,
    );
    if (user) {
        const token = jwt.sign(
            {
                username: username,
            },
            JWT_SECRET,
        );
        userFound = user;
        return res.status(200).json({
            status: 200,
            message: "user signin successfully",
            token: token,
        });
    } else {
        return res.status(400).json({
            status: 401,
            message: "Failed to signin! Wrong username or password",
        });
    }
});

app.get("/sendMe", (req, res) => {
    let token = req.headers.token;
    let decodedtoken = jwt.verify(token, JWT_SECRET);
    let username = decodedtoken.username;
    let userFound = users.find((user) => user.username == username);
    if (userFound) {
        return res.status(200).json({
            status: 200,
            username: userFound.username,
        });
    } else {
        return res.status(401).json({
            status: 401,
            message: "invalid token! redirect to login page",
        });
    }
});

app.listen(3000);

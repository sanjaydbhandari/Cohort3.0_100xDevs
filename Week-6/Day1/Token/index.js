const express = require("express");
const app = express();

app.use(express.json());

var users = [];

function generateToken() {
    let options = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
    ];
    let token = "";
    for (let i = 0; i < 32; i++) {
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

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
        userFound = user;
        userFound.token = generateToken();
        return res.status(200).json({
            status: 200,
            message: "user signin successfully",
            token: userFound.token,
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
    let userFound = users.find((user) => user.token == token);
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

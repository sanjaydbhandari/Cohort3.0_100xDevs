const jwt = require("jsonwebtoken")
const JWT_SECRET = require('../config/config').JWT_SECRET;

function auth(req,res,next){
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(403).json({ message: "No token provided" });
        }
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(403).json({ message: "Malformed token" });
        }

        const response = jwt.verify(token, JWT_SECRET);
        req.userId = response.id;
        next();
    } catch (err) {
        res.status(403).json({
            message: "Invalid or expired token",
            error: err.message  
        });
    }
}

module.exports={auth};
require("dotenv").config();

const PORT = process.env.PORT;
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

module.exports = { PORT, USERNAME, PASSWORD };

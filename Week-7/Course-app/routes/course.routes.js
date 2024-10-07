const {Router} = require("express");
const courseRouter = Router();
const {courses} = require("../controllers/course.controller")

courseRouter.get("/",courses)

module.exports = {courseRouter};
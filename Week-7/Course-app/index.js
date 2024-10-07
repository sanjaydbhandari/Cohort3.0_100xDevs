const express = require("express");
const { PORT } = require("./config/config");
const app = express();
const { userRouter } = require("./routes/user.routes");
const { courseRouter } = require("./routes/course.routes");

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

app.listen(PORT, () => {
  console.log("app is listening on port", PORT);
});

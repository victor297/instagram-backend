const express = require("express");
const connectDB = require("./src/configs/db");
const cors = require("cors");
const dotenv = require("dotenv");

const userRoute = require("./src/routes/userRoute");
const articleRoute = require("./src/routes/articleRoute");
const commentRoute = require("./src/routes/commentRoute");
dotenv.config();
const port = process.env.PORT;
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", userRoute);
app.use("/api/article", articleRoute);
app.use("/api/comment", commentRoute);
app.use("/", (req, res) => {
  res.send(`${req.method} Route ${req.path} not found !`);
});
app.listen(port, () => {
  console.log(`server run on port ${port} ✅`);
});

const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const uri = process.env.URI;

const connectDB = async () => {
  try {
    const con = await mongoose.connect(uri);
    console.log("DB Connected Successfully ✅");
  } catch (e) {
    console.log(`Authentication to database failed ❗`);
    process.exit(1);
  }
};

module.exports = connectDB;

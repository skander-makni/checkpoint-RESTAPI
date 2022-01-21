const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mern");
    console.log("Database is connected");
  } catch (error) {
    console.log("can not connect to DB...");
  }
};

module.exports = connectDB;

const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  try {
    await mongoose.connect('mongodb+srv://anshkevadiya7179:task_manager@cluster0.mmdnq6b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log("Connect to database ");
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = connectDb;

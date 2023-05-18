const mongoose = require("mongoose");
const { MONGO } = require("../config/index");

const dbConnect = async () => {
  try {
    // mongoose.set('strictQuery',false)
    const conn = await mongoose.connect(MONGO);
    console.log(`Database is connect to host : ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error : ${error}`);
  }
};

module.exports = dbConnect;

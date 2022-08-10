const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://Phoenixfas:3867Ff1515@cluster0.u9pcvp8.mongodb.net/sid_db?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB Connected: ${mongoose.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;

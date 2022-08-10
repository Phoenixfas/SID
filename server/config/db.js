const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI, {
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

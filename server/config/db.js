const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://admin:aadi%40123@jatin.98ce4hj.mongodb.net/projectDB?retryWrites=true&w=majority");

    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.error("DB Connection Error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;

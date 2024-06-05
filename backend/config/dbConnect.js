import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const DB_URI = process.env.MONGODB_URI;

const dbConnect = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default dbConnect;

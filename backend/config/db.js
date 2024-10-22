import mongoose from "mongoose";
import dotenv from "dotenv";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://jijo32949:Jijo%402002@cluster0.tz4uptq.mongodb.net");
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error:${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

import mongoose from "mongoose";
import "dotenv/config";

export const connectToMongoDB = async (uri: string) => {
  try {
    const dbUri = uri;
    await mongoose.connect(dbUri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export const disconnectFromMongoDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("MongoDB disconnected");
  } catch (error) {
    console.error("Error disconnecting from MongoDB:", error);
  }
};

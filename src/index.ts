import app from "./app";
import "dotenv/config";
import { connectToMongoDB } from "./config/db.config";

const PORT = process.env.PORT || 3000;

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://mongodb:27017/facilityDB";

async function startServer() {
  try {
    await connectToMongoDB(MONGODB_URI);

    app.listen(PORT, () => {
      return console.log(`Express is listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("Error starting server:", error);
    process.exit(1);
  }
}

startServer();

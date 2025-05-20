import app from "./app";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    app.listen(PORT, () => {
      return console.log(`Express is listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("Error starting server:", error);
    process.exit(1);
  }
}

startServer();

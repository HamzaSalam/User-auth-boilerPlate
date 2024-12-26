import mongoose from "mongoose";
import "dotenv/config";

async function connect() {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error(error));
}

export default connect;

import { app } from "./app";
import mongoose from "mongoose";

const start = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI, must be defined");
  }
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("connected to db...");
  } catch (e) {
    console.error(e);
  }
};

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

start();

import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
import bookRouter from "./routes/book.route.js";
import userRouter from "./routes/user.route.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Free Palestine");
});

app.use(express.json());

// Router
app.use("/api", bookRouter);
app.use("/api", userRouter);

// DB Connect
dbConnect();

// Listening on Port

app.listen(PORT, (req, res) => {
  console.log(`Server is running at port ${PORT}`);
});

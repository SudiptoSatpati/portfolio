import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { userRouter } from "./routes/User.js";

export const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

// Allow requests from all origins with specified options
const corsOptions = {
  origin: "https://667fbcd9cd6edbc48d2866b3--ssportfoliolive.netlify.app",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // enable passing of cookies and authorization headers
};

app.use(cors(corsOptions));

app.use("/api/v1", userRouter);

app.use(express.static(path.resolve("./frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("./frontend/dist/index.html"));
});

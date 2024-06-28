import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import { userRouter } from "./routes/User.js";

export const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

app.use("/api/v1", userRouter);

app.use(express.static(path.resolve("./frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("./frontend/dist/index.html"));
});

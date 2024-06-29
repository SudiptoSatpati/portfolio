import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { userRouter } from "./routes/User.js";

export const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

<<<<<<< HEAD
// Allow requests from all origins with specified options
const corsOptions = {
  origin: "https://667fbcd9cd6edbc48d2866b3--ssportfoliolive.netlify.app",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // enable passing of cookies and authorization headers
};

app.use(cors(corsOptions));

=======
// API routes
>>>>>>> abcf205034bc15ca7449832bc421f6e2f7663ccc
app.use("/api/v1", userRouter);

// Serve static files (if needed for specific routes)
// For example, if you have some static files in the backend
app.use(express.static(path.resolve("./public")));

// Placeholder route for frontend handling
app.get("/", (req, res) => {
  res.send("Backend is running."); // Placeholder response
});

// Error handler for unmatched routes
app.use((req, res) => {
  res.status(404).send("Not Found");
});

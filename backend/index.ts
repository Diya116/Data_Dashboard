import express from "express";
import type{ Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import loginRoute from "./routes/login.ts"
import userRoute from "./routes/user.ts"
import statsRoute from "./routes/stats.ts"
import connectDB from "./config/db";
import { connect } from "http2";

dotenv.config();
const app = express();
const PORT = 5050;
connectDB();
// Middleware
app.use(cors({
    origin: "http://localhost:5173", // your frontend URL
    credentials: true,               // allow cookies / auth headers
  }));
app.use(express.json());
app.use("/auth/login",loginRoute);
app.use("/api/user",userRoute);
app.use("/api/stats",statsRoute);
// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello TypeScript + Express 🚀");
});

app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "API working fine ✅" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});

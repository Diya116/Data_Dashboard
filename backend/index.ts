import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import loginRoute from "./routes/login.ts"
import userRoute from "./routes/user.ts"
import statsRoute from "./routes/stats.ts"
import connectDB from "./config/db";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5050;
connectDB();

app.use(cors({
    origin: process.env.FRONTEND_URL, 
    credentials: true,              
  }));
app.use(express.json());
app.use("/auth/login",loginRoute);
app.use("/api/user",userRoute);
app.use("/api/stats",statsRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

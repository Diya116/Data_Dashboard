import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import loginRoute from "./routes/login"
import userRoute from "./routes/user"
import statsRoute from "./routes/stats"
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

// Routes
app.use("/auth/login", loginRoute);
app.use("/api/user", userRoute);
app.use("/api/stats", statsRoute);

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Server is running",
    timestamp: new Date().toISOString()
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Health check available at http://localhost:${PORT}/health`);
});

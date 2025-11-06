import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  const { email, password } = req.body;
  
  try {
    console.log({ email, password });
    
    if (email === "admin@gmail.com" && password === "admin123") {
      const token = "dummy_token_" + Date.now();
      
      // Send token in both header and body for flexibility
      res.status(200)
        .setHeader("Authorization", `Bearer ${token}`)
        .json({ 
          message: "Login successful",
          token: token
        });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/logout", (req, res) => {
  try {
    // Handle logout logic here (invalidate token, etc.)
    res.status(200).json({ message: "Logout successful" });
  } catch (err) {
    console.error("Logout error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
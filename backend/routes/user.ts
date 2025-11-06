import { Router, Request, Response } from "express";
import User from "../model/User";

const router = Router();

// Create
router.post("/", async (req: Request, res: Response) => {
  try {
    console.log("create new user")
    console.log(req.body);
    const user = await User.create(req.body);
    const userObj = user.toObject();
    const { _id, ...rest } = userObj;
    res.status(201).json({ id: _id, ...rest });
  } catch (error) {
    res.status(400).json({ message: "Error creating user", error });
  }
});

// Read All
router.get("/", async (_req: Request, res: Response) => {
  console.log("get all user")
  const users = await User.find();
  const transformedUsers = users.map(user => {
    const userObj = user.toObject();
    const { _id, ...rest } = userObj;
    return { id: _id, ...rest };
  });
  res.json(transformedUsers);
});

// Read One
router.get("/:id", async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id);
  if (user) {
    const userObj = user.toObject();
    const { _id, ...rest } = userObj;
    res.json({ id: _id, ...rest });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Update
router.put("/:id", async (req: Request, res: Response) => {
  console.log("update user")
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  console.log(user);
  if (user) {
    const userObj = user.toObject();
    const { _id, ...rest } = userObj;
    res.json({ id: _id, ...rest });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Delete
router.delete("/:id", async (req: Request, res: Response) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

export default router;

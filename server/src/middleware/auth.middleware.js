import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "Not authorized, invalid token" });
    }
    const user = await User.findById(decoded.userId).select("-password"); //Don't send password to client for security purposes
    if (!user) {
      return res
        .status(404)
        .json({ message: "Not authorized, user not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.error("Error in auth middleware:", error);
    res.status(401).json({ message: "Not authorized" });
  }
};

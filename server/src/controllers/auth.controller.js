import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { generateToken } from "../lib/utils.js";
import cloudinary from "../lib/cloudinary.js";

export const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
    }
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      email,
      password: hashedPassword,
    });
    await newUser.save();
    generateToken(newUser._id, res);
    res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser._id,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    generateToken(user._id, res);
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const logout = (req, res) => {
  try {
    res.cookie("token", "", { maxAge: 0 });
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const updateProfile = async (req, res) => {
  try {
      const {profilePic} = req.body; 
      const userId = req.user._id;

      if(!profilePic) {
        return res.status(400).json({ message: "Profile picture is required" });
      }
      const uploadResponse = await cloudinary.uploader.upload(profilePic)
      const updatedUser = await User.findByIdAndUpdate(
        userId, {profilePic: uploadResponse.secure_url}, {new: true}
      )
      res.status(200).json({
        message: "Profile updated successfully",
        user: {
          id: updatedUser._id,
          email: updatedUser.email,
          profilePic: updatedUser.profilePic,
        },
      });
    } catch (error) {
      console.log("Error in updateProfile controller", error.message);
      res.status(500).json({ message: "Internal server error" });
    }
}

export const checkAuth = (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({
      message: "User is authenticated",
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Error in checkAuth controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
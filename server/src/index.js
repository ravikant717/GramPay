import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser"; //To deal with cookies
import authRoutes from "./routes/auth.route.js"; // Importing the auth routes
import dotenv from "dotenv"; //Allows to use env variables
import { connectDB } from "./lib/db.js";
dotenv.config();

const PORT = process.env.PORT || 3000;
//Middleware setup
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, //allow cookies to be sent
  })
);
app.use(cookieParser()); //allows to parse cookies
app.use(express.json()); //Extract JSON data out of body used to use req.body


//Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
//Routes goes here
app.use("/api/auth", authRoutes);



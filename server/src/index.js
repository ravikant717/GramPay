import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js"; // Importing the auth routes
dotenv.config();


//Middleware setup
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, //allow cookies to be sent
  })
);
app.use(cookieParser()); //allows to parse cookies
app.use(express.json()); //Extract JSON data out of body used to use req.body


//Routes goes here
app.use("/api/auth", authRoutes); 


//Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

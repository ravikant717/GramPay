import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { createRequest } from "../controllers/request.controller.js";
const router = express.Router();

router.post("/create-request", protectRoute, createRequest);

export default router;
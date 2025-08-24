import express from "express";
import { createQR } from "../controllers/payment.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/create-qr", protectRoute, createQR);

export default router;

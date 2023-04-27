import mongoose from "mongoose";
import express from "express";
import { registerController } from "../controllers/authController.js";
//router  object
const router = express.Router();

router.post('/register',registerController);
export default router;
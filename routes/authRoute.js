import mongoose from "mongoose";
import { registerController } from "../controllers/authController.js";

const router = express.Router();

router.post('/register',registerController);
export default router;
import mongoose from "mongoose";

const router = express.Router();

router.post('/register',registerController);
export default router;
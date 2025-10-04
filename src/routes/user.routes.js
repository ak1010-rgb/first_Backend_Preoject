import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";   // ✅ add this

const router = Router();

router.route("/register").post(registerUser);

export default router;

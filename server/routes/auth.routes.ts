import { login, logout, signup } from "../controllers/auth.Controllers";
import express from "express";

const router =express.Router();

router.post("/signup",signup)
router.post("/login",login)
router.delete("/logout",logout)


export default router
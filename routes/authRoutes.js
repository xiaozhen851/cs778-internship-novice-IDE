import express from "express"
import authenticatedUser from "../middleware/auth.js"
const router = express.Router()

import { login, updateUser, register } from "../controllers/authController.js"



router.route("/register").post(register)
router.route("/login").post(login)
router.route("/updateUser").patch(authenticatedUser,updateUser)


export default router
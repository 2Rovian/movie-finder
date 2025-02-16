import { Router } from "express";
import { GetUsers, CreateUser, LoginUser } from "../controllers/UserFunctions.js";

const router = Router();

router.post('/create-user', CreateUser);
router.post('/login', LoginUser)
router.get('/users', GetUsers);

export default router;

import express from 'express';

import { registerUserController } from "../controller/UserController.js";

export const userRouter = express.Router();

userRouter.post('/register',registerUserController);
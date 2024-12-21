import express from 'express';

import { addAboutController, addSkillsController, loginUserController, registerUserController, removeSkillsController, showProfileController } from "../controller/UserController.js";

export const userRouter = express.Router();

// router for sign up
userRouter.post('/register',registerUserController);

// router for login
userRouter.post('/login',loginUserController);

// router to add skills
userRouter.post('/addskills',addSkillsController);

// router to remove a skill
userRouter.delete('/removeskills',removeSkillsController);

// router to show profile
userRouter.get('/:id',showProfileController);

// router to add about  
userRouter.post('/about',addAboutController);

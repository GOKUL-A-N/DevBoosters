import express from 'express';
import { createPostController , showPosts } from '../controller/PostController.js';

export const postRouter = express.Router();

postRouter.post('/addPost', createPostController);

postRouter.get('/', showPosts);
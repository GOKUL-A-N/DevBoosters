import express from 'express';
import { createPostController , showPosts , addInterestToPostsController , mostIntrestedPosts , deletePostsController} from '../controller/PostController.js';

export const postRouter = express.Router();

postRouter.post('/addPost', createPostController);

postRouter.get('/', showPosts);

postRouter.post('/addInterest', addInterestToPostsController);

postRouter.get('/popular',mostIntrestedPosts);

postRouter.delete('/delete/:id', deletePostsController);
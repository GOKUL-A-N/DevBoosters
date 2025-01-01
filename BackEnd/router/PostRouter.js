import express from 'express';
import { createPostController , showPosts , addInterestToPostsController , mostIntrestedPosts , deletePostsController , deleteInterestController} from '../controller/PostController.js';

export const postRouter = express.Router();

// add post roter
postRouter.post('/addPost', createPostController);

// display all posts
postRouter.get('/', showPosts);

// adding interest to posts
postRouter.post('/addInterest', addInterestToPostsController);

// sort by interest router
postRouter.get('/popular',mostIntrestedPosts);

// delete posts rotuter
postRouter.delete('/delete/:id', deletePostsController);

postRouter.delete('/deleteInterest',deleteInterestController);
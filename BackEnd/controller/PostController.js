import { postModel } from "../model/PostModel.js";

// controller for creating a new post
export const createPostController = async (req, res) => {
    try {
        const { title, description, skills, author, tags } = req.body;

        if(!title || !description || !tags || !skills || !author){
            return res.status(400).send({
                message: "All fields are required",
            });
        }

        const newPost = new postModel({
            title: title,
            description: description,
            skills: skills,
            author: author,
            tags: tags,
        });

        await newPost.save();
        res.status(201).send(newPost);
    } catch (error) {
        res.status(500).send({
            message: "Cannot add post",
            error,
        });
    }
}

// controller to display a latest post
export const showPosts = async (req, res) => {
    try {

        const posts = await postModel.find({});

        return await res.status(200).send({
            success: true,
            message: "Posts",
            posts
        })
    } catch (err) {
        res.status(500).send({
            message: "Cannot add post",
            error,
        });
    }
}

// controller to display most interested post
export const mostIntrestedPosts = async (req, res) => {
    try {
        const posts = await postModel.find().sort({interested: -1});

        return await res.status(200).send({
            success: true,
            message: "Most Intrested Posts",
            posts
        })
    } catch (err) {
        res.status(500).send({
            message: "Cannot get most intrested posts",
            err,
        });
    }
}

// controller to add interested to posts
export const addInterestToPostsController = async (req, res) => {
    try {
        const { postId, userId } = req.body;

        if(!postId ||!userId){
            return res.status(400).send({
                message: "Post ID and User ID are required",
            });
        }

        const post = await postModel.findByIdAndUpdate(postId, { $push: { interested: userId } }, { new: true });

        if(!post){
            return res.status(404).send({
                message: "Post not found",
            });
        }

        return await res.status(200).send({
            success: true,
            message: "Interest added",
            post
        })
    } catch (err) {
        res.status(500).send({
            message: "Cannot add interest to post",
            err,
        });
    }
}

// controller to delter the post
export const deletePostsController = async (req, res) => {
    try {
        const result = await postModel.findOneAndDelete(req.params.id);
        return res.status(200).send({
            success: true,
            message: "Post deleted successfully",
            result
        });
    } catch (err) {
        res.status(500).send({
            message: "Cannot add interest to post",
            err,
        });
    }
};

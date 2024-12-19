import { postModel } from "../model/PostModel.js";

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
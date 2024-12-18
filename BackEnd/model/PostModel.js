import mongoose, { Collection, Schema } from 'mongoose';

const postSchema = mongoose.Schema({
    title:{
        type:'String',
        required: true,
    },
    description:{
        type: 'String',
        required:  true,
    },
    skills: {
        type: 'Array',
        default: []
    },
    interested: {
        type: 'Array',
        default: []
    },
    author: {
        type: Schema.Types.ObjectId,
        required: true
    }
},{
    timestamps: true,
    collection: 'devPosts'  
})

export const postModel = mongoose.model(postSchema)
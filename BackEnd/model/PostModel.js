import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title:{
        type:'String',
        required: true,
    },
    description:{
        type: 'String',
        required:  true,
    },
    skills: [
        {
            type: String
        }
    ],
    interested: {
        type: 'Array',
        default: []
    },
    author: {
        type: "String",
        required: true
    },
    tags: [
        {
            type: String
        }
    ]
},{
    timestamps: true,
    collection: 'devPosts'  
})

export const postModel = mongoose.model('postSchema',postSchema)
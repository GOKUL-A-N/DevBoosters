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
    interested: [
        {
            type: String
        }
    ],
    author: {
        type: mongoose.Types.ObjectId,
        ref:'userSchema',
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
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : {
        type: 'String',
        required: true,
    },
    email: {
        type: 'String',
        required: true,
        unique: true
    },
    password: {
        type: 'String',
        required: true
    },
    about: {
        type: 'String',
        default: ''
    },
    skills: {
        type: 'Array',
        default: [],
    },
    histroy: {
        type: 'Array',
        default: [],
    },
    jobPosting: {
        type: 'Array',
        default: []
    },
    role : {
        type: 'String',
        required: true
    },
    
},{
    timestamps: true,
    collection: 'devUsers'
})

export const userModel = mongoose.model('userSchema',userSchema);
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
    skills:[
        {
            type:String
        }
    ],
    history: [
        {
            type: String
        }
    ],
    jobPosting: [
        {
            type: String
        }
    ],
    role : {
        type: 'String',
        default: ''
    },
    openTo : {
        type: 'String',
        default: ''
    }
},{
    timestamps: true,
    collection: 'devUsers'
})

export const userModel = mongoose.model('userSchema',userSchema);
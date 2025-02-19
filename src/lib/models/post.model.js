
import mongoose from "mongoose";


const PostSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true,
    },
    image:{
        type: String,
    },
    User:{
        type:mongoose.Schema.type.objectid,
        ref: "User",
        required: true,
    },
    username:{
        type:String,
        required:true
    },
    porfileimg:{
        type:String,
        required: ture
    },
    comment:{

        type:[{
            comment:String,
            User:{
                type:mongoose.Schema.type.objectid,
                ref: "User",
            },
            name:{
            type:String,
         },
         username:{
            type:String,
         },
         porfileimg:{
            type:String,
         },
         createdAt :{
             type:Date,
             default: Date.now()
         }

        }]

    },
    
},{ timestamps: true })
const POST = mongoose.models.Post || mongoose.model("User", PostSchema);

export default POST;
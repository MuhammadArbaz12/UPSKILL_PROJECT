import mongoose from "mongoose"

const POSTSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
       
    },
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    profileImg: {
        type: String,
        required: true
    },
    likes: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
        default: []
    },
    comments: {
        type: [{
            comment: String,
            user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
            name: String,
            username: String,
            profileImg: String,
            createdAt: { type: Date, default: Date.now() },
        }],
        default: []
    }
}, { timestamps: true });

const Post = mongoose.models.Post || mongoose.model('Post', POSTSchema);

export default Post;
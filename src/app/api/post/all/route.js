import Post from "../../../../lib/models/post.model"
import { Connect } from "../../../../lib/mongodb/mongoose"

export const POST = async (req)=>{
    try {
        await Connect ()
        const feedpost = await Post.find().sort({
            createdAt:-1
        })
        return new Response (JSON.stringify(feedpost),{
            status: 200
        })
    } catch (error) {
        console.log (error)
    }
}
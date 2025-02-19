import POST from "../../../../lib/models/post.model";
import {Connect} from "../../../../lib/mongodb/mongoose"
import {currentUser} from "@clerk/nextjs/server"



export async function POST (req){
    const user = await currentUser(req)
    try {
        await Connect ()
        const data = await req.json ()
        if (!user || user.publicMetadata.userMongoId !== data.userMongoId){
            return new Response ("unotherized",{
                status:401
            })
          }
          const newpost = POST.create({
            User:data.userMongoId,
            name:data.name,
            username:data.username,
            text:data.text,
            profileimg:data.profileimg,
            image:data.image
        });
        await newpost.save()
        return new Response (json.stringify(),
        {status:200}
    )
    } catch (error) {
        console.log (error)
        return new Response ("internal server error")
    }
}
// import POST from "../../../../lib/models/post.model";
// import { connect } from "../../../../lib/mongodb/mongoose"
// import { currentUser } from "@clerk/nextjs/server"

// export async function Post(req) {
//     const user = await currentUser(req)
//     try {
//         await connect()
//         const data = await req.json()
//         if (!user || user.publicMetadata.userMongoId !== data.userMongoId) {
//             return new Response ("unauthorized", {
//                 status:401
//             })
//         }
//         const newPost = await POST.create({
//             user:data.userMongoId,
//             name:data.name,
//             username:data.username,
//             text:data.text,
//             profileImg:data.profileImg,
//             image:data.image
//         })

//         await newPost.save()
//         return new Response (json.stringify(newPost),
//         {status:200}
//     )
      

//     } catch (error) {
//             console.log(error)
//             return new Response ("Internal Server error"), 
//             {status:500}
//     }
// }




import Post from "../../../../lib/models/post.model";
import { Connect } from "../../../../lib/mongodb/mongoose";
import { currentUser } from "@clerk/nextjs/server";

export  const POST = async(req) => {
    const user = await currentUser(req);
    try {
        await Connect();
        const data = await req.json();
console.log("Received Data:", data); 
        if (!user || user.publicMetadata.userMongoId !== data.userMongoId) {
            return new Response("Unauthorized", { status: 401 });
        }

        const newPost = await Post.create({
            user: data.userMongoId,
            name: data.name,
            username: data.username,
            text: data.text,
            profileImg: data.profileImg,
            image: data.image,
        });

        await newPost.save();

        return new Response(JSON.stringify(newPost), { status: 200 });

console.log("Post Create Successf")
    }catch (error) {
    console.error("Error creating post:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error", error: error.message }), { status: 500 });
}

}

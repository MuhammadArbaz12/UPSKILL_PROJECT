// "use client"
// import React, { useState } from 'react'
// import { IoImagesSharp } from "react-icons/io5";
// import { useUser } from '@clerk/nextjs';
// import { useRef } from 'react';
// export default function Input() {
//  const { user ,isSignedIn,isLoaded} = useUser();
//  const IMAGEFILEREF = useRef(null)
//  const [selectedFile,SetSelectedFile]=useState(null)

// if(!user || !isSignedIn || !isLoaded){
//     return null
// }
// const handleUploadImage = (e) =>{
// const file = e.target.files[0]
// if(file){
//   SetSelectedFile(URL.createObjectURL(file))
// }
// }


//   return (
//     <div className='flex border-b border-gray-200 p-3 space-x3 w-full'> 
//         <img  src={user.imageUrl} alt='user_img' className='w-12 h-12 rounded-full cursor-pointer hover:brightness-95 object-cover' />
//       <textarea  rows={"2"} placeholder='What is happening?' className='w-full outline-none tracking-wide min-h-[50px] text-gray-700 ' noOfLines={2}/>
//       {selectedFile &&(
//          <>
      
//          <img  src={selectedFile} />
//          </>
//       )

//       }
//       <div className="flex items-center justify-between pt-2.5  ">
//       <IoImagesSharp className='w-10 h-10 text-blue-500  hover:bg-sky-100 rounded-full cursor-pointer' color='#31511E' size={25}  onClick={()=>{
//         IMAGEFILEREF.current.click()
//       }}  /> 
//       <input hidden  type='file' accept='images/*' ref={IMAGEFILEREF} onChange={handleUploadImage} />
// {/* <button>Cancel</button> */}
//       <button onClick={()=>{
//           SetSelectedFile(null)
//          }} className='bg-blue-500 text-white px-4 py-2 rounded-full hover:brightness-95 transition-all duration-200 '>Post</button>
//       </div>
//     </div>
//   )
// }

"use client"
import React, { useRef, useState } from 'react';
import { FaImage } from "react-icons/fa";
import { useUser } from '@clerk/nextjs';

export default function Input() {
  const { user, isSignedIn, isLoaded } = useUser();
  const IMAGEFILEREF = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!user || !isSignedIn || !isLoaded) {
    return null;
  }

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col m-auto p-4 border rounded-lg shadow-lg bg-white w-full max-w-md space-y-4">
      <textarea
        rows={2}
        className="w-full p-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Write your post..."
      />

      {selectedImage && (
        <div className="relative">
          <img src={selectedImage} alt="Uploaded" className="w-full rounded-lg shadow-md" />
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <FaImage
            size={24}
            color="red"
            onClick={() => IMAGEFILEREF.current.click()}
            className="cursor-pointer hover:scale-110"
          />
          <input
            hidden
            type="file"
            accept="image/*"
            ref={IMAGEFILEREF}
            onChange={handleUploadImage}
          />
        </div>
        <button className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">
          Post
        </button>
      </div>
    </div>
  );
}

"use client"
import React, { useState } from 'react'
import { IoImagesSharp } from "react-icons/io5";
import { useUser } from '@clerk/nextjs';
import { useRef } from 'react';
export default function Input() {
 const { user ,isSignedIn,isLoaded} = useUser();
 const IMAGEFILEREF = useRef(null)
 const [selectedFile,SetSelectedFile]=useState(null)

if(!user || !isSignedIn || !isLoaded){
    return null
}
const handleUploadImage = (e) =>{
const file = e.target.files[0]
if(file){
  selectedFile(URL.createObjectURL(file))
}
}


  return (
    <div className='flex w-[full] gap-5 m-auto justify-between mt-2 bg-slate-300 rounded-md items-center '> 
        <img className='w-[10%] h-full p-2  hover:bg-slate-400 rounded-full transition-all duration-200' src={user.imageUrl} alt='user_img' />
      <textarea className='flex w-full ' noOfLines={2}/>
      {selectedFile && <>
      
      <img src={selectedFile} />
      </>

      }
      <div className="flex w-[40%] gap-5 h-full  ">
      <IoImagesSharp color='#31511E' size={25}  onClick={()=>{
        IMAGEFILEREF.current.click()
      }}  /> 
      <input hidden  type='file' accept='images/*' ref={IMAGEFILEREF} onChange={handleUploadImage} />

      <button className='font-serif text-green-950 font-bold bg-white w-[50%]  hover:bg-slate-400 rounded-full transition-all duration-200 '>Post</button>
      </div>
    </div>
  )
}
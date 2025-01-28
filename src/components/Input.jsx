"use client"
import React from 'react'
import { IoImagesSharp } from "react-icons/io5";
import { useUser } from '@clerk/nextjs';
import { useRef } from 'react';
export default function Input() {
 const { user ,isSignedIn,isLoaded} = useUser();
 const IMAGEFILEREF = useRef(null)
if(!user || !isSignedIn || !isLoaded){
    return null
}
const handleUploadImage = () =>{

}
  return (
    <div className='flex w-[full] gap-5 m-auto justify-between mt-2 bg-slate-300 rounded-md items-center '> 
        <img className='w-[10%] h-full p-2 rounded-full' src={user.imageUrl} alt='user_img' />
      <textarea className='flex w-full ' noOfLines={2}/>
      
      <div className="flex w-[40%] gap-5 h-full  ">
      <IoImagesSharp color='#31511E' size={25}  onClick={()=>{
        IMAGEFILEREF.current.click()
      }}  /> 
      <input hidden  type='file' accept='images/*' ref={IMAGEFILEREF} onChange={handleUploadImage} />

      <button className='font-serif text-green-950 font-bold bg-white w-[50%] rounded-md'>Post</button>
      </div>
    </div>
  )
}
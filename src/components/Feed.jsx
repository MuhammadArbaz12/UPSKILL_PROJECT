"use client"
import React from 'react'
import Post from './Post'

export const Feed = ({data}) => {
    console.log("feed compo data==>" + data)
  return (
    <div>
        {data.map((post)=>(
            <Post key={post._id} post={post} />
        ))

        }
    </div>
  )
}

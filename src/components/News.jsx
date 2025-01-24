"use client"
import React, { useState ,useEffect} from 'react'

export default function News() {
const [Article,setArticle]=useState([])
const [articlenum ,setarticlenum]=useState(6)
console.log(Article)
useEffect(() => {
fetch(`https://saurav.tech/NewsAPI/top-headlines/category/business/us.json`).then(res=>res.json()).then(data=>setArticle(data.articles))
}, [])


  return (
<>

<div className="pb-5">
    {Article.slice(3,articlenum).map((news,index)=>(
     <div className=" flex gap-4 m-2 bg-white rounded-xl  mb-4 shadow-2xl">
        <a href={news.url}>
            <img src={news.urlToImage}  alt="" className='rounded-xl' />
            <div className="p-2">
                <h3  className='text-start  box-border	font-bold text-black font-sans text-lg'>{news.author}</h3>
                <p className='text-start box-border text-xs text-black font-sans shadow-xl' >{news.description}</p>
                <p className='text-black p-1'>End</p>
            </div>
        </a>
     </div>
    ))

    }
   <div className='flex gap-x-1'>
   <button onClick={()=>{
      setarticlenum(articlenum + 3
      )
    }} className='bg-black p-1 text-white'>Load More</button>

<button onClick={()=>{
      setarticlenum(articlenum - 3)
    }} className='bg-black p-1 text-white'>Previous</button>
   </div>
    
    
</div>

</>
  )
}
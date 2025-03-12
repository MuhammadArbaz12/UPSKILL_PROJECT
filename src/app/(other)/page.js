
import Input from '../../components/Input'
import React from 'react'


export default async function  page() {

  let data = null
  try {
    const result = await fetch ("https://upskill-project-vrej-7k5d6p9xi.vercel.app/api/post/all",{
      method: "POST",
      cache: "no-store",
    })
    data = await result.json()
  } catch (error) {
    console.log (error)
  }
  return (
    <div className='min-h-screen max-w-xl mx-auto border-r border-l '>
      <div className='py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200 '>
        <h2 className='text-lg sm:text-xl font-bold'>Home</h2>
    <Input/>
      </div>
    </div>
  )
}





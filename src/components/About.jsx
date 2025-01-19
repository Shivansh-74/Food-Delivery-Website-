import React from 'react'

export default function About() {
  return (
    <div className='w-[100%] bg-gradient-to-t from-slate-50 to-orange-100'>

    <div className='md:grid grid-cols-5 w-[100%] flex flex-col'>
    <div className="w-[100%] col-span-3 h-[500px]  flex flex-col gap-5
    items-center my-10">
    <div className=' w-[85%]  py-5 '>
    <h1 className='text-center text-4xl font-bold text-orange-950 '>About us</h1>
    <p className='text-[1.2em] text-gray-900 py-5 text-center '>Welcome to <span className='text-orange-700 font-bold'>Our Website</span>, where we serve a fusion of traditional and modern flavors crafted from the finest ingredients. Our mission is to offer a memorable dining experience that brings people together through food. Proudly developed by <span className='text-orange-700 font-bold'>Shivansh Vishwakarma</span>, this website reflects our journey of passion and dedication to excellence</p>

    </div>
  <div className='w-[70%]'>
  <h1 className='italic text-gray-700 text-center'>“Food for us comes from our relatives, whether they have wings or fins or roots. That is how we consider food. Food has a culture. It has a history. It has a story. It has relationships.”</h1>
  <p className='text-right text-gray-950 font-bold'>– Winona LaDuke
  </p>
  </div>

    </div> 
    // <div className="2 col-span-2 md:h-[500px] h-[350px]">
    // <img src="https://png.pngtree.com/background/20230618/original/pngtree-delicious-burger-with-many-ingredients-isolated-on-white-background-tasty-cheeseburger-picture-image_3713226.jpg" alt="" className='mix-blend-multiply md:w-[100%] md:h-[90%] h-[100%] w-[90%] md:m-4 p-4 mx-auto mt-[-20px] rounded'/>
    // </div>
    </div>
    </div>
  )
}

import React from 'react'

export default function Card(props) {
  return (
    
    <div className='md:w-[250px] md:h-[250px] w-[190px] h-[190px]  rounded-[30px]  bg-center	bg-no-repeat bg-cover flex items-end bg-white' style={{backgroundImage:`url(${props.img})`,borderImage:'fill 0 linear-gradient(#0001, #000)'}}>
    <div className='mb-6 ml-5'>
    <h3 className='text-1xl text-white font-bold'>{props.name}</h3>
    <h1 className='text-3xl text-white font-bold'>{props.price}</h1>
    </div>
    </div>
  
    
  )
}

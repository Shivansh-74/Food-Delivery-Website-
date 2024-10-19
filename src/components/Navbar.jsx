import React,{useState} from 'react'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";

import { Link,NavLink } from "react-router-dom";
export default function Navbar() {
    const[toggle,setToggle]=useState(false)
  return (
    <div className='w-[100%] flex justify-between h-[60px] items-center flex-row bg-gradient-to-r from-orange-100 to-orange-100 '>
 
    <div className="logo mx-8 font-bold text-2xl">SHIV
    <span className='text-red-500'>
    ANSH
    </span>
    
    </div>
    <div className="md:flex hidden md:gap-8 text-1xl md:flex-row flex-col md:mx-1 mx-6 md:my-1 my-3" >
    <NavLink to="/" className="hover:text-orange-700 hover:scale-[1.07] duration-200 text-[1.3em]">Home</NavLink>
    <NavLink to="/about" className="hover:text-orange-700 hover:scale-[1.07] duration-200 text-[1.3em]">About</NavLink>
    <NavLink to="/items" className="hover:text-orange-700 hover:scale-[1.07] duration-200 text-[1.3em]">Items</NavLink>
    <NavLink to="/contact" className="hover:text-orange-700 hover:scale-[1.07] duration-200 text-[1.3em]">Contact</NavLink>
    </div>
    <div className='mx-3 '>
    <button className='md:flex hidden text-white bg-red-500  px-2 py-1 rounded-[10px] my-3 md:mx-3  mt-4 hover:text-red-500 hover:bg-white   hover:border border-red-500 duration-300'>Login</button>
    
    
    {
        !toggle? <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-black text-2xl md:hidden'/>:     <AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-black text-2xl '/>

      }
            </div>
          
    </div>
  )
}

import React from 'react'
import burger2 from '../images/burger2.jpg'
import '../index.css'
import { RiEBike2Fill } from "react-icons/ri";
import { GiHotMeal } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import Card from '../reusable/Card';


export default function Home() {
  return (
    <div className='w-[100%] '>
            {/** home bg */} 
            <div className="md:grid flex flex-col grid-cols-5 h-[80vh] gap-3 bg-gradient-to-t from-zinc-50 to-orange-100">
            <div className="content col-span-3  h-[100%] flex flex-col md:gap-5 gap-1 justify-center  " >
            <div className='w-[75%] p-4 md:ml-20 mx-auto md:mt-2 mt-10'>
            <div>
            <h1 className='md:text-6xl text-4xl font-bold md:text-left text-center cursor-pointer'>Be The Fastest <br />In Delivering Your <span className='text-red-600'>Food</span></h1>
            </div>
            <div className='mt-6 text-gray-800'> 
            <p className='md:text-left text-center cursor-pointer'>"<span className='text-gray-950 '>Food is not rational. Food is culture, habit, craving, and identity </span>" order your favorite food now !!</p>
            <div className='w-[100%] text-center'>
            <button className= 'md:1  text-white bg-red-500 px-3 py-2 rounded-[20px] my-5 hover:text-red-500 hover:bg-white hover:border border-red-500 duration-300'>Order Now</button>

            </div>
            </div>
            </div>
             
            </div>
            <div className="image col-span-2  md:h-[100%] ">
            <img src={burger2} alt="" className='mix-blend-multiply md:w-[100%] md:h-[90%] h-[80%] w-[70%] md:m-4 p-4 mx-auto mt-[-20px] '  />
            </div>

            
            </div>
            {/** why us */}
                <div className='md:mt-0 mt-20  bg-gradient-to-b from-slate-50 to-orange-100'>
                <h1 className='text-3xl font-bold text-center py-8'>WHY US ?</h1>
                <div className="icon md:grid flex flex-col grid-cols-3 w-[70%] p-2 gap-16 mx-auto">

                <div className="col-span-1 h-[250px] border border-red-200 rounded-[20px] flex flex-col gap-4 items-center">
                <div className='mt-5'>
                <RiEBike2Fill className='md:text-7xl text-5xl'/>
                </div>



                 <div className='text-center'>
                 <h1 className='font-bold text-2xl  py-[10px]'>Fastest Delivery</h1>
                 <p className='text-gray-400'>Within 30 minutes of order, you will recive your parcel</p>
                 </div>
                </div>



                <div className="col-span-1 h-[250px] border border-red-200 rounded-[20px] flex flex-col gap-4 items-center">
                <div className='mt-5'>
                <GiHotMeal className='md:text-7xl text-5xl'/>

                </div>
                 <div className='text-center'>
                 <h1 className='font-bold text-2xl py-[10px]'>Quality Food</h1>
                 <p className='text-gray-400'>We make quality food with fresh vegetables and fresh oil</p>
                 </div>
                </div>



                <div className="col-span-1 h-[250px] border border-red-200 rounded-[20px] flex flex-col gap-4 items-center">
                <div className='mt-5'>
                <FaMobileAlt className='md:text-7xl text-5xl'/>

                </div>
                 <div className='text-center'>
                 <h1 className='font-bold text-2xl py-[10px]'>Easy To Order</h1>
                 <p className='text-gray-400'>Order your food easily but this website</p>
                 </div>
                </div>
            
                </div>


                </div>



                {/**Lists */}
                <div className='bg-gradient-to-t from-slate-50 to-orange-100 py-8'>
                <div className="w-[100%] text-center flex  justify-center py-8">
                <h1 className='text-4xl font-bold md:w-[30%] w-[100%] py-5'>Menu That Always Make You Fall In Love</h1>
                </div>
                <div className='w-[100%] flex flex-wrap justify-center gap-8'>
                <Card img="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg" name="Milano Pizza" price="Rs - 298" />
                <Card img="https://static.toiimg.com/thumb/53281477.cms?imgsize=1884587&width=800&height=800" name="Momos" price="Rs - 90" />
                <Card img="https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg" name="Masala Dosa" price="Rs - 120" />
                <Card img="https://dukaan.b-cdn.net/700x700/webp/projecteagle/images/3b9eb5da-6bd2-4d4f-9bf2-8a594cc7159f.jpg" name="Noodles" price="Rs-98" />
                <Card img="https://5.imimg.com/data5/ANDROID/Default/2023/5/308063496/OF/HI/JK/67876875/product-jpeg-500x500.jpg" name="Pasta" price="Rs-80" />
                <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFHMCZ7CnPo5NEqxOwyckoODeiRyLxYmiHg&s" name="Chole Bhature" price="Rs - 298" />
                <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZuHTiGWB-2IMLv4VAejR5Ts6KZI59xcNmMQ&s" name="burger" price="Rs - 88" />
                <Card img="https://cdn2.foodviva.com/static-content/food-images/juice-recipes/abc-juice/abc-juice.jpg" name="Juice" price="Rs - 78" />
                

                </div>
                </div>



                {/** Get order now */}
                <div className='w-[100%] md:grid flex flex-col grid-cols-5'>
                
                <div className='h-[400px] col-span-3 '>
                 <div className="w-[70%] ml-16 mt-10">
                 <p  className='text-1xl text-red-600 my-3 py-2'>Download App</p>
                 <h1 className='text-4xl font-bold my-3 py-2'>GET STARTED WITH FUDO TODAY!</h1>
                 <h6 className='text-1xl text-gray-950 my-3 py-2'> Order now and fresh your mind with tasty food </h6>
                 <button className='text-white bg-red-500 px-3 py-2 rounded-[20px] my-5 hover:text-red-500 hover:bg-white hover:border border-red-500 duration-300'>GET THE APP</button>
                 </div>
                </div>
                <div className='h-[400px] col-span-2  '>
                <img src="https://img.freepik.com/premium-photo/noodles-white-background_894067-20380.jpg" alt="" className='mix-blend-multiply md:w-[100%] md:h-[100%] h-[100%] w-[100%] md:m-4 md:p-4 mx-auto '/>
                </div>

                </div>

    </div>
  )
}

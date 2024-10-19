import React, { useEffect, useLayoutEffect, useState } from 'react'

export default function Items() {
  const [data, setData] = useState([])

  useLayoutEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=s")
      .then((r) => r.json())
      .then((r) => setData(r.meals))
  }, [])

  return (
    <div className='bg-gradient-to-t from-slate-50 to-orange-100'>
    <h1 className='text-center py-5 font-bold text-5xl text-orange-800'>Our Items</h1>
    <div className='w-[100%] flex flex-wrap my-8 gap-8 justify-center'>
    
    {data && data.length > 0 ? (
      data.map((meal) => (
          <div key={meal.idMeal} className='md:w-[250px] md:h-[250px] w-[180px] h-[180px] my-2 hover:scale-[1.05] duration-300'>
          <img src={meal.strMealThumb} alt={meal.strMeal} width="200px" className='border rounded-[20px]'/>
          <h6 className='font-bold text-[0.8em] px-5  py-3'>{meal.strMeal}</h6>

          </div>
          ))
          ) : (
            <p>Loading...</p>
            )}
            {console.log(data)}
            </div>
            </div>
  )
}

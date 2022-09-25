import React from 'react'
import { useNavigate } from "react-router-dom";
function CategoryCard({item}) {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      navigate("/products");
    }
  return (
    <div className='text-center'>
        <img className='absolute object-cover w-[32%] h-[600px]' src={item.img} alt="" />
        <div className='absolute flex flex-col items-center justify-center text-center w-[32%] h-[400px]'>
            <h1 className='text-black'>{item.title}</h1>
            <button onClick={routeChange} className='bg-[#daf7a6] px-3 py-2 mt-[24px]'>Shop Now!</button>
        </div>

    </div>
  )
}

export default CategoryCard
import React from 'react'
import CategoryCard from "./CategoryCard";
import { categories } from "../data";
function Categories() {
  return (
    <div className='grid grid-cols-3 gap-x-5 w-full mt-7 relative h-[600px]'>
        {categories.map((item) => (
        <CategoryCard item={item} key={item.id} />
      ))}</div>
  )
}

export default Categories
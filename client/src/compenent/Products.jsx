import React from 'react'
import Product from "./Product";
import { popularProducts } from "../data";
function Products() {
  return (
    <div className='grid grid-cols-4 gap-x-5 gap-y-3 w-full relative items-start mt-7'>
        {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}</div>
  )
}

export default Products
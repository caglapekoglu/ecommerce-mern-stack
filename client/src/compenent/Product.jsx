import React from 'react'

function Product({item}) {
  
  return (
    <article key={item.slug}  className='px-4'>
        <img className='object-cover h-[400px] w-[300px]' src={item.img} alt="" />
        
    <div className='flex'>
          <button className='p-2 bg-white/70 rounded-full flex items-center '>
          <ion-icon name="cart-outline"></ion-icon>
                </button>
                <button className=' p-2  bg-white/70 rounded-full flex items-center '>
          <ion-icon name="search-outline"></ion-icon>
                </button>
                <button className='p-2  bg-white/70 rounded-full flex items-center '>
          <ion-icon name="heart-outline"></ion-icon>
                </button>
                </div>

    </article>
  )
}

export default Product
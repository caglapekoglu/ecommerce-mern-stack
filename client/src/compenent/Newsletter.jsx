import React from 'react'

function Newsletter() {
  return (
    <div>
        
        <form className='flex flex-col mt-7 justify-center items-center h-[500px] bg-[#BCD590]' action="">
            <h1>Newsletter</h1> 
            
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               <div className='border-[1px] border-white rounded-lg bg-transparent flex items-center justify-center'>
                <input className='bg-transparent focus:outline-none placeholder:text-black/60 px-2 py-1' type="text" placeholder='Your Email' />
                <button><ion-icon name="arrow-redo-outline"></ion-icon></button>
               </div>
      
        </form>
    </div>
  )
}

export default Newsletter
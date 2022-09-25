import React from 'react'

function Navbar() {
  return (
    <header className='h-[60px] flex justify-between items-center px-8 gap-x-5'>
        <div className='flex gap-x-5 items-center'>
        <select id="dropid" className='focus:outline-none rounded-lg text-left p-2 text-gray-700'>
                            <option disabled selected>Kategori</option>
                            <option>Bambu Takımları</option>
                            <option>Mobilyalar</option>
                            <option>Dekor</option>
                        </select>
        <div className='border-[1px] h-[30px] border-[#c7c8cd] flex items-center'>
            <input className="ouline-none border-none h-[25px] focus:outline-none" type="text" />
            <ion-icon name="search-outline"></ion-icon>
        </div>
        </div>
        
        <div>
            <h1 className='text-3xl my-auto'>APRICOUS</h1>
        </div>
        <div>
            <ul className='flex gap-x-5 items-center my-auto'>
                <li>REGİSTER</li>
                <li>SIGN IN</li>
                <li className='text-2xl'><ion-icon name="cart-outline"></ion-icon></li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar
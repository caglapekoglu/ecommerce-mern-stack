import React from 'react'
import Announcement from '../compenent/Announcement'
import Navbar from '../compenent/Navbar'
import Products from '../compenent/Products';
import Newsletter from '../compenent/Newsletter';
function ProductList() {
    return (
        <div>
            <Navbar></Navbar>
            <Announcement></Announcement>
            <div className='mx-5'>
                <h1>Products</h1>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-x-3'>
                        <h4>Filter products</h4>
                        <select id="dropid" className='rounded-lg text-left p-2 border-2 text-gray-700'>
                            <option disabled selected>Color</option>
                            <option value="mutlu">Black</option>
                            <option value="sad">White</option>
                            <option value="peace">Brown</option>
                        </select>
                        <select id="dropid" className='rounded-lg text-left p-2 border-2 text-gray-700'>
                            <option disabled selected>Size</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                        </select>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <h4>Sort products</h4>
                        <select id="dropid" className='rounded-lg text-left p-2 border-2 text-gray-700'>
                            <option disabled selected>Newest:</option>
                            <option>Price(asc)</option>
                            <option>Price(desc)</option>
                        </select>

                    </div>
                </div>
            </div>
            <Products></Products>
            <Newsletter></Newsletter>
        </div>
    )
}

export default ProductList
import React from 'react'
import Navbar from '../compenent/Navbar';
import Announcement from '../compenent/Announcement';
import Slider from '../compenent/Slider';
import Categories from '../compenent/Categories';
import Products from '../compenent/Products';
import Newsletter from '../compenent/Newsletter';

function Home() {
  return (
    <div>
        <Announcement></Announcement>
      <Navbar></Navbar>
     <Slider></Slider>
     <Categories></Categories>
     <Products></Products>
     <Newsletter></Newsletter>
    </div>
  )
}

export default Home
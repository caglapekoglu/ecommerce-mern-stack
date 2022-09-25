import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
const featuredProducts = [
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
    "https://images.unsplash.com/photo-1646775815042-a21ff2c5d145?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2800&q=80"
  ];
const featuredTitle=[
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima itaque rem dolores rerum fuga facilis veritatis accusamus unde odio.",
    "Yenilik değişiklik ve canlılık.",
    "kjhsdshjkdkdsbjkdsbjd"

]
  
  let count = 0;
  let slideInterval;

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };


  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    navigate("/products");
  }
    return (
        <section ref={slideRef} className='flex w-screen h-[600px] justify-between '>
            <div>
                <button className='absolute p-3 mt-[300px] mx-5 bg-white/70 rounded-full flex items-center ' onClick={handleOnPrevClick} >
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </button>
            </div>
            <div className='absolute w-full transition ease-in-out delay-150' style={{"transition": "all 1.5s ease",
  "transform": `translateX(2*-100vw)`}}>
    
                <div className='absolute bg-[#3b3e3b]/70 h-[600px] -z-10 w-full'>
                    <img className='h-[600px] w-full object-cover absolute -z-20' src={featuredProducts[currentIndex]} alt="" />
                    <div className='bg-black/50 h-[600px] w-full absolute px-[200px] flex flex-col items-center justify-center text-center'>
                        <p className='text-white text-3xl'>{featuredTitle[currentIndex]}</p>
                        <button onClick={routeChange}  className='bg-[#daf7a6] px-3 py-2 mt-[24px]'>Shop Now!</button>
                    </div>
                </div>
            </div>

            <div>
                <button className='absolute right-0 mx-5 mt-[300px] p-3 bg-white/70 rounded-full flex items-center' onClick={handleOnNextClick}>
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </button>
            </div>
        </section>
    )
}

export default Slider

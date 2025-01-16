"use client"
import Image from "next/image";

import React from 'react';
import Navbar from "./components/Navbar";
import Services from "./services/page";
import About from "./about/page";
import Contact from "./contact/page";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-5xl text-center text-purple-900 font-serif py-6 ">Fairy Beauty Salon And Treaning Center</h1>
        <div className="py-8 gap-48 flex justify-center">
          <div className='transition-transform duration-300 ease-in-out transform hover:scale-110'>
        <Image 
        src="/img-03.jpeg"
        alt="image 1" 
        width={200}
        height={200}
        />
        </div>
        <div className='transition-transform duration-300 ease-in-out transform hover:scale-110'>
        <Image 
        src="/img-01.jpeg"
        alt="image 2" 
        width={200}
        height={200}
        />
        </div>
        <div className='transition-transform duration-300 ease-in-out transform hover:scale-110'>
        <Image 
        src="/img-02.jpeg"
        alt="image 3" 
        width={200}
        height={200}
        />
        </div>
            </div>
            <div className="flex justify-center  text-rose-900 px-36 py-8"> 
        <p>Achieve the ultimate pampering experience at our beauty salon! Our expert stylists and therapists are dedicated <br></br>
          to providing you with exceptional service and unparalleled relaxation.From rejuvenating facials to stunning makeup looks,<br></br> and fromfr
           precision haircuts to indulgent body treatments, we offer a wide range of services tailored to your unique needs.<br></br>
            Step into our serene oasis and let us help you unlock your full beauty potential. Book your appointment today<br></br> 
            and get ready to glow!</p>
           </div>
           <div className="bg-purple-700 h-8">
            <p className="flex justify-center text-pink-400 font-serif">Step into our salon and experience the art of beauty with our skilled professionals.</p>
           <Services />
           <About />
           <Contact />
           </div>         
    </div>
  )
}

export default Home

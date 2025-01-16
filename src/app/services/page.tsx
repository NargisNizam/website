import Image from 'next/image';
import React from 'react';
function Services() {

  return (
    <div>
      <h1 className=' text-purple-900 text-5xl flex justify-center py-6 font-serif'>Services</h1>
      <p className='text-pink-900 px-8 py-5'>Step into our salon and experience the art of beauty with our skilled professionals. Book your appointment today and let the transformation begin!<br></br>
      Unveil the beauty within! Our service page showcases an array of indulgent treatments tailored to your every need.</p>
      <div className='py-4  grid-rows-3 gap-6 px-14 border-separate grid grid-cols-5'>
      <div className='transition-transform duration-300 ease-in-out transform hover:scale-110'>
      <Image 
        src="/img-1.jpg"
        alt="image 1" 
        width={200}
        height={200}
        />
        </div>
        <div className='transition-transform duration-300 ease-in-out transform hover:scale-110'>
        <Image 
        src="/img-2.jpg"
        alt="image 2" 
        width={200}
        height={200}
        />
        </div>
        <div className='transition-transform duration-300 ease-in-out transform hover:scale-110'>
        <Image 
        src="/img-3.jpg"
        alt="image 3" 
        width={200}
        height={200}
        />
        </div>
        <div className='transition-transform duration-300 ease-in-out transform hover:scale-110'>
        <Image 
        src="/img-4.jpg"
        alt="image 4" 
        width={200}
        height={200}
        />
        </div>
        <div className='transition-transform duration-300 ease-in-out transform hover:scale-110'>
        <Image 
        src="/img-9.jpg"
        alt="image 9" 
        width={200}
        height={200}
        />
        </div>
        <div className='transition-transform duration-300 ease-in-out transform hover:scale-110'>
        <Image 
        src="/img-10.jpg"
        alt="image 10" 
        width={200}
        height={200}
        />
        </div>
        <div className='transition-transform duration-300 ease-in-out transform hover:scale-110'> 
        <Image 
        src="/img-11.jpg"
        alt="image 11" 
        width={200}
        height={200}
        />
        </div>
        <div className='transition-transform duration-300 ease-in-out transform hover:scale-110'>  
        <Image 
        src="/img-12.jpg"
        alt="image 12" 
        width={200}
        height={200}
        />
        </div>
        <div className='transition-transform duration-300 ease-in-out transform hover:scale-110'>  
        <Image 
        src="/img-5.jpg"
        alt="image 5" 
        width={200}
        height={200}
        />
        </div>
        <div className='transition-transform duration-300 ease-in-out transform hover:scale-110'>    
        <Image 
        src="/img-7.jpg"
        alt="image 7" 
        width={200}
        height={200}
        />     
        </div>
      </div>
     </div>
     
            
  )
}

export default Services
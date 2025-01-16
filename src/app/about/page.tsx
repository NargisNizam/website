import React from 'react';
import Image from 'next/image';

function About() {
  return (
    <div id='about container pt-32 py-12'>
        <h2 className= 'text-purple-900 py-4 text-center text-{4xl} md: text-{5xl} font-serif text-3xl'>About Us</h2>
        <p className= 'text-center py-6 text-pink-900 pt-4'>Welcome to our website! We are a team of passionate individuals dedicated to providing top notch services and solutions<br></br>
         Our mission is to empower individuals and businesses to reach new heights With a focus on innovation and customer satisfaction<br></br>
          we strive to deliver exceptional experiences Explore our website to learn more about our offerings and lets collaborate to<br></br>
           achieve greatness together! Hair Styling Unlock your hairs potential with our expert styling services! From sleek and <br></br>
           smooth to bold and bouncy our skilled stylists will craft a look that suits your unique taste and style Whether youre<br></br>
            seeking a fresh everyday look or a show stopping style for a special occasion weve got you covered! Party Makeup <br></br>
            Get ready to shine at your next party or event with our stunning makeup services! Our talented artists will work<br></br>
             with you to create a customized look that complements your features and makes you feel confident and glamorous<br></br>
              From natural and btle to bold and glittering well help you make a statement! Bridal Makeup Say yes to the perfect<br></br>
               wedding day look with our expert bridal makeup services! Our skilled artists will work closely with you to craft a<br></br> 
               customized look that enhances your natural beauty and makes you feel like a princess on your special day <br></br>
               
</p>
<div className='flex justify-center'>
<Image 
        src="/img-09.jpg"
        alt="image 1" 
        width={200}
        height={200}
        />
    </div>
    </div>
  )
}

export default About
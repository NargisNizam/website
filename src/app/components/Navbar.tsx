import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='bg-pink-500 h-14'>
        <div className='bg-purple-800 h-10'>
      <ul className="gap-4 px-3 text-pink-300 flex justify-center items-center ">
      <Link className="cursor-pointer hover:text-green-400" href="/">Home</Link>
      <Link className="cursor-pointer hover:text-green-400" href="/services">Services</Link>
       <Link className="cursor-pointer hover:text-green-400" href="/about">About</Link>
       <Link className='cursor-pointer hover:text-green-400'href="/contact">Contact</Link>
        </ul>  
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'

function Contact() {
  return (
    <div>

<section className="text-pink-900 body-font relative">
  <div className="absolute inset-0 bg-pink-400">
    <iframe width="100%" height="100%"  title="map" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"/>
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-pink-300 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-pink-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-pink-900">Welcome to our website! We are a team of passionate individuals dedicated to providing top-notch services and solutions.</p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-pink-900">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-purple-900 focus:border-pink-9500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-pink-900">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-purple-900 focus:border-pink-900 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-pink-900 bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-400 rounded text-lg">Click</button>
      <p className="text-xs text-pink-900 mt-3">Step into our salon and experience the art of beauty with our skilled professionals.</p>
    </div>
  </div>
</section>
</div>
)
}

export default Contact;
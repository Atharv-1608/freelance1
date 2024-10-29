import React from 'react'
import { IoLogoInstagram } from 'react-icons/io5'
import { MdMailOutline } from "react-icons/md";

const Footer = () => {
    function buttonClick(){
        window.open("https://www.instagram.com/makeupnhairbysanskruti/")
      }

    function buttonMail(){
        window.open("mailto:datharv6@gmail.com")
    }
  return (
    <footer className="shadow-inner text-[#f2f3f4]">
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-3xl font-walkway ">Sanskruti.</h3>
          <p className="mt-2 text-xl font-walkway ">Enhancing Beauty, Crafting Confidence</p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          {/* <nav className="mb-4 md:mb-0 md:mr-8">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Gallery</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Contact</a></li>
            </ul>
          </nav> */}
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/makeupnhairbysanskruti/" className=" transition-colors" >
              <IoLogoInstagram size={27} />
            </a>
            <a href="mailto:sanskrutibhogate@gmail.com" className="transition-colors" >
              <MdMailOutline size={27} />
            </a>
            
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm font-walkway">
        © {new Date().getFullYear()} . All rights reserved.
      </div>
    </div>
  </footer>
  )
}

export default Footer
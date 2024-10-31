import React from 'react'
import { CiMail , CiInstagram } from "react-icons/ci";


const Footer = () => {
    function buttonClick(){
        window.open("https://www.instagram.com/makeupnhairbysanskruti/")
      }

    function buttonMail(){
        window.open("mailto:datharv6@gmail.com")
    }
  return (
    <footer className="shadow-inner text-black">
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">

          <p className="mt-2 text-xl font-walkway font-bold tracking-wider">Sanskruti Bhogate</p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/makeupnhairbysanskruti/" className=" transition-colors " >
              <CiInstagram size={35}  />
            </a>
            <a href="mailto:sanskrutibhogate@gmail.com" className="transition-colors" >
              <CiMail size={35} />
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
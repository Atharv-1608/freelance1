import Footer from "./components/Footer";
import Images from "./components/Images"
import Images2 from "./components/Images2"
import { IoLogoInstagram } from "react-icons/io5";
import Images3 from "./components/Images3";

function App() {
  function buttonClick(){
    window.open("https://www.instagram.com/makeupnhairbysanskruti/")
  }

  return (
    <>
    <div className="flex flex-col pt-10 items-center space-y-4 pb-7 bg-[#f2f3f4]">
     <h1 className="text-7xl font-classy ">SANSKRUTI</h1>
     <div className="flex justify-center items-center space-x-4">
     <h1 className=" text-2xl font-classy font-medium tracking-wider">Makeup n' Hair Artist</h1>
     <IoLogoInstagram size={27} onClick={buttonClick} className="cursor-pointer "/>
     </div>
    </div>
    <div>
      <div className=" bg-[#f2f3f4]">
    <Images />
    <Images2 />
    <Images3 />
    </div>
    <Footer />
    </div>
    </>
  )
}

export default App

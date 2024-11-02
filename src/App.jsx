import Carousel from "./components/Carousel"
import Carousel2 from "./components/Carousel2"
import Carousel3 from "./components/Carousel3"
import Footer from "./components/Footer"
import Header from "./components/Header"

// bg-gradient-to-br from-[#050505] to-[#3d3d3d]

function App() {
  
  return (
    <div className="bg-[#f2f3f4]">
    <Header />
    <div className="px-10">
      <div className="space-y-[-3em] sm:space-y-0 md:space-y-3">
        <Carousel3 />
        <div className=" space-y-[-4em] sm:space-y-2 md:space-y-2">
        <Carousel />
        <Carousel2 />
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default App

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
    <div className="px-10 space-y-10 pt-10">
    <Carousel3 />
    <Carousel />
    <Carousel2 />
    </div>
    <Footer />
    </div>
  )
}

export default App

import Carousel from "./components/Carousel"
import Carousel2 from "./components/Carousel2"
import Footer from "./components/Footer"
import Header from "./components/Header"



function App() {
  
  return (
    <div className="bg-gradient-to-br from-[#050505] to-[#3d3d3d]">
    <Header />
    <div className="px-10 space-y-10 pt-10">
    <Carousel />
    <Carousel2 />
    </div>
    <Footer />
    </div>
  )
}

export default App

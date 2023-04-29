import Navbar from '../Components/Navbar'
import Home from '../Components/Home'
import Footer from '../Components/Footer'

const index = () => {
  return (
    <>
      <div className=' h-screen w-full'>
        <Navbar />
        <Home />
        <Footer/>
      </div>
    </>
  )
}

export default index
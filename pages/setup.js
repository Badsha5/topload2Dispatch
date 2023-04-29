
import  Navbar  from '../Components/Navbar'
import Head from 'next/head'
import Footer from '../Components/Footer'
import CarrierSetupForm from '../Components/Carrier-setup-form'
import Whatsapp from '../Components/Whatsapp'

const  setup = () => {
  return (
    <>-
     <div>
      <Head>
        <title>Carrier-Setup TopLoad-Dispatching-Services</title>
      </Head>
    </div>
    <div>
      
    </div>
    <Navbar/>
    <Whatsapp/>
    <div className='w-5/6 m-auto my-5'> 
      <CarrierSetupForm/>
    </div>
    <Footer/>
    </>
  )
}

export default  setup
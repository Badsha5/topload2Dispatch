
import Navbar from '../Components/Navbar'
import Head from 'next/head'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'
import Whatsapp from '../Components/Whatsapp'
const contact = () => {
  return (
    <>
      <div>
        <Head>
          <title>Contact TopLoad-Dispatching-Services</title>
        </Head>
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Whatsapp />
      </div>
      <div>
      </div>
      <Navbar />
      <div>
        <Footer />
      </div>
    </>
  )
}

export default contact
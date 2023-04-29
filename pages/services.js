
import Navbar from '../Components/Navbar'
import Head from 'next/head'
import Footer from '../Components/Footer'
import Image from 'next/image'
import Cimg from '../public/home4.jpg'
import dryvan from '../public/dryvan.jpg'
import document from '../public/document.png'
import dilivery from '../public/dilivery.png'
import transection from '../public/transection.png'
import dollor from '../public/dollor.png'
import call from '../public/call.png'
import reefer from '../public/reefer.jpg'
import step from '../public/stepdeck.jpg'
import flatbed from '../public/flatbed.jpg'
import power from '../public/Poweronly.jpg'
import Whatsapp from '../Components/Whatsapp'

const services = () => {
  return (
    <>
      <div>
        <Head>
          <title>Services TopLoad-Dispatching-Services</title>
        </Head>
      </div>
      <div>
        <Whatsapp />
      </div>
      <Navbar />
      <div className='w-full h-full '>
        <div className=' mt-5'>
          <h1 className=' font-bold text-3xl text-center pt-3'>Truks We Dispatch</h1>
          <hr className=' border-yellow-600 border-2 w-48 font-semibold m-auto mt-1' />
        </div>
        <div className=' w-5/6 h-full m-auto flex justify-evenly   my-10'>
          <div className='p-5  rounded-2xl w-3/6 mr-1 '>
            <Image className='w-50 h-50 rounded-full m-auto' src={dryvan} />
            <h1 className='text-2xl text-center font-mono '>DRY VAN </h1>
          </div>
          <div className='p-5 w-3/6 rounded-2xl mx-2'>
            <Image className='w-50 h-50 rounded-full m-auto' src={power} />
            <h1 className=' text-2xl text-center font-mono '>POWER ONLY</h1>
          </div>
          <div className='p-5 w-3/6 rounded-2xl ml-1'>
            <Image className='w-50 h-50 rounded-full m-auto' src={reefer} />
            <h1 className='text-center text-2xl font-mono '>REEFERS</h1>
          </div>

        </div>

        <div className=' w-5/6 h-full m-auto flex justify-evenly   my-10'>
          <div className='p-5  rounded-2xl w-3/6 mr-1'>
            <Image className='w-50 h-50 rounded-full m-auto' src={flatbed} />
            <h1 className='text-2xl text-center font-mono '>FLAT BED </h1>
          </div>
          <div className='p-5 w-3/6 rounded-2xl mx-2'>
            <Image className='w-50 h-50 rounded-full m-auto' src={step} />
            <h1 className=' text-2xl text-center font-mono '>STEP DECK</h1>
          </div>

        </div>

        <div className=' bg-slate-200'>
          <div className='mt-5'>
            <h1 className=' font-bold text-3xl text-center pt-3'>Services We Privide</h1>
            <hr className=' border-yellow-600 border-2 w-48 font-semibold m-auto mt-1' />

          </div>
          <div className=' w-5/6 h-full m-auto flex justify-evenly   my-10'>
            <div className='p-5  rounded-2xl w-3/6 mr-1'>
              <Image src={document} className='m-auto' />
              <h1 className='text-2xl text-center font-mono '>Paper Work</h1>
              <p className='w-5/6 m-auto rounded font-sans mt-2 text-center text-base text-gray-700'>We complete all paperwork on your behalf. From New Carrier Packets to Rate Confirmations.</p>
            </div>
            <div className='p-5  rounded-2xl w-3/6 mx-2'>
              <Image src={dilivery} className='m-auto' />
              <h1 className=' text-2xl text-center font-mono  '>BOOKING LOADS</h1>
              <p className='w-5/6 m-auto rounded font-sans mt-2 text-center text-base text-gray-700'>We negotiate and book top paying loads averaging over $2.80 per mile. We look for light loads with fast on and off times! </p>
            </div>
            <div className='p-5  rounded-2xl w-3/6 ml-1'>
              <Image src={call} className='m-auto' />
              <h1 className='text-center text-2xl font-mono  '>PHONE/EMAIL UPDATE</h1>
              <p className='w-5/6 m-auto rounded font-sans mt-2 text-center text-base text-gray-700'>Get on track because here we are setting the seal on the phone and email update and making sure that we are off the same mine before proceeding.</p>
            </div>
          </div>
          <div className=' w-5/6 h-full m-auto flex justify-evenly   my-10'>
            <div className='p-5  rounded-2xl w-3/6 mr-1'>
              <Image src={transection} className='m-auto' />
              <h1 className='text-2xl text-center font-mono '>LUMPER DETENTION</h1>
              <p className='w-5/6 m-auto rounded font-sans mt-2 text-center text-base text-gray-700'>We are concerned about you and are here to ease your workload by helping out your drivers. Our management makes sure to get you the detention well-timed.</p>
            </div>
            <div className='p-5 w-3/6 rounded-2xl mx-2'>
              <Image src={dollor} className='m-auto' />
              <h1 className=' text-2xl text-center font-mono '>FACTORING</h1>
              <p className='w-5/6 m-auto rounded font-sans mt-2 text-center text-base text-gray-700'>Cash flow is important. Let us handle your factoring needs to ensure that your operation keeps it’s wheels rolling.</p>           </div>

            <div className='p-5 w-3/6 rounded-2xl ml-1'>
              <Image src={dollor} className='m-auto' />
              <h1 className='text-center text-2xl font-mono '>CREDIT CHECKS</h1>
              <p className='w-5/6 m-auto rounded font-sans mt-2 text-center text-base text-gray-700'>We run credit checks on all brokers we work with to ensure that you will be paid on time and in a timely manner.</p>
            </div>

          </div>
        </div>

        <div className='flex  my-3 mt-8'>
          <div className='w-1/2 mx-20 font-mano '>
            <h3 className='font-bold text-center text-2xl '>Getting Started With Truck Dispatch</h3>
            <p className=' overflow-auto mt-5'>Our Truck Dispatch Services setup packet is simple. Once you’re ready to start working with us, we will forward you a link to a carrier application to get started. Once we have all the paperwork, you’ll be introduced to your personal dispatcher and start work immediately. We are an experienced and reliable dispatch company who have great relationships with the carriers we work with. That’s why our onboarding is smooth and streamlined. Here is what you need to sign up:</p>
            <ul>
              <li className=' overflow-auto mt-5 '><b>Signed Truck Dispatch Service Agreement</b></li>
              <li className=' overflow-auto '><b>Factoring Information (if any)</b></li>
              <li className=' overflow-auto '><b>General Power Of Attorney (allows us to contact brokers on your behalf)</b></li>
              <li className=' overflow-auto '><b>Copy Of Your MC Authority Letter</b></li>
              <li className=' overflow-auto '><b>Copy Of The Insurance Certificate</b></li>
              <li className=' overflow-auto '><b>Driver’s Contact Info</b></li>
              <li className=' overflow-auto '><b>Copy Of W-9 Form</b></li>
            </ul>
          </div>
          <div className='w-1/2 h-full mt-10'>
            <Image src={Cimg} className='' />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default services
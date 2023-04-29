import Image from 'next/image'
import Himg from '../public/home.jpg'
import Iimg from '../public/home2.jpg'
import Cimg from '../public/home3.jpg'
import Dimg from '../public/home4.jpg'
import Head from 'next/head'
import Whatsapp from '../Components/Whatsapp'

const Home = () => {
    return (
        <>
        
            <div>
                <Head>
                    <title>TopLoad Dispatching Services</title>
                </Head>
            </div>
            <div>
                <Whatsapp/>
            </div>
            <div className='w-full h-max'>
                <div className=' w-full h-full mt-20'>
                    <Image src={Himg} className='w-full h-full  ' />
                </div>
                <div className=' h-full w-full text-cyan-700'>
                    <div className='flex m-auto'>
                        <div className='justify-center w-1/2 text-center '>
                            <h1 className='text-6xl font-semibold font-sans' data-numbers='15000'>0+</h1>
                            <h3 className='text-3xl font-medium font-sans'>Load Booked</h3>
                        </div>
                        <div className=' w-1/2 text-center'>
                            <h1 className='text-6xl font-semibold font-sans'data-numbers='10000'>$0+</h1>
                            <h3 className='text-3xl font-medium font-sans'>Weekely Gross Revenue</h3>
                        </div>
                    </div>
                    <div className='w-full  text-center font-semibold font-serif'>
                        <h1 className=' text-3xl mt-20'>Rate Per Mile  $2.8 to $3.1</h1>
                        <h1 className='text-3xl  mt-10'>Why Chose Us</h1>
                        <p className='mx-20 mt-5'> we offer 24/7 TopLoad Dispatching Services with a quality of communication and support to our worthy truck drivers. our rate are lowest in the market with one month free service.</p>
                    </div>
                </div>
                <div className='flex bg-cyan-700 mt-5 '>
                    <div className='w-1/2  '>
                        <Image src={Iimg} className='rounded-full ' />
                    </div>
                    <div className='w-1/2 mx-20 mt-20 font-mano text-white'>
                        <h3 className='font-bold text-xl '>Dedicated Professional Truck dispatcher</h3>
                        <p className=' overflow-auto mt-5'>We provides transportation logistics and dispatch services to trucking companies or independent truck drivers or owner operators. These services can include finding and booking freight loads, negotiating rates with shippers/brokers and receivers, tracking and monitoring shipments, and providing communication and support throughout thwe entire shipping process. </p>
                    </div>
                </div>


                <div className='flex  my-5 '>
                    <div className='w-1/2 mx-20 mt-20 font-mano '>
                        <h3 className='font-bold text-xl '>TopLoad Dispatching Services</h3>
                        <p className=' overflow-auto mt-5'>America's tops truck dispatching service for trucking companies , owner operators, car haulers , Dry Van , Reefers and  Flatbeds. Avail TopLoad Dispatching Services today </p>
                        <p className=' overflow-auto mt-5'>24/7 Dispatch Support</p>
                        <p className=' overflow-auto '>Contact us : info@topLoaddispatchingservices.com</p>
                    </div>
                    <div className='w-1/2 h-full'>
                        <Image src={Cimg} className='rounded-full' />
                    </div>
                </div>


                <div className='flex  my-3 mt-8'>
                    <div className='w-1/2 h-full mt-10'>
                        <Image src={Dimg} className='' />
                    </div>
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

                </div>

            </div>
        </>
    )
}

export default Home
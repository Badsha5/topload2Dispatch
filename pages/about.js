
import Navbar from '../Components/Navbar'
import Iimg from '../public/home2.jpg'
import Cimg from '../public/about.jpg'
import Image from 'next/image'
import Footer from '../Components/Footer'
import Head from 'next/head'
import Whatsapp from '../Components/Whatsapp'
const about = () => {
  return (
    <>
      <div>
        <Head>
          <title>About TopLoad-Dispatching-Services</title>
        </Head>
      </div>
      <div>
        <Whatsapp/>
      </div>
      <Navbar />
      <div>
        <div className='m-auto pt-5 w-4/6 h-full/12'>
          <Image src={Cimg} />
        </div>
        <div className='w-5/6 h-full m-auto'>
          <h1 className='font-semibold font-sans mt-10 text-center text-2xl'>TopLoad Dispatching Services LLC</h1>
          <p className=' font-sans mt-5 text-center text-base text-grey-100'>There are NO contracts. We know that it is difficult to make money and that is why we charge only a small Percentage Fee for any load we find. This is the lowest service fees in the industry. Other dispatchers and brokers charge much higher fees and do not care about the service they provide to their drivers. You may be wondering, what exactly is truck dispatch services? A truck dispatch services help truck drivers who have their own small trucking company manage the load booking and back-office aspects of running a trucking company. Some dispatchers specialize in solely booking loads, while others, like TopLoad Dispatching Services, offer a wide variety of services such as invoice management and detention requests.</p>
        </div>


        <div className='flex bg-cyan-500 mt-5'>
          <div className='w-1/2 h-full'>
            <Image src={Iimg} className='rounded-full' />
          </div>
          <div className='w-1/2 mx-20 mt-20 font-mano '>
            <h3 className='font-bold text-xl '>Dedicated Professional Truck dispatcher</h3>
            <p className=' overflow-auto mt-5'>We provides transportation logistics and dispatch services to trucking companies or independent truck drivers or owner operators. These services can include finding and booking freight loads, negotiating rates with shippers/brokers and receivers, tracking and monitoring shipments, and providing communication and support throughout thwe entire shipping process. </p>
          </div>
        </div>



        <div className='w-3/6 h-full m-auto'>
          <h2 className='font-semibold font-sans mt-10 text-center text-2xl'>WE SPECIALISED IN</h2>
          <p className=' font-sans mt-5 text-center text-base text-grey-100'>TopLoad Dispatching Services is a "Full Service" truck dispatching company that handles all of the back-office work so you can compete with the large fleets. Typically, a large carrier would hire somebody to handle all of these tasks, but it is unaffordable for a small carrier, that’s where TopLoad Dispatching Services comes in to help! Our process is simple, your dedicated truck dispatcher will work with you by your rules. We develop the best lanes that suit your desired schedule, whether you want to be home every night, every other night, or once every 2 weeks, our freight dispatchers work with you to develop a lane that will achieve your target goals..</p>
        </div>


        <div className='w-full h-full bg-slate-100 mt-10'>
          <div className='w-5/6 h-full p-5 m-auto font-sans text-base'>
            <h1 className='text-center font-semibold text-2xl mt-12'>Benefits Of Hiring A Truck Dispatcher</h1>
            <p>Outsourcing Truck Dispatch Services offer many benefits to owner-operators in addition to finding high-paying loads.</p>
            <h5 className=' font-medium text-lg  mt-5'>#1 – Truck Dispatch Services is more than just finding freight loads</h5>
            <p>It’s obvious that <b>truck dispatcher</b> finds loads for carriers, but they also offer other services that can benefit your operation as a whole.</p>
            <ul>
              <li><b>Motor Carrier</b> Compliance: Our truck dispatchers will ensure that you maintain proper motor carrier compliance so that you can stay out of trouble and continue earning a living.</li>
              <li>Customer Care: Our dispatchers will not only help find high paying loads, we will also help you manage relationships with shippers, establish service expectations with brokers and tackle any complex issues that may arise. </li>
              <li><b>Manage Unexpected Delays:</b> As a truck dispatch company, we are responsible in helping you address unexpected delays caused by weather, traffic and other issues while you’re on the road.</li>
            </ul>
            <p>Dispatch services have incentives to ensure that the entire process from load booking, to negotiating, and transporting goes as smooth.</p>


            <h5 className=' font-medium text-lg  mt-5'>#2 – Outsourcing Dispatching Services Saves Time </h5>
            <p>As an owner operator, you may start out booking loads yourself using load boards. This may work well for a while, but once you start accepting loads, you won’t have enough time to spend on load boards. You’re also missing out on opportunities to make more money on higher-paying loads. </p>
            <p>That’s where a <b>dispatching company</b> can help. Our dispatcher will give you more time to focus on working on your business and less time searching for loads. </p>
            <p>The main cause of failure for most beginner owner-operators is due to lack of finding consistent loads to keep their business moving. Time is money.  </p>


            <h5 className=' font-medium text-lg mt-5'>#3 – Truck Dispatchers Work For You </h5>
            <p>As <b>truck dispatchers</b> providing freight dispatching services, we take a percentage of your rate. This gives us the incentive to negotiate high rates on your behalf. The more money you make, the more money we make. </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default about

import Form from '../Components/ContactForm'
const Contact1 = () => {
  return (
    <>
       
       <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6294242.872015769!2d-94.5579049479897!3d39.61907987159244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1682289573550!5m2!1sen!2s"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>

      <div className='text-white bg-black font-mono w-full h-full'>
        <h1 className=' font-bold text-3xl text-center pt-3'>Contact Us</h1>
        <hr className=' border-yellow-600 border-2 w-28 font-semibold m-auto' />

        <div className='text-center  w-full '>
          <div className='flex flex-rowsspace-x-10 w-full p-5 '>
            <div className='w-1/4 text-center  my-10'>
              <h5 className='font-semibold text-2xl'>Location</h5>
              <p className='text-gray-300 font-light my-2'>Crawford MS, USA</p>
            </div>

            <div className='w-1/4 text-center my-10 '>
              <h5 className='font-semibold text-2xl'>E-mail</h5>
              <p className='text-gray-300 font-light mt-2'>contact@toploaddispatchingservices.com</p>
              <p className='text-gray-300 font-light'>info@toploaddispatchingservices.com</p>
            </div>

            <div className='w-1/4 text-center my-10 '>
              <h5 className='font-semibold text-2xl'>Phone</h5>
              <p className='text-gray-300 font-light mt-2'>(123) 123-1234</p>
              <p className='text-gray-300 font-light'>(123) 123-1234</p>
            </div>

            <div className='w-1/4 text-center my-10 '>
              <h5 className='font-semibold text-2xl'>Opening Hours</h5>
              <p className='text-gray-300 font-light mt-2'>Mon–Fri: 10:00 am–6:00 pm </p>
              <p className='text-gray-300 font-light'>Sat–Sun: 11:00 am–4:00 pm</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-slate-300 w-full h-full'>
        <Form />
      </div>
    </>
  )
}

export default Contact1
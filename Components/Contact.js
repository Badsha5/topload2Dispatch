import Image from 'next/image'
import message from '../public/message.png'
import phone from '../public/phone.png'
import Link from 'next/link'
const Contact = () => {
    return (
        <>
            <div className='w-full h-secreen'>
                <h3 className=' text-7xl font-bold font-serif mt-20 mb-20 ml-28 '>Get in Touch</h3>
                <div className='w-5/6 m-auto rounded-xl  bg-slate-200'>
                    <div className='flex'>
                        <div className='w-3/6 ml-7 m-auto my-20 h-full rounded-2xl bg-white'>
                            <div className='w-3/6 my-7 m-auto'>
                                <Link href="tel:+923219342639" >
                                    <Image src={phone} className='m-auto w-10 h-10' />
                                </Link>
                                <h4 className='text-center my-5'>Call Us</h4>
                                <p className='text-center mb-5'> (000) 000-1234</p>
                            </div>
                        </div>

                        <div className='w-3/6 mx-7 m-auto my-20 h-full rounded-2xl bg-white'>
                            <div className='w-3/6 my-7 m-auto'>
                                <Link href="mailto:alihassanain1@gmail.com" >
                                    <Image src={message} className='m-auto w-10 h-10' />
                                </Link>
                                <h4 className='text-center my-5'>Email</h4>
                                <p className='text-center mb-5'>info@toploaddispatchingservices.com</p>
                            </div>
                        </div>
                    </div>


                    <div className='ml-7 m-auto w-5/6 h-full over pb-10 mb-5'>
                        <h3 className='text-3xl mb-5 font-serif font-medium '>Send us a message</h3>
                        <div>
                            Name *    <input placeholder='full name' type='text' name='Name'
                                autoComplete='off'
                                required
                                className='w-full h-8 rounded p-2 my-2  outline-none' />
                        </div>
                        <div>
                            Phone *    <input placeholder='Phone' type='text' name='Phone'
                                autoComplete='off'

                                className='w-full h-8 rounded p-2 my-2  outline-none' />
                        </div>
                        <div>
                            Email *    <input placeholder='email' type='Email' name='Email'
                                autoComplete='off'
                                required
                                className='w-full h-8 rounded p-2 my-2  outline-none' />
                        </div>
                        <div>
                            Type of Trailer (No Power Only, No Box Truck, No Hotshot Dispatch)* :    <input placeholder='type of trailer' type='text' name='Type of Trailer'
                                autoComplete='off'
                                required
                                className='w-full h-8 rounded p-2 my-2  outline-none' />
                        </div>
                        <button
                            className='w-full h-8 rounded p-1 bg-blue-700 text-white my-4 hover:bg-blue-800  active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 ' >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
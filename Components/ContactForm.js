import Image from 'next/image'
import img from '../public/5.jpg'
const ContactForm = () => {
    const submit = () => {
        alert('Request submit succesfully')
    }
    return (
        <>
            <div className='flex flex-row'>
                <div className='w-1/2 h-full m-auto py-10 ml-10'>

                    <form  >
                        <div className='w-4/6'>
                            <div className='flex flex-row w-full my-8'>
                                <input type="text" placeholder='name' className='px-3 py-1'required />
                                <input type="text" placeholder='email' className=' ml-6 px-3 py-1s'required />
                            </div>
                            <textarea rows="4" placeholder='Message here !' className='w-full 'required />
                        </div>
                        <button className='bg-blue-400  px-5 p-2 mt-2 rounded-md' onClick={submit}>Submit</button>
                    </form>
                </div>
                <div className='w-1/2 h-full'>
                    <Image src={img}/>
                </div>
            </div>
        </>
    )
}

export default ContactForm
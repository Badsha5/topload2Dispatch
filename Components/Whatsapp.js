import Link from 'next/link'
import Image from 'next/image'
import whatsapp from '../public/whatsapp1.gif'
const Whatsapp = () => {
  return (
    <>
        <div>
                <Link href="https://wa.me/+923219342639">
                    <Image aria-label="Chat on WhatsApp" className='w-15 h-15 fixed bottom-10 right-10 bg-black ' alt="Chat on WhatsApp" src={whatsapp} />
                </Link>
            </div>
    </>
  )
}

export default Whatsapp
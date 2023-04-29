import Link from "next/link"



const Navbar = () => {
    return (
        <>
            <nav className=' w-full bg-slate-100 h-20 fixed top-0'>
                <div className="flex h-full ">
                    <div className=" ml-30 m-auto  text-2xl">
                    <Link href={'/'}>
                        <h1 className="font-medium font-mono ">TopLoad Dispatching</h1>
                        </Link>
                    </div>
                    <div className="font-medium font-sarif  justify-evenly m-auto space-x-12  ">
                        <Link href={'/'} >
                            <span className="  ">Home</span>
                        </Link>
                        <Link href={'/about'}>
                        <span className="  ">About</span>

                        </Link>
                        <Link href={'/contact'}>
                            Contact
                        </Link>
                        <Link href={'/services'}>
                            Services
                        </Link>
                        <Link href={'/setup'}>
                            Carrier Setup
                        </Link>
                        {/* <Link href={'/setup'}>
                            Shipper Setup
                        </Link> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
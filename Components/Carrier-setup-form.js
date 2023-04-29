
const CarrierSetupForm = () => {


    return (
        <div>

            <div className='w-auto h-fit bg-slate-300 rounded-2xl'>
                <section className='w-11/12 m-auto pt-1'>
                    <div className='w-full mt-10'>
                        <h1 className='text-center font-bold text-3xl'>
                            TopLoad Dispatching LLC
                        </h1>
                        <h3 className='text-center font-bold text-3xl'>
                            Carrier Setup
                        </h3>
                        ----------------------------------------------------------------------------------------------------
                        <form method='POST'
                            action='https://formspree.io/f/xzbqyjen'
                            className="">

                            <div>
                                <p className="mt-2">This Agreement is made on this day of / to between” TopLoad Dispatching Services LLC hereafter referred to as Dispatcher and here in after</p>
                                <input placeholder='Company Name' type='name' name='Company'
                                    autoComplete='off'
                                    required
                                    className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                <p className="mt-2">Referred to as CARRIER. DISPATCHER is a transportation dispatcher handling the necessary paperwork between SHIPPERS and/or BROKERS and the CARRIER in order to secure” Freight” for said CARRIER.</p>
                                <p className="my-2">WHEREAS, CARRIER is a Motor CONTRACT Carrier subject to the jurisdiction of the ICC: NOW, THEREFORE, in consideration of the promises and covenants hereinafter contained it is mutually agreed by and between the parties hereto as follows:</p>
                                <h2 className="text-2xl mt-5">OBLIGATIONS OF CARRIER</h2>
                                <ul>
                                    <li className="mt-2">•-DISPATCHER agrees to handle paperwork, phone calls, and faxes from the BROKER or SHIPPER to tender commodities shipments to CARRIER for  transportation in interstate commerce by CARRIER between points and places within the scope of CARRIER’S operating authority.</li>
                                    <li className="mt-2">•-DISPATCHER bears no financial or legal responsibility in the transaction between the SHIPPER or Broker and you the CARRIER.</li>
                                    <li className="mt-2">•-Dispatcher will find ALL your loads so there are no mix ups.</li>
                                    <li className="mt-2">•-DISPATCHER will:</li>
                                    <li className="mt-2">•-Make 100 % effort to keep truck(s) loaded.</li>
                                    <li className="mt-2">•-CARRIER will be contacted (by phone call/text/email) about EVERY load we find to offer, and theDriver will ACCEPT or REJECT the load.</li>
                                    <li className="mt-2">•-Invoice the CARRIER at the time of service; also provide a copy of each Load Confirmation Sheet.</li>
                                    <li className="mt-2">•-Payment is due to DISPATCHER at time of invoice.</li>
                                </ul>
                                <h2 className="text-2xl mt-5">TopLoad Dispatching Services LLC</h2>
                            </div>

                            <div>
                                <label for="country" >
                                    Country
                                </label><br />
                                <select name="country" id="country"
                                    autoComplete='off'
                                    className='w-full h-8 rounded p-1  bg-slate-100 outline-none' >
                                    <option value="Supervisor">United State (USA) </option>
                                    <option value="Co-Supervisor">Canada</option>
                                </select>
                            </div>
                            <div>
                                <input placeholder='Title' type='Title' name='Title'
                                    autoComplete='off'
                                    required
                                    className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                            </div>
                            <div className="w-full flex">
                                <input placeholder='First Name' type='name' name='first-name'
                                    autoComplete='off'
                                    required
                                    className='w-1/2 h-8 rounded p-2 my-2 bg-slate-100 outline-none ' />
                                <input placeholder='Last Name' type='name' name='last-name'
                                    autoComplete='off'
                                    required
                                    className='w-1/2 h-8 ml-5 rounded p-2 my-2 bg-slate-100 outline-none ' />
                            </div>
                            <div>
                                <input placeholder='Enter your email' type='email' name='email'
                                    autoComplete='off'
                                    required
                                    className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                            </div>
                            <div className="w-full flex">
                                <input placeholder='Date' type='date' name='Date'
                                    autoComplete='off'
                                    required
                                    className='w-1/2 h-8 rounded p-2 my-2 bg-slate-100 outline-none ' />
                                <select name="Payment" id="Payment"
                                    autoComplete='off'
                                    className='w-1/2 h-8 rounded ml-5  px-2 my-2 bg-slate-100 outline-none ' >
                                    <option value="Supervisor">5 % </option>
                                    <option value="Co-Supervisor">$ 250 /week</option>
                                </select>
                            </div>
                            ----------------------------------------------------------------------------------------------------

                            <div>
                                <h3 className="text-2xl mt-5 ">We will also need the following from your company to start working for You:</h3>
                                <ul>
                                    <li className="mt-2">•-A complete W 9 Form. We have one you can fill out if you don’t have one.</li>
                                    <li className="mt-2">•-A Copy of your motor Carrier Authority Form</li>
                                    <li className="mt-2">•-A copy of your insurance Certificate.</li>
                                </ul>
                                <h4 className="text-2xl mt-5">Carrier/ Company Profile Form</h4>
                                <p className="mt-2"><b>Instructions:</b> Please Complete this form giving us all the information that pertains to you and your company. The better informed we are, the better we will be able to assist you. This form can be updated at any time by notifying us. This information is for our use only and will not be released to any third party without your express written permission.</p>
                            </div>
                            ----------------------------------------------------------------------------------------------------

                            <div>
                                <h3 className="text-2xl mt-5 text-center"> Part 1: Carrier Profile Information Section </h3>
                                <div>
                                    Company :    <input placeholder='Company' type='text' name='Company'
                                        autoComplete='off'
                                        required
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    D/B/A (If any) :    <input placeholder='D/B/A' type='text' name='D/B/A'
                                        autoComplete='off'
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    Email Address :    <input placeholder='Email' type='email' name='Email'
                                        autoComplete='off'
                                        required
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    Physical Address:    <input placeholder='Address' type='Address' name='Address'
                                        autoComplete='off'
                                        required
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    CITY :    <input placeholder='CITY' type='text' name='CITY'
                                        autoComplete='off'
                                        required
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    STATE :    <input placeholder='STATE' type='text' name='STATE'
                                        autoComplete='off'
                                        required
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    ZIP CODE :    <input placeholder='ZIP CODE' type='number' name='ZIP CODE'
                                        autoComplete='off'
                                        required
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    CELL :    <input placeholder='CELL' type='phone' name='CELL'
                                        autoComplete='off'
                                        required
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    Emergency Contact :    <input placeholder='Emergency Contact ' type='phone ' name='Emergency Contact '
                                        autoComplete='off'
                                        required
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    Phone :    <input placeholder='Phone' type='Phone' name='Phone'
                                        autoComplete='off'
                                        required
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    WEBSITE (if any)    <input placeholder='WEBSITE' type='text' name='WEBSITE'
                                        autoComplete='off'
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    DOT# :    <input placeholder='DOT' type='number' name='DOT'
                                        autoComplete='off'
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    MC# :    <input placeholder='MC' type='number' name='MC'
                                        autoComplete='off'
                                        required
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    SSN/EIN# :    <input placeholder='SSN/EIN' type='number' name='SSN/EIN'
                                        autoComplete='off'
                                        required
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    TWIC CERTIFIED :    <input placeholder='TWIC CERTIFIED' type='text' name='TWIC CERTIFIED'
                                        autoComplete='off'
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    HAZMAT CERTIFIED :    <input placeholder='HAZMAT CERTIFIED' type='text' name='HAZMAT CERTIFIED'
                                        autoComplete='off'
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                            </div>
                            ----------------------------------------------------------------------------------------------------

                            <div>
                                <h3 className="text-2xl mt-5 text-center"> Part 2: Equipment Section </h3>
                                <p>For more than one truck use the multiple truck 48’ VAN/Reefer:</p>
                                <div>
                                    53’ VAN/Reefer :    <input placeholder='53’ VAN/Reefer:' type='text' name='53’ VAN/Reefer:'
                                        autoComplete='off'
                                        required
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    FLATBED/STEPDECK/HOTSHOT Trailer Length :    <input placeholder='Trailer Length:' type='number' name='Trailer Length:'
                                        autoComplete='off'
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    AIR RIDE :    <input placeholder='AIR RIDE:' type='text' name='AIR RIDE:'
                                        autoComplete='off'
                                        required
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    Truck/ Trailer Number:   <input placeholder='Truck/ Trailer Number:' type='number' name='Truck/ Trailer Number:'
                                        autoComplete='off'
                                        required
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <h5>*** ALL FLATBEDS MUST HALL FULL SECUREMENT EQUIPMENT TO INCLUDE TARPS***</h5>
                                <div>
                                    Max Load Weight :    <input placeholder='Max Load Weight:' type='number' name='Max Load Weight:'
                                        autoComplete='off'
                                        required
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>

                            </div>
                            ----------------------------------------------------------------------------------------------------

                            <div>
                                <h3 className="text-2xl mt-5 text-center"> PART 3: Factoring Information </h3>
                                <p className="mt-3"><b>COMMENTS:</b> If you use a factoring service, please provide us with the following information. This will ensure that we only use brokers that are approved by your factoring company.</p>
                                <p className="my-2">FACTORING COMPANY Name: (N/A will have one by the end of this week)</p>
                                <div>
                                    CONTACT :    <input placeholder='CONTACT' type='text' name='Factoring-CONTACT'
                                        autoComplete='off'
                                        
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    PHONE :    <input placeholder='PHONE' type='number' name='PHONE'
                                        autoComplete='off'
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    FAX :    <input placeholder='FAX' type='text' name='Factoring-FAX'
                                        autoComplete='off'
                                        
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    WEBSITE:   <input placeholder='WEBSITE' type='text' name='WEBSITE:'
                                        autoComplete='off'
                                        
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    US BILLING ADDRESS :    <input placeholder='US BILLING ADDRESS:' type='text' name='Factornig US BILLING ADDRESS:'
                                        autoComplete='off'
                                        
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    US CITY :    <input placeholder='US CITY:' type='text' name='Factornig US CITY:'
                                        autoComplete='off'
                                        
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    US STATE :    <input placeholder='US STATE' type='text' name='Factornig US STATE'
                                        autoComplete='off'
                                        
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    US ZIP Code :    <input placeholder='US ZIP Code:' type='text' name='Factornig US ZIP Code::'
                                        autoComplete='off'
                                        
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    WEB PORTAL USERNAME :    <input placeholder='WEB PORTAL USERNAME' type='text' name='Factornig WEB PORTAL USERNAME:'
                                        autoComplete='off'
                                        
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    PASSWORD :    <input placeholder='PASSWORD' type='text' name='Factornig PASSWORD'
                                        autoComplete='off'
                                        
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                    <p className="my-3">We will need login information for your factoring company to run credit checks.</p>
                                </div>
                            </div>
                            ----------------------------------------------------------------------------------------------------


                            <div>
                                <h3 className="text-2xl mt-5 text-center"> Part 4: PAYMENT FORM </h3>
                                <p className="mt-3">I Hereby authorize <b>TopLoad Dispatching Services LLC </b> to charge my stated credit card / debit card for the stated order number and amount.</p>
                                <p className="my-2"><b>Quote # Dispatching</b></p>
                                <div>
                                    Quote Amount :    <input placeholder='Quote Amount' type='text' name='Quote Amount'
                                        autoComplete='off'
                                        required
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    BILL TO: Card holder's name :    <input placeholder='BILL TO: Card holders name' type='number' name='BILL TO: Card holders name:'
                                        autoComplete='off'
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <p className="my-3">Quote amount is based upon information provided by customer. Customer agrees to the quote. and authorizes SECURE DISPATCHING SERVICES LLC to charge credit card below to cover any additional charges incurred by 3rd party as a result of information provided by customer deemed to be inaccurate. If the credit card is declined, the shipment can be stopped.</p>
                                <div>
                                    Payment Card Type:   <input placeholder='Payment Card Type' type='text' name='Payment Card Type:'
                                        autoComplete='off'
                                        required
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    others :    <input placeholder='others' type='text' name='others'
                                        autoComplete='off'

                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    Card Number :    <input placeholder='Card Number:' type='text' name='Card Number:'
                                        autoComplete='off'
                                        required
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    Expiration date (Month/Year) :    <input placeholder='Expiration date (Month/Year)' type='month' name='Expiration date (Month/Year):'
                                        autoComplete='off'
                                        required
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    Card Verification /Security code :    <input placeholder='Card Verification /Security code' type='text' name='Card Verification /Security code'
                                        autoComplete='off'

                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    CARD BILLING ADDRESS :    <input placeholder='CARD BILLING ADDRESS' type='text' name='CARD BILLING ADDRESS'
                                        autoComplete='off'
                                        required
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    CITY :    <input placeholder='CITY' type='text' name='CITY'
                                        autoComplete='off'

                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                    <p className="my-3">We will need login information for your factoring company to run credit checks.</p>
                                </div>
                                <div>
                                    STATE/ZIP/COUNTRY :    <input placeholder='STATE/ZIP/COUNTRY:' type='text' name='STATE/ZIP/COUNTRY:'
                                        autoComplete='off'
                                        required
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    PHONE NUMBER :    <input placeholder='PHONE NUMBER' type='text' name='PHONE NUMBER'
                                        autoComplete='off'
                                        required
                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    EMAIL ADDRESS :    <input placeholder='EMAIL ADDRESS' type='text' name='EMAIL ADDRESS'
                                        autoComplete='off'

                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                    <p className="my-3">I certify that I am an authorized holder and signer of the card referenced above. I authorize the SECURE DISPATCHING SERVICES LLC to charge the mentioned amount from my card on my behalf for using the Dispatch Services.</p>
                                </div>
                                <div>
                                    CARD HOLDER'S SIGNATURE :    <input placeholder='CARD HOLDERS SIGNATURE' type='text' name='CARD HOLDERS SIGNATURE:'
                                        autoComplete='off'

                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                                <div>
                                    DATE :    <input placeholder='DATE' type='date' name='DATE'
                                        autoComplete='off'

                                        className='w-full h-8 rounded p-2 my-2 bg-slate-100 outline-none' />
                                </div>
                            </div>

                            <div>
                                <button
                                    className='w-full h-8 rounded p-1 bg-blue-700 text-white my-4 hover:bg-blue-800' >
                                    Resister
                                </button>
                            </div>
                        </form>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default CarrierSetupForm
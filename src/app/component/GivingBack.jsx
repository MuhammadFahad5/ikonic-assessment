import React from 'react'
import Image from 'next/image'
import back_1 from '../../../public/greenlight/greenlight-back-1.png'
import back_2 from '../../../public/greenlight/greenlight-back-2.png'
import back_3 from '../../../public/greenlight/greenlight-back-3.png'

const GivingBack = () => {
    return (
        <section>
            <div className='my-container'>
                <div className='my-row'>
                    <div className='my-col flex justify-between flex-wrap items-center'>
                        <div className='max-w-[1100px]'>
                            <h2 className='text-[#240D4B] text-[30px]  md:text-[50px]  xl:text-[55pxpx] 2xl:text-[70px] font-extrabold xl:leading-[55px] 2xl:leading-[80px] mb-4'>
                                Greenlight giving back

                            </h2>
                            <p className='text-[#240D4B] text-[18px] md:text-[25px] font-normal mb-4'>
                                First and foremost, we are business, but we are also doing our bit to be the good guys! Here’s how we’re supporting the local community.                            </p>
                        </div>
                        <div>
                            <button className='text-[#fff] font-extrabold text-[19px] bg-[#240D4B] border-4 border-[#240D4B] w-[180px] rounded-xl p-2 '>
                                Get Started
                            </button>
                        </div>


                    </div>

                </div>
                <div className='my-row !items-start lg:!mx-[-16px]'>
                    <div className='p-3 lg:p-[28px] w-full md:w-1/3'>
                        <div className='bg-[#EDEFBB] rounded-[10px]'>
                            <Image
                                src={back_1}
                                alt="Green Light"
                                className="w-full"
                            />

                        </div>
                        <div className='mt-5'>
                            <h2 className='text-[#240D4B] text-[25px] font-extrabold my-2'>
                                Family In Action

                            </h2>
                            <p className='text-[#240D4B] text-[17px] lg:text-[25px] font-nromal mb-2'>
                                We donate 1% of our profits to this vital charity, helping families in need.                           </p>
                        </div>

                    </div>
                    <div className='p-3 lg:p-[28px] w-full md:w-1/3'>
                        <div className='bg-[#EDEFBB] rounded-[10px]'>
                            <Image
                                src={back_2}
                                alt="Green Light"
                                className="w-full"
                            />

                        </div>
                        <div className=' mt-5'>
                            <h2 className='text-[#240D4B] text-[25px] font-extrabold my-2'>
                            Learning Support

                            </h2>
                            <p className='text-[#240D4B] text-[17px] lg:text-[25px] font-nromal mb-2'>
                            We train and employ young adults with disabilities to build confidence, develop web skills, and earn a meaningful income.                        </p>
                        </div>

                    </div>
                    <div className='p-3 lg:p-[28px] w-full md:w-1/3'>
                        <div className='bg-[#EDEFBB] rounded-[10px]'>
                            <Image
                                src={back_3}
                                alt="Green Light"
                                className="w-full block"
                            />

                        </div>
                        <div className=' mt-5'>
                            <h2 className='text-[#240D4B] text-[25px] font-extrabold my-2'>
                            Community support
                            </h2>
                            <p className='text-[#240D4B] text-[17px] lg:text-[25px] font-nromal mb-2'>
                            We create free websites for businesses in need, keeping them online and operational during challenging times.                       </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default GivingBack
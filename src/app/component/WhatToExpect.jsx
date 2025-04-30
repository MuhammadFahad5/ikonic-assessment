import React from 'react'
import Image from 'next/image'
import green_fast from '../../../public/greenlight/green-light-fast.png'
import green_afford from '../../../public/greenlight/green-light-afford.png'
import green_clear from '../../../public/greenlight/green-light-clear.png'
// import green_clear from '../../../public/greenlight/green-light-clear.png'
import green_light from '../../../public/greenlight/green-light.png'
import brown from '../../../public/greenlight/Brown.png'
import Daniel from '../../../public/greenlight/Daniel.png'
import './HeroSection.css'

const WhatToExpect = () => {
    return (
        <section className='bg-[#240D4B] py-24'>
            <div className='my-container !pr-0'>
                <div className='my-row'>
                    <div className='my-col !pr-0'>
                        <h2 className='uppercase text-[29px] font-normal text-[#fff] tracking-widest mb-10'>
                            HERE’S WHAT TO EXPECT:

                        </h2>

                        <div className='w-full'>
                            <div className='flex items-center gap-4 py-6 px-3 md:px-12 greenlight-shadow w-full mb-10'>
                                <div>
                                    <div>
                                        <Image
                                            src={green_fast}
                                            alt="Fast"
                                            className=""
                                        />

                                    </div>

                                </div>
                                <div>
                                    <h3 className='text-[30px] md:text-[45px] xl:text-[70px] font-extrabold text-[#AEE9B6]'>
                                        Fast Turnarounds
                                    </h3>
                                    <p className='text-[18px] md:text-[25px] text-[#fff]'>Get your website live in record time without compromising on quality.</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-8 py-6 px-3 md:px-16 greenlight-shadow w-full mb-10'>
                                <div>
                                    <div>
                                        <Image
                                            src={green_afford}
                                            alt="Afford"
                                            className=""
                                        />

                                    </div>

                                </div>
                                <div>
                                    <h3 className='text-[30px] md:text-[45px] xl:text-[70px] font-extrabold text-[#AEE9B6]'>
                                        Affordable options
                                    </h3>
                                    <p className='text-[18px] md:text-[25px] text-[#fff]'>High-end designs at prices that won’t break the bank.</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4 py-6 px-3 md:px-12 greenlight-shadow w-full mb-10'>
                                <div>
                                    <div>
                                        <Image
                                            src={green_clear}
                                            alt="clear"
                                            className=""
                                        />

                                    </div>

                                </div>
                                <div>
                                    <h3 className='text-[30px] md:text-[45px] xl:text-[70px] font-extrabold text-[#AEE9B6]'>
                                        Clear and honest deliverables
                                    </h3>
                                    <p className='text-[18px] md:text-[25px] text-[#fff]'>No jargon, no surprises—just exactly what you need.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className='my-container'>
                <div className='my-row bg-[#fff] rounded-[22px] md:m-3'>
                    <div className='w-full lg:w-1/2 !p-0'>
                        <div>
                            <Image
                                src={green_light}
                                alt="Green Light"
                                className="w-full"
                            />

                        </div>

                    </div>
                    <div className=' p-3 w-full lg:w-1/2'>
                        <div className='xl:-translate-x-[120px] 2xl:-translate-x-[220px] xl:w-[120%]'>
                            <h3 className='text-[#240D4B] bg-[#AEE9B6] text-[17px] md:text-[23px] font-normal rounded-[9px] w-[280px] md:w-[380px] pl-4 md:px-5 mb-2 xl:mb-4'>
                                A message from our founder
                            </h3>
                            <h2 className='text-[#240D4B] text-[30px]  md:text-[45px] lg:text-[30px] xl:text-[50px] 2xl:text-[65px] font-extrabold xl:leading-[55px] 2xl:leading-[80px]'>
                                Greenlight was created to fix the pitfalls I’ve seen over my 20 year career

                            </h2>
                        </div>

                        <div className='max-w-[630px] mt-5 xl:mt-7'>
                            <p className='text-[#232323] text-[14px] xl:text-[18px] font-normal mb-2 xl:mb-4'>
                                When I started this journey, I had one goal in mind: to simplify the process of building high-quality websites for businesses like yours. I’ve seen too many people overwhelmed by complicated tech, delays—and I knew there had to be a better way
                            </p>
                            {/* <p className='text-[#232323] text-[18px] font-normal mb-4'>
                                At Green Light Digital, we believe every business deserves a professional online presence without the stress. That’s why we focus on speed, affordability, and transparency.
                            </p> */}
                            <p className='text-[#232323] text-[14px] xl:text-[18px] font-bold mb-2 xl:mb-4'>
                                Thank you for trusting us with your vision. We’re excited to help you bring it to life!
                            </p>
                            <div className='flex'>
                                <div>
                                    <Image
                                        src={Daniel}
                                        alt="Green Light"
                                        className="w-full"
                                    />

                                </div>
                                <div>
                                    <Image
                                        src={brown}
                                        alt="Green Light"
                                        className="w-full"
                                    />

                                </div>

                            </div>
                            <div className='flex flex-wrap justify-between items-center mt-4'>
                                <div>
                                    <h4 className='text-[#232323] text-[19px] font-extrabold'>Daniel Brown</h4>
                                    <h4 className='text-[#232323] text-[19px] font-normal mb-4'>Founder & Director</h4>
                                </div>
                                <div>
                                    <button className='text-[#fff] font-extrabold text-[19px] bg-[#240D4B] border-4 border-[#240D4B] w-[180px] rounded-xl p-2 '>
                                        Get Started
                                    </button>
                                </div>

                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatToExpect
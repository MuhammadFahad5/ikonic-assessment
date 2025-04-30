import React from 'react'

const SpeedResult = () => {
    return (
        <section className='relative' 
         style={{
            backgroundImage: 'url("/bg-speed.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
          
          >
            <div className='bg-[#AEE9B6] w-[20%] absolute top-0 bottom-0 left-0'></div>
            <div className='my-container relative z-10'>
                <div className='my-row'>
                    <div className='p-3 w-full lg:w-1/2'>
                        <div className='mt-16 mb-8 bg-[#fff] px-4 sm:px-8 py-12 xl:py-20 xl:px-16 rounded-[40px]'>
                            <h2 className='text-[30px] md:text-[50px] lg:text-[45px] xl:text-[60px] font-bold sm:leading-[70px] text-[#240D4B]'>
                            We’re all about simplicity, speed and results
                            </h2>
                            <p className='text-[14px] text-[#232323] mt-3'>
                            Our unique approach combines pre-designed templates with customisation options to match your brand’s unique identity. This means you get a beautifully designed, fully responsive, and optimised website faster than ever, with the confidence that everything is crafted with intention and expertise.
                            </p>
                            <p className='text-[14px] text-[#232323] mt-4'>
                            We’re not just building websites; we’re powering up your online presence so you can focus on what you do best.
                            </p>

                            <div className='pt-14 flex flex-wrap gap-5'>
                                <div>
                                    <button className='text-[#fff] font-extrabold text-[19px] bg-[#240D4B] border-4 border-[#240D4B] w-[180px] rounded-xl p-2 '>
                                       Find Out More
                                    </button>
                                </div>
                                <div>
                                    <button className='text-[#232323] font-extrabold text-[19px] bg-transparent border-4 border-[#AEE9B6] w-[180px] rounded-xl p-2 '>
                                        Talk to Us
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='p-3 w-full lg:w-1/2'>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpeedResult
import React from 'react'
import mobile_img from '../../../public/getwebsite/get-your-website-all.png'
import get_icon from '../../../public/getwebsite/get-your-website-icon.png'
import get_side from '../../../public/getwebsite/get-your-website-side.png'
import Image from 'next/image'

const GetYourWebsite = () => {
    return (
        <section className='flex flex-wrap xl:flex-nowrap my-12 md:mt-[100px] md:mb-[150px]'>
            <div className='hidden xl:block w-full mx-auto min-h-[500px] xl:w-[40%] relative mb-10 xl:mb-0'>
                <div className='bg-[#AEE9B6] h-[550px] xl:h-full w-full xl:w-[92%]  xl:rounded-l-[0px] rounded-r-[65px]'>
                <Image
                    src={mobile_img}
                    alt="portfolio"
                    className="block xl:hidden w-[480px] h-[580px] mx-auto"
                />

                </div>

                <Image
                    src={mobile_img}
                    alt="portfolio"
                    className="hidden xl:block w-[480px] h-[580px]  xl:w-[960px] xl:h-[1035px] absolute xl:left-0 xl:bottom-[-115px] xl:right-[-20px]"
                />



            </div>
            <div className='bg-[#F5F5F5] w-full xl:w-[60%] rounded-l-[65px] p-10 md:p-20 relative overflow-hidden'>
                <h2 className='text-[#240D4B] font-extrabold text-[30px] md:text-[70px]'>Get your website in </h2>
                <h2 className='text-[#89D991] font-extrabold text-[30px] md:text-[70px]'>three easy steps</h2>
                <div className='flex gap-5 mt-2'>
                    <div className='hidden lg:block'>
                        <Image
                            src={get_icon}
                            alt="icon"
                            className=" w-[78px]"
                        />


                    </div>
                    <div className='flex flex-col gap-8 md:gap-[70px] mt-1'>
                        <div>
                            <h4 className='text-[#240D4B] font-extrabold text-[20px] md:text-[28px]'>Select</h4>
                            <p className='text-[#022221] font-normal text-[14px] md:text-[18px]'>From our library of professional-grade templates, </p>
                        </div>
                        <div>
                            <h4 className='text-[#240D4B] font-extrabold text-[20px] md:text-[28px]'>Customise</h4>
                            <p className='text-[#022221] font-normal text-[14px] md:text-[18px]'>With brand-specific colors, fonts, and images </p>
                        </div>
                        <div>
                            <h4 className='text-[#240D4B] font-extrabold text-[20px] md:text-[28px]'>Launch</h4>
                            <p className='text-[#022221] font-normal text-[14px] md:text-[18px]'>A website that’s ready to go live and drive results. </p>
                        </div>
                        <div>
                            <button className='text-[#232323] font-extrabold text-[19px] bg-transparent border-4 border-[#AEE9B6] w-[180px] rounded-xl p-2 mt-[-20px] relative z-10'>
                                Talk to Us
                            </button>
                        </div>

                    </div>

                </div>
                <div>
                    <Image
                        src={get_side}
                        alt="icon"
                        className="w-[200px] md:w-[300px] 2xl:w-[380px] absolute bottom-[-150px] right-0"
                    />


                </div>

            </div>
        </section>
    )
}

export default GetYourWebsite
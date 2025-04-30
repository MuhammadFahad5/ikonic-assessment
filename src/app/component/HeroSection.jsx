
"use client"
import React, { useRef } from 'react'
import banner_1 from '../../../public/home/banner_1.svg'
import banner_2 from '../../../public/home/banner_2.svg'
import down_arrow from '../../../public/home/Icon akar-arrow-right.png'
import Image from 'next/image'
import './HeroSection.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HeroSection = () => {

    
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
    autoplaySpeed: 2000,
    };
    return (
        <section className='bg-[#240D4B] pt-48 pb-5'>
            <div className='my-container'>
                <div className='my-row'>
                    <div className='p-3 w-full xl:w-1/2'>

                        <div className='xl:mt-20 main-banner-content'>
                            <h1 className='text-[#fff] font-extrabold text-[50px] md:text-[70px] xl:text-[88px] 2xl:text-[110px] md:leading-[110px] '>
                                Ready To Go
                            </h1>
                            <h2 className='text-[#AEE9B6] font-extrabold text-[28px] xl:text-[40px] mt-8'>Smart and efficient websites</h2>
                            <p className='text-[#fff] font-normal text-[18px] pt-12'>
                                We specialize in building high-quality, template-based websites that save you time, energy, and money without sacrificing design or functionality.
                            </p>
                            <p className='text-[#fff] font-bold text-[20px] pt-5'>
                                Talk to us and we’ll get you up and running!
                            </p>
                            <div className='pt-14 flex flex-wrap gap-5'>
                                <div>
                                    <button className='text-[#032727] font-extrabold text-[19px] bg-[#AEE9B6] border-4 border-[#AEE9B6] w-[180px] rounded-xl p-2 '>
                                        Our Websites
                                    </button>
                                </div>
                                <div>
                                    <button className='text-[#fff] font-extrabold text-[19px] bg-transparent border-4 border-[#AEE9B6] w-[180px] rounded-xl p-2 '>
                                        Talk to Us
                                    </button>
                                </div>
                            </div>
                            <div className='mt-24 flex gap-16'>
                                <div>
                                    <Image
                                        src={down_arrow}
                                        alt="Arrow"
                                        className="w-[38px]"
                                    />

                                </div>
                                <span className='text-[22px] font-extrabold text-[#fff]'>Affordable options</span>

                                {/* <div className="">
                                    <Slider
                                        
                                        {...settings}
                                    >
                                        <div key={1} className='px-4'>
                                            
                                        <span className='text-[22px] font-extrabold text-[#fff]'>Affordable options</span>
                                        </div>
                                        <div key={2} className='px-4'>
                                        <span className='text-[22px] font-extrabold text-[#fff]'>Affordable options</span>
                                        </div>
                                        <div key={3} className='px-4'>
                                        <span className='text-[22px] font-extrabold text-[#fff]'>Affordable options</span>
                                        </div>
                                    </Slider>
                                </div> */}

                            </div>
                        </div>


                    </div>
                    <div className='p-3 w-full hidden xl:block xl:w-1/2'>
                        <div className='bg-[#41286C] xl:absolute top-0 right-0 pt-72 pl-8 pb-8 pr-28 2xl:pr-[150px] rounded-bl-[280px] main-banner'>
                            <div className='w-[100%] max-w-[500px] xl:max-w-[500px] 2xl:max-w-[580px] mx-auto relative image-con'>
                                <Image
                                    src={banner_1}
                                    alt="Main banner"
                                    className="w-[95%] "
                                />
                                <Image
                                    src={banner_2}
                                    alt="Main banner"
                                    className="w-full absolute top-[] bottom-[0px] right-[18px] left-[]"
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroSection
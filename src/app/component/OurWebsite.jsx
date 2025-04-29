"use client"
import React,{ useRef } from 'react'
import first from '../../../public/ourwebsite/first.png'
import second from '../../../public/ourwebsite/second.png'
import third from '../../../public/ourwebsite/third.png'
import left from '../../../public/ourwebsite/left-arrow.png'
import right from '../../../public/ourwebsite/right-arrow.png'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const OurWebsite = () => {


    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    // const settings = {
    //     // dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3.5,
    //     slidesToScroll: 1
    // };




    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
    autoplaySpeed: 2000,
        // initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            //   dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            //   initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };




    return (
        <section className='my:12 md:my-28'>
            <div className='my-container'>
                <div className='my-row'>
                    <div className='my-col'>
                        <div className='mb-12 md:mb-24 flex justify-between items-center flex-wrap'>
                            <div className='flex gap-8 items-center flex-wrap'>
                                <h2 className='text-[#240D4B] font-bold text-[30px] md:text-[70px] '>Our Website </h2>
                                <div className='flex gap-4'>
                                    <div onClick={previous} className='cursor-pointer'>
                                        <Image
                                            src={left}
                                            alt="website"
                                            className="w-full bg-black rounded-full"
                                        />
                                    </div>
                                    <div onClick={next} className='cursor-pointer'>
                                        <Image
                                            src={right}
                                            alt="website"
                                            className="w-full bg-black rounded-full border-2 border-[#89D991]"
                                        />
                                    </div>

                                </div>
                            </div>
                            <div>
                                <button className='text-[#032727] font-extrabold text-[19px] bg-[#89D991] border-4 border-[#89D991] w-[250px] rounded-xl p-2 mt-4 md:mt-0'>
                                    See More Website
                                </button>
                            </div>

                        </div>
                        <div className="slider-container">
                            <Slider
                                ref={slider => {
                                    sliderRef = slider;
                                }}
                                {...settings}
                            >
                                <div key={1} className='px-4'>
                                    <Image
                                        src={first}
                                        alt="website"
                                        className="w-full"
                                    />
                                </div>
                                <div key={2} className='px-4'>
                                    <Image
                                        src={first}
                                        alt="website"
                                        className="w-full"
                                    />
                                </div>
                                <div key={3} className='px-4'>
                                    <Image
                                        src={second}
                                        alt="website"
                                        className="w-full"
                                    />
                                </div>
                                <div key={4} className='px-4'>
                                    <Image
                                        src={third}
                                        alt="website"
                                        className="w-full"
                                    />
                                </div>

                                <div key={5}>
                                    <Image
                                        src={second}
                                        alt="website"
                                        className="w-full"
                                    />
                                </div>

                            </Slider>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default OurWebsite
'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import main_Logo from '../../../public/logo/logo.png'
// import hame_burger_menu from '../../../public/logo/burger-menu.png'
import email from '../../../public/home/Icon material-email.png'
import phone from '../../../public/home/Icon material-local-phone.png'
import insta from '../../../public/home/Icon corebrands-instagram.png'
import facebook from '../../../public/home/Icon corebrands-facebook-f.png'
import linkedin from '../../../public/home/Icon akar-linkedin-fill.png'

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) { // 10px scroll
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [activeIndex, setActiveIndex] = useState(3); // Default active is the last item ("Talk to Us")
    const menuItems = ['OurWebsite', 'About Us', 'Reviews', 'Talk to Us'];
    const [mobileMenu, setMobileMenu] = useState(false)
    return (
        <>
            {/* <nav className="w-full fixed top-0 left-0 right-0 z-[100] bg-transparent"> */}
            <nav
                className={`w-[98%] fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'hidden' : 'bg-transparent'
                    }`}
            >
                <div className='my-container'>
                    <div className='flex flex-wrap gap-9 justify-center md:justify-end mb-5'>
                        <div className='flex items-center gap-2'>
                            <div>
                                <Image
                                    src={email}
                                    alt="Mail"
                                    className=" w-[17px]"
                                />
                            </div>
                            <span className='text-[#fff] text-[14px] font-normal'>info@greenlight-digital.co.uk</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div>
                                <Image
                                    src={phone}
                                    alt="Phone"
                                    className=" w-[17px]"
                                />
                            </div>
                            <span className='text-[#fff] text-[14px] font-normal'>01234 567 890</span>

                        </div>
                        <div className='flex items-center gap-2'>
                            <div>
                                <Image
                                    src={facebook}
                                    alt="facebook"
                                    className=" w-[9px]"
                                />
                            </div>
                            <div>
                                <Image
                                    src={linkedin}
                                    alt="Linkedin"
                                    className=" w-[17px]"
                                />
                            </div>
                            <div>
                                <Image
                                    src={insta}
                                    alt="Insta"
                                    className=" w-[15px]"
                                />
                            </div>

                        </div>


                    </div>
                    <div className='flex items-center w-full justify-between pl-3'>
                        <Link href="#">
                            <Image
                                src={main_Logo}
                                // width={250}
                                // height={48}
                                alt="LOGO"
                                className="w-[80%] sm:w-full max-w-[375px]"
                            />
                        </Link>

                        <div className="lg:hidden mr-4" onClick={() => setMobileMenu(true)}>
                            <button className=" flex items-center text-primary rounded-md ">
                                <svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Hamberger menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                               
                            </button>
                        </div>

                        <div className="hidden lg:flex justify-center items-center">
                            <ul className="flex gap-5 xl:gap-6 2xl:gap-10 w-full max-w-[600px] xl:max-w-[650px] 2xl:max-w-[700px]">
                                {menuItems.map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`font-extrabold text-[15px] 2xl:text-[17px] px-5 py-2 rounded-lg cursor-pointer ${activeIndex === index
                                                ? 'bg-[#AEE9B6] text-[#032727]'
                                                : 'text-[#fff]'
                                            }`}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>


            <div className={`fixed z-[999] inset-0 bg-gray-800 opacity-50 ${mobileMenu ? '' : 'hidden'}`} onClick={() => setMobileMenu(false)} />
            <nav className={`transition-all fixed z-[1000] bg-white top-0 ${mobileMenu ? 'left-0' : 'left-[-100%]'} bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 border-r overflow-y-auto`}>
                <div className="flex items-center justify-between mb-8">

                    <button className="navbar-close" onClick={() => setMobileMenu(false)}>
                        <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12">
                            </path>
                        </svg>
                    </button>
                </div>
                <div className=" ">
                    <ul className='flex flex-col'>
                        <li className='header-nav-list-mobile'><Link href="/">Our Websites</Link></li>
                        <li className='header-nav-list-mobile'><Link href="/">About Us</Link></li>
                        <li className='header-nav-list-mobile'><Link href="/">Reviews</Link></li>
                        <li className='header-nav-list-mobile'><Link href="/">Talk To Us</Link></li>
                    </ul>

                </div>
                {/* <div className="mt-auto">
                    <div className="pt-6">
                       
                        <a className="block m-1 bg-primary border border-gray-300 hover:bg-gray-100 text-gray-300  px-4 py-3 mb-3 text-sm text-center font-semibold rounded-md" href="/signin">
                            Sign in
                        </a>
                        <div className="flex flex-wrap sm:flex-nowrap items-center gap-1 justify-center">
                            <FaFacebookF size={20} className=" cursor-pointer bg-white transition-all hover:bg-[#3b5a9a] rounded-full text-[#222] hover:text-white w-[28px] h-[28px] p-[6px]" />
                            <FaXTwitter size={20} className="cursor-pointe bg-white transition-all hover:bg-[#0073b2] rounded-full text-[#222] hover:text-white w-[28px] h-[28px] p-[6px]" />

                            <TiSocialLinkedin size={20} className="cursor-pointer bg-white transition-all hover:bg-[#1aa9e1] rounded-full text-[#222] hover:text-white w-[32px] h-[32px] p-[6px]" />
                            <FaInstagram size={20} className="cursor-pointe bg-white transition-all hover:bg-[#7c4a3a] rounded-full text-[#222] hover:text-white w-[28px] h-[28px] p-[6px]" />
                        </div>

                    </div>
                    <p className="my-4 text-xs text-center text-gray-400">
                        <span>The Credentialing Copyright © 2024</span>
                    </p>
                </div> */}
            </nav>


        </>
    )
}

export default Header







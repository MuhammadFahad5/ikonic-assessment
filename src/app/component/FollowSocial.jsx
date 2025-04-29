import React from 'react'
import Image from 'next/image'

import insta from '../../../public/home/Icon corebrands-instagram.png'
import facebook from '../../../public/home/Icon corebrands-facebook-f.png'
import linkedin from '../../../public/home/Icon akar-linkedin-fill.png'
import social_1 from '../../../public/social/social-5.png'
import social_2 from '../../../public/social/social-2.png'
import social_3 from '../../../public/social/social-6.png'
import social_4 from '../../../public/social/social-4.png'

const FollowSocial = () => {
    return (
        <section>
            <div className='my-container'>
                <div className='my-row'>
                    <div className='my-col flex justify-between flex-wrap items-center'>
                        <div className='max-w-[1100px]'>
                            <h2 className='text-[#240D4B] text-[30px]  md:text-[50px]  xl:text-[55pxpx] 2xl:text-[70px] font-extrabold xl:leading-[55px] 2xl:leading-[80px] mb-4'>
                                Follow us on social media
                            </h2>

                        </div>
                        <div>
                            <div className='flex items-center gap-2'>
                                <div className='bg-[#240D4B] w-[66px] h-[64px] rounded-[14px] flex justify-center items-center'>
                                    <Image
                                        src={facebook}
                                        alt="facebook"
                                        className=" w-[20px]"
                                    />
                                </div>
                                <div className='bg-[#240D4B] w-[66px] h-[64px] rounded-[14px] flex justify-center items-center'>
                                    <Image
                                        src={linkedin}
                                        alt="Linkedin"
                                        className=" w-[36px]"
                                    />
                                </div>
                                <div className='bg-[#240D4B] w-[66px] h-[64px] rounded-[14px] flex justify-center items-center'>
                                    <Image
                                        src={insta}
                                        alt="Insta"
                                        className=" w-[37px]"
                                    />
                                </div>

                            </div>

                        </div>


                    </div>


                </div>
                <div className='my-row'>
                    <div className='my-col-4'>
                        <div >
                            <Image
                                src={social_1}
                                alt="social"
                                className=" w-full"
                            />
                        </div>
                    </div>

                    <div className='my-col-4'>
                        <div >
                            <Image
                                src={social_2}
                                alt="social"
                                className=" w-full"
                            />
                        </div>
                    </div>


                    <div className='my-col-4'>
                        <div >
                            <Image
                                src={social_3}
                                alt="social"
                                className=" w-full"
                            />
                        </div>
                    </div>


                    <div className='my-col-4'>
                        <div >
                            <Image
                                src={social_4}
                                alt="social"
                                className=" w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FollowSocial
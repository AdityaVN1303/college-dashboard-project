import React from 'react'
import Image from 'next/image'
import { SlSocialInstagram, SlSocialReddit, SlSocialLinkedin, SlSocialFacebook } from 'react-icons/Sl';

const Footer = () => {
  return (
    <div class="flex justify-center py-14 md:py-0 md:justify-between items-center bg-black text-center text-yellow-400">
    <div className="one  md:ml-52 flex flex-col">
    <h3 className='text-3xl'>Follow us on</h3>
    <div class="social mt-10 flex justify-center space-x-2 md:space-x-8 cursor-pointer">
    <SlSocialInstagram className='p-3 md:text-3xl rounded-md box-content border-2 border-yellow-500'/>
    <SlSocialLinkedin className='p-3 md:text-3xl rounded-md box-content border-2 border-yellow-500'/>
    <SlSocialReddit className='p-3 md:text-3xl rounded-md box-content border-2 border-yellow-500'/>
    <SlSocialFacebook className='p-3 md:text-3xl rounded-md box-content border-2 border-yellow-500'/>

    </div>
    </div>
    <div className="two">
      <Image width={600} height={1000} src="https://i.imgur.com/7IMfjSL.gif" className='hidden md:h-96 md:block'/>
    </div>
  </div>
  
  )
}

export default Footer
import React from 'react';
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <div className='bg-[#1A1919]  w-full xl:px-[5%] md:px-[2%] px-[3%] py-12'>
      {/* -row-main-div- */}
      <div className='flex flex-row items-center justify-around text-[#FFF] border-b-[1px] border-[#9873ff33] pb-6'>
         {/* ---first-row-- */}
        <div className='space-y-4'>
          
        <h1 className=' text-2xl font-extrabold text-center md:text-start'>Chakri-Khujo</h1>
          <p className='lg:text-sm text-xs text-[#ffffffb3] font-medium md:block hidden'>There are many variations of passages of <br />
           Lorem Ipsum , but the majority have suffered <br />
           alteration in some form.</p>
          <div className='flex gap-3 text-xl justify-center md:justify-start'>
            <div>
              <BsFacebook/>
            </div>
            <div>
              <BsInstagram/>
            </div>
            <div>
              <BsTwitter/>
            </div>
          </div>
        </div>
        {/* --second-row-- */}
        <div className='space-y-4 md:block hidden'>
          <h1 className='text-xl font-semibold'>Company</h1>
          <div className='text-sm font-medium text-[#ffffffb3]'>
            <ul><li>About us</li></ul>
            <ul><li>View us</li></ul>
            <ul><li>Latest news</li></ul>
            <ul><li>Job placement</li></ul>

          </div>
        </div>
        {/* ---third-row-- */}
        <div className='space-y-4 lg:block hidden'>
          <h1 className='text-xl font-semibold'>Products</h1>
          <div className='text-sm font-medium text-[#ffffffb3]'>
            <ul><li>proto Type</li></ul>
            <ul><li>Plan and percing</li></ul>
            <ul><li>Customers</li></ul>
            <ul><li>Integetions</li></ul>

          </div>
        </div>
        {/* --fourth-row- */}
        <div className='space-y-4 lg:block hidden'>
          <h1 className='text-xl font-semibold'>Support</h1>
          <div className='text-sm font-medium text-[#ffffffb3]'>
            <ul><li>Help Desk</li></ul>
            <ul><li>Sales</li></ul>
            <ul><li>Developers</li></ul>
            <ul><li>Become a partner</li></ul>

          </div>
        </div>
        {/* --five-row- */}
        <div className='space-y-4 md:block hidden'>
          <h1 className='text-xl font-semibold'>Contact us</h1>
          <div className='text-sm font-medium text-[#ffffffb3]'>
            <ul><li>524 Broadway , NYC</li></ul>
            <ul><li>phone : +1 777 - 978 - 5570</li></ul>
           

          </div>
        </div>

      </div>

      <div className='flex flex-row items-center justify-center md:justify-between pt-3 '>
        <div>
          <p className='text-xs text-[#ffffff66] font-semibold text-center'> copyright &copy; 2023 chakri-khujo. All Rights Reserved.
        </p>
        </div>
        <div className='md:block hidden'>
          <p className='text-xs text-[#ffffff66] font-semibold'>Powered by Chakri-khujo.com</p>
        </div>

      </div>

     <p className='text-center pt-10 text-white md:text-base text-sm'>Developed by team <Link to="https://midgeneration.com/" className='hover:underline hover:text-[#0866FF] text-[#838383]'>Mid Generation</Link></p>
    </div>
    
    
    
    </>
  )
}

export default Footer
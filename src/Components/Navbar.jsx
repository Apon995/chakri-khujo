import {React,useState} from 'react'
import { NavLink } from 'react-router-dom';
import user from '../../src/assets/user.png';
import bg1 from '../../src/assets/bg1.png'
import bg2 from '../../src/assets/bg2.png';
import PropTypes from 'prop-types';
import {AiOutlineMenu} from 'react-icons/ai';
import {RxCross2} from 'react-icons/rx'

function Navbar({ currentLocation }) {
 const [Menu, setMenu] = useState(true)


 const handleToggleNav=()=>{
  setMenu(!Menu);
  if(Menu){
    document.getElementById('navLink').style.top = '70px';
  }
  else{
    document.getElementById('navLink').style.top = '-150px';

  }
 }
  
  return (
    <>
      <nav className='py-3 bg-inherit'>
        <div className='flex  items-center justify-between  '>

          <div>
            <h1 className='text-[#1A1919] text-2xl font-extrabold'>Chakri-Khujo</h1>
          </div>

          <div className='md:hidden block'>
             <button onClick={handleToggleNav} className='text-xl'>{Menu ? <AiOutlineMenu/> :<RxCross2/> }</button>
          </div>

          <div id='navLink' className='md:static absolute top-[-150px] duration-500 left-0 md:bg-inherit bg-white md:shadow-none shadow-lg md:w-fit w-full md:text-start text-center py-8 '>
            <ul className='flex md:flex-row flex-col md:gap-4 gap-2'>
              <li><NavLink className="text-base text-[#101010] font-bold" to='/'>Statistics</NavLink></li>
              <li><NavLink className='text-base text-[#101010] font-bold' to='/AppliedJobs'>Applied Jobs</NavLink></li>
              <li><NavLink className='text-base text-[#101010] font-bold' to='/Blog'>Blog</NavLink></li>
            </ul>
          </div>
          <div className='md:block hidden'>
            <button className='px-4 py-2 border-[1px] text-base font-medium bg-gradient-to-l from-[#7e90fe] to-[#9873ff] rounded-md text-white hover:opacity-95'>Star Applying</button>
          </div>
        </div>
        {

          currentLocation == "home" ? <div className='flex md:flex-row flex-col-reverse gap-4 pt-5'>
            <div className='my-auto md:w-[50%] w-full space-y-2 md:text-start text-center '>
              <h1 className='lg:text-6xl text-4xl text-[#1A1919] font-extrabold leading-tight'>One Step Closer <br />
                To <span className='bg-gradient-to-r from-[#7e90fe] to-[#9873ff] ' style={{ WebkitBackgroundClip: "text", backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Your Dream Job</span> </h1>
              <p className='text-[#757575] text-sm font-semibold  '>
                Explore thousands of job opportunities with all 
                the information you need. Its your future. Come find it.
                Manage all your job application from start to finish.
              </p>

              <button className='px-4 py-2 border-[1px] text-base font-medium bg-gradient-to-l from-[#7e90fe] to-[#9873ff] rounded-md text-white hover:opacity-95'>Get Started</button>
            </div>

            <div className='md:w-[50%] w-full '>
              <img src={user} alt=".." className='w-[75%] mx-auto' />
            </div>
          </div> :
            <div className=' flex justify-between text-center w-full'>
              <div className='flex-1 '>
                <img src={bg1} alt=".." className='pt-[120px] opacity-60' />
              </div>
              <div className='my-auto flex-1'>
                <h1 className='md:text-2xl text-base text-[#1A1919] font-semibold'>{
                  /^Home\/([1-9]|1[0-2])$/.test(currentLocation) ? 'Job Details' : currentLocation
                }</h1>
              </div>
              <div className=' flex-1'>
                <img src={bg2} alt=".." className='float-right opacity-80' />
              </div>

            </div>


        
        }







      </nav>
    </>
  )
}
Navbar.propTypes = {
  currentLocation : PropTypes.string
}
export default Navbar
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard.jsx';
import Jobcard from "./JobCard.jsx";







function Home() {
 

  const data = useLoaderData();
  const [Seemore ,setSeeMore] = useState(4);
  return (
    <>
      <div className=' py-12 '>
        <div className='w-full text-center space-y-2'>
          <div>
            <h1 className='md:text-4xl text-2xl font-bold text-[#1A1919]'>Job Category List</h1>
            <p className='text-sm text-[#757575] font-medium'>Explore thousands of job opportunities with all the information you need. Its your future</p>

          </div>
          <div className='pt-8 grid xl:grid-cols-4  lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-5'>

            {
              data?.slice(0, 4).map((job, index) => <CategoryCard key={index} job={job} />)
            }

          </div>
        </div>

        <br />
        <br />
        <div className='w-full space-y-9 pt-[100px]'>

          <div className='text-center w-full'>
            <h1 className='text-4xl font-bold text-[#1A1919]'>Featured Jobs</h1>
            <p className='text-sm text-[#757575] font-medium'>Explore thousands of job opportunities with all the information you need. Its your future</p>
          </div>

          <div className='grid lg:grid-cols-2 grid-cols-1 gap-7'>
            {data?.slice(0,Seemore).map((job,index)=> <Jobcard key={index} job={job}/> )}

          </div>



        {
          Seemore !== data.length ? <div className='text-center w-full'>
          <button onClick={()=> setSeeMore(data.length)} className="px-4 py-2 border-[1px] text-base font-medium bg-gradient-to-l from-[#7e90fe] to-[#9873ff] rounded-md text-white hover:opacity-95">See more</button>
          </div> : ''
        }
         
        </div>



















      </div>



    </>
  )
}

export default Home
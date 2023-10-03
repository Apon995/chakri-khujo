import { React, useState, useEffect } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai'
import { useLoaderData } from 'react-router-dom';
import { DeleteTostograge, getStoreValue } from './Store';
import AppliedCard from './AppliedCard.jsx';




function Applied() {

  const data = useLoaderData();
  const [AppliedJobs, setAppliedJobs] = useState([]);
  const [filterjobs, setFilterjobs] = useState([])

  useEffect(() => {
    let arr = [];
    let currentappiled = getStoreValue();

    currentappiled.forEach(element => {
      let item = data.filter(item => item.id == element);
      arr.push(item);

    });

    setAppliedJobs(arr)
  }, [AppliedJobs.length])


  const HandleToDelete = (ID) => {
    DeleteTostograge(ID)

    let remaining = AppliedJobs.filter(item => item[0].id != ID);
    setAppliedJobs(remaining)
  }

  const HandleTofilterJobs = () => {



    let reverseJobs = AppliedJobs.reverse()
    setFilterjobs(reverseJobs);

    setAppliedJobs(filterjobs)



  }


  return (
    <>
      <div className='w-full min-h-screen py-12 flex flex-col gap-4'>
        <div>
          <button onClick={HandleTofilterJobs} className='inline-flex items-center bg-[#F4F4F4] text-black font-medium text-base px-4 py-2 rounded-md float-right'>Filter by  <AiOutlineArrowDown /> </button>

        </div>
        <div className='flex flex-col gap-4'>
          {
            AppliedJobs?.map((job, index) => <AppliedCard key={index} job={job} HandleToDelete={HandleToDelete} />)
          }
        </div>

      </div>



    </>
  )
}

export default Applied
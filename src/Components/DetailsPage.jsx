import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { PiSubtitlesBold } from "react-icons/pi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import {  SlLocationPin } from "react-icons/sl";
import { SaveTostorage, getStoreValue } from "./Store";
import Swal from "sweetalert2";

function DetailsPage() {
  const [Details, setDetails] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();


  useEffect(() => {
    let FindDetails = data.find((item) => item.id == id);
    setDetails(FindDetails);
  }, [id]);

  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    contact_information,
    job_title,
  } = Details || {};

  const handleToAppliedJob = () => {
    let currentApplied = getStoreValue();

    

    if (currentApplied.length == 0) {
      Swal.fire({
        title: 'Applied successFully',
        icon: 'success',
        timer: 2500,
        confirmButtonText: 'okay'
      })
      return SaveTostorage(id)
    }
    else {

      let unique = currentApplied.find(ID => ID == id);



      if (unique == undefined) {
        Swal.fire({
          title: 'Applied successFully',
          icon: 'success',
          timer: 2500,
          confirmButtonText: 'okay'
        })
        return SaveTostorage(id);
      }
      else {
        return Swal.fire({
          title: 'You already applied this job !',
          icon: 'warning',
          timer: 2500,
          confirmButtonText: 'okay'
        })

      }



    }
  }
  return (
    <>
      <div className="flex md:flex-row flex-col gap-4 py-10 ">
        <div className="xl:w-[70%] lg:w-[60%] md:w-[55%] w-full">
          <div className="space-y-5 py-6 px-3">
            <h1 className="text-xl font-semibold text-[#1A1919]">
              Job Description:{" "}
              <span className="text-base font-medium text-[#757575]">
                {job_description}
              </span>
            </h1>

            <h2 className="text-xl font-semibold text-[#1A1919]">
              Job Responsibility:
              <span className="text-base font-medium text-[#757575]">
                {" "}
                {job_responsibility}
              </span>
            </h2>

            <h3 className="text-xl font-semibold text-[#1A1919]">
              Educational Requirements: <br />
              <p className="text-base font-medium text-[#757575]">
                {educational_requirements}
              </p>
            </h3>

            <h4 className="text-xl font-semibold text-[#1A1919]">
              Experiences: <br />
              <p className="text-base font-medium text-[#757575]">
                {experiences}
              </p>
            </h4>
          </div>
        </div>

        <div className="xl:w-[30%] lg:w-[40%] md:w-[45%] w-full border-2 rounded-md bg-gradient-to-r from-[#7e90fe1a] to-[#9873ff1a] py-6 px-5 ">
          <div>
            <h1 className="border-b-[1px] border-[#9a9a9a] w-full pb-2 text-xl text-[#1A1919] font-bold">
              Job Details
            </h1>
            <div className="py-5 space-y-2">
              <h2 className="inline-flex items-center text-[#474747] md:text-xl text-base gap-1">
                <HiOutlineCurrencyDollar /> Salary :{" "}
              <span className="md:text-base text-sm text-[#757575]">{salary}</span>{" "}
              </h2>
         
              <h2 className="inline-flex items-center text-[#474747] md:text-xl text-base gap-1">
                <PiSubtitlesBold /> Job title :{" "}
              <span className="md:text-base text-sm text-[#757575]">{job_title}</span>{" "}
              </h2>
             
            </div>
          </div>
          <div>
            <h1 className="border-b-[1px] border-[#9a9a9a] w-full pb-2 text-xl text-[#1A1919] font-bold">
              {" "}
              Contact Information
            </h1>

            <div className="py-5 space-y-2">
              <h2 className="inline-flex items-center text-[#474747] md:text-xl text-base gap-1">
                <BsFillTelephoneFill /> Phone :{" "}
                <span className="md:text-base text-sm text-[#757575]">
                  {" "}
                  {contact_information?.phone}{" "}
                </span>{" "}
              </h2>
              <br />
              <h2 className="inline-flex items-center text-[#474747] md:text-xl text-base gap-1">
                <AiOutlineMail /> Email :
              </h2>
              <br />
                <span className="md:text-base text-sm text-[#757575]">
                  {contact_information?.email}{" "}
                </span>
                <br />
              <h2 className="inline-flex items-center text-[#474747] md:text-xl text-base gap-1">
                <SlLocationPin /> Address :
              </h2>{" "}
              <br />
              <span className="md:text-base text-sm text-[#757575]">
                {contact_information?.address}
              </span>
            </div>
          </div>

          <button
            onClick={handleToAppliedJob}
            className="w-full py-2  border-[1px] text-base font-medium bg-gradient-to-l from-[#7e90fe] to-[#9873ff] rounded-md text-white hover:opacity-95"
          >
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
}

export default DetailsPage

import React from "react";
import Logo from '../../src/assets/google.png'
import { Link } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
import { BsCurrencyDollar } from 'react-icons/bs';
import {MdDelete} from 'react-icons/md'
import PropTypes from 'prop-types';;

function JobCard({ job , HandleToDelete}) {
    const { id, job_title, company_name, location, job_type, remote, salary, } = job[0] || {};

    return (
        <>
            <div className="w-full border-[1px] rounded-md py-3 px-4 ">
                <button onClick={()=> HandleToDelete(id) } className="md:float-right rounded-md inline-flex text-base gap-1 items-center "><MdDelete className="w-5 h-5"/></button>
                <div className="space-y-4 flex md:flex-row flex-col md:items-center ">
                    <div className="lg:w-[20%] md:w-[25%] w-full">

                        <img src={Logo} alt=".." className="mx-auto"/>
                    </div>
                    <div className="lg:w-[30%] md:w-[45%] w-full space-y-3">
                        <div>
                            <h1 className="text-[#474747] text-xl font-semibold">
                                {job_title || 'programmer'}
                            </h1>
                            <p className="text-[#757575] text-base font-medium">{company_name || "ABC company Ltd"}</p>
                        </div>

                        <div className="flex gap-4 items-center">
                            <h1
                                className="px-3 py-2 border-[2px] rounded-md text-base font-extrabold bg-gradient-to-r from-[#7e90fe] to-[#9873ff]"
                                style={{
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                {remote || 'Remote'}
                            </h1>
                            <h2
                                className="px-3 py-2 border-[2px] rounded-md text-base font-extrabold bg-gradient-to-r from-[#7e90fe] to-[#9873ff] "
                                style={{
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                {job_type || 'full time'}
                            </h2>
                        </div>

                        <div className="flex gap-3 flex-col">
                            <h1 className="inline-flex items-center text-[#757575] text-base font-medium">
                                {" "}
                                <FaLocationDot /> {location || 'Dhaka,Bangladesh'}{" "}
                            </h1>
                    
                            <h2 className="inline-flex items-center text-[#757575] text-medium">
                                <BsCurrencyDollar /> Salary : {salary || '6000k per day'}{" "}
                            </h2>
                        </div>
                    </div>

                    <div className="pt-5 lg:w-[40%] md:w-[25%] w-full ">
               
                        <Link to={`/Home/${id}`} className="px-4 py-2 border-[1px] text-base font-medium bg-gradient-to-l from-[#7e90fe] to-[#9873ff] rounded-md text-white hover:opacity-95">
                            View Details
                        </Link>

                    
                        
                    </div>
            
                </div>
            </div>
        </>
    );
}

JobCard.propTypes = {
    job: PropTypes.array.isRequired,
    HandleToDelete : PropTypes.func
}

export default JobCard;

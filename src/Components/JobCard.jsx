import React from "react";
import companyLogo from '../../src/assets/google.png'
import { Link } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
import { BsCurrencyDollar } from 'react-icons/bs';
import PropTypes from 'prop-types';

function JobCard({ job }) {
    const { id, job_title, company_name, location, job_type, remote, salary } = job || {};
    return (
        <>
            <div className="w-full border-[1px] rounded-md">
                <div className="px-5 py-6 space-y-4">
                    <img src={companyLogo} alt="" />
                    <div>
                        <h1 className="text-[#474747] text-xl font-semibold">
                            {job_title}
                        </h1>
                        <p className="text-[#757575] text-base font-medium">{company_name}</p>
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
                            {remote}
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

                    <div className="flex md:flex-row flex-col gap-2 md:gap-5">
                        <h1 className="inline-flex items-center text-[#757575] text-base font-medium">
                            {" "}
                            <FaLocationDot /> {location || 'Dhaka,Bangladesh'}{" "}
                        </h1>

                        <h2 className="inline-flex items-center text-[#757575] text-medium">
                            <BsCurrencyDollar /> Salary : {salary}{" "}
                        </h2>
                    </div>

                    <div className="pt-5">
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
    job: PropTypes.object.isRequired
}

export default JobCard;

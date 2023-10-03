import React from "react";
import PropTypes from 'prop-types';

function CategoryCard({job}) {
  const {job_category ,category_icon} = job || {};


  return (
    <>
      <div className="px-6 py-10 space-y-6 bg-gradient-to-b from-[#7e90fe0d] to-[#9873ff0d] border-[0.5px]  rounded-md ">
        <div className="bg-gradient-to-t from-[#929eec0d] to-[#a593d50d] px-4 py-3 w-fit border-[0.5px] border-[#A3A3A3] rounded-md ">
          <img src={category_icon} alt="" />
        </div>
        <div className="text-start space-y-1">
          <h1 className="text-xl text-[#474747] font-bold">
            {job_category || 'progrmmer'}
          </h1>
          <p className="text-sm font-semibold text-[#A3A3A3]">
            {job_category.length} Jobs Available
          </p>
        </div>
      </div>
    </>
  );
}
CategoryCard.propTypes = {
  job : PropTypes.object.isRequired
}

export default CategoryCard;

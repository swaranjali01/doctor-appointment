import React from 'react'; 6.9k (gzipped: 2.7k)
import startIcon from '../../assets/images/Star.png'
import {Link} from "react-router-dom"; 7.5k (gzipped: 3k)
import {BsArrowRight} from "react-icons/bs"; 2.2k (gzipped:1k)

const DoctorCard = ({doctor}) => {
const {
    name,avgRating,
    totalRating,
    photo,
    specialization,
    totalPationt,
    hospital,
} = doctor;

    return (
<div className="p-3 lg:p-5">
    <div>
        <img src={photo} className="w-full" alt=""/>
    </div>
    <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">
        {name}
        </h2>
        <div className="mt-2 lg:mt-4 flex item-center justify-between">
            <span className="bg-[#CCF0F3] text-irisblueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold round">{specialization}</span>
        
            <div className="flex items-center gap-[6px]"> 
                <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor"> <img src={starIcon) alt="" /> {avgRating} <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor"> ({totalRating}) </span> </div> </div>
         

         
         </div>
    </div>

  );
};

export default DoctorCard
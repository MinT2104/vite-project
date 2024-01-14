import React, { useState, useEffect } from "react";
import { useStudentStore } from "../../stores/StudentStore";
import moment from "moment";

type DisplayInforTextType = {
  title: string;
  value: string;
};

const DisplayInforText = ({ title, value }: DisplayInforTextType) => {
  return (
    <span className="font-light text-slate-700">
      {title}:
      <span className="font-semibold text-slate-700"> {" " + value}</span>
    </span>
  );
};

const DashBoard = () => {
  const { studentData } = useStudentStore();

  return (
    <section className="w-full h-full items-center justify-center relative gap-4 flex flex-col">
      <div className="bg-white rounded-[7px] uppercase px-10 py-3 font-bold z-40 w-full border-b-[2px] h-fit border-slate-300">
        Attendance checking
      </div>

      <div className=" relative bg-white flex text-black  rounded-[7px] w-full h-[350px] shadow-lg">
        <div className="h-full  w-full p-10 flex items-center">
          <div className="w-1/4 h-full  flex justify-center gap-4 flex-col items-center">
            <div className="w-40 h-40 rounded-full bg-cyan-400 truncate">
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt=""
              />
            </div>
            <button className="w-1/2 bg-sky-500 rounded-[7px] text-white font-normal text-sm px-4 py-2">
              View details
            </button>
          </div>
          <div className="w-3/4 h-full flex">
            <div className="mr-10 h-full flex flex-col gap-6 pt-5 px-10">
              <DisplayInforText title="Card ID" value={studentData.card} />
              <DisplayInforText title="FullName" value={studentData.name} />
              <DisplayInforText
                title="Gender"
                value={studentData.gender === 0 ? "Male" : "Female"}
              />
              <DisplayInforText title="Class" value={studentData.classID} />
              <DisplayInforText
                title="Phone Number"
                value={studentData.phoneNumber}
              />
            </div>
            <div className=" h-full flex flex-col gap-6 pt-5">
              <DisplayInforText title="Email:" value={studentData.email} />
              <DisplayInforText title="Address" value={studentData.address} />
              <DisplayInforText
                title="Last Updated"
                value={moment(studentData.lastModified).format("DD/MM/YYYY")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-white flex flex-col  text-black  rounded-[7px] w-full h-[400px] shadow-lg mb-4">
        <div className="uppercase px-10 py-3 font-bold  w-full border-b-[2px] h-fit border-slate-300">
          Student Information
        </div>
        <div className="h-full  w-full p-10 flex ">
          <div className="w-1/4 h-full bg-red-300 flex justify-center">
            <div className="w-60 h-60 rounded-full bg-cyan-400"></div>
          </div>
          <div className="w-3/4 h-full bg-blue-300"></div>
        </div>
      </div>
    </section>
  );
};
export default DashBoard;

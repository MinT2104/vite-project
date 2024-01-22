import React from "react";
import { useStudentStore } from "../../stores/StudentStore";
import moment from "moment";
import { usePopupStore } from "../../stores/PopupStore";

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

const CardPopupAttendance = () => {
  const { studentData } = useStudentStore();
  const { setIsPopupAttendance } = usePopupStore();

  return (
    <section className="animate-opacity absolute w-full h-full z-50 flex items-center justify-center">
      <div
        onClick={() => {
          setIsPopupAttendance(false);
        }}
        className="w-full h-full bg-slate-500 opacity-50 absolute z-10"
      />
      <div className=" relative z-50 bg-white flex text-black  rounded-[7px] w-2/3 h-[350px] shadow-lg">
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
          <div className="select-none w-3/4 h-full flex">
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
              <DisplayInforText title="Email" value={studentData.email} />
              <DisplayInforText title="Address" value={studentData.address} />
              <DisplayInforText title="Major" value={studentData.major} />
              <DisplayInforText
                title="Last Updated"
                value={moment(studentData.lastModified).format("DD/MM/YYYY")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardPopupAttendance;

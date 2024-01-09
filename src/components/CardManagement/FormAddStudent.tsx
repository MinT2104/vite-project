import React, { useRef, useState } from "react";
import { usePopupStore } from "../../stores/PopupStore";
import { CiUser } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { LuPhone } from "react-icons/lu";
import { HiOutlineMapPin } from "react-icons/hi2";
import { TbOctagonPlus } from "react-icons/tb";
import Input from "../Input/Input";
import { useStudentStore } from "../../stores/StudentStore";
import { useClickOutside } from "../../hooks/useClickOutSide";

const FormAddStudent = () => {
  const classRef = useRef<any>(null);
  const genderRef = useRef<any>(null);
  const [isChooseClass, setIsChooseClass] = useState(false);
  const [isChooseGender, setIsChooseGender] = useState(false);
  const { setIsPopupAddStudent } = usePopupStore();
  const {
    name,
    phone,
    email,
    address,
    setAddress,
    setEmail,
    setPhone,
    setName,
  } = useStudentStore();

  const dataStringInput = [
    {
      id: 1,

      value: name,
      icon: CiUser,
      ChangeFunc: setName,
      title: "Student Name",
    },
    {
      id: 2,
      value: email,
      icon: TfiEmail,
      ChangeFunc: setEmail,
      title: "Email",
    },
    {
      id: 3,
      value: phone,
      icon: LuPhone,
      ChangeFunc: setPhone,
      title: "Phone Number",
    },
    {
      id: 4,
      value: address,
      icon: HiOutlineMapPin,
      ChangeFunc: setAddress,
      title: "Address",
    },
  ];
  useClickOutside(classRef, setIsChooseClass);
  useClickOutside(genderRef, setIsChooseGender);
  return (
    <section className="absolute w-full z-50 border h-full bg-transparent flex items-center justify-center">
      <div
        onClick={() => setIsPopupAddStudent(false)}
        className="w-full h-full bg-slate-500 opacity-50 absolute z-10"
      />
      <form className="h-[80%] z-50 bg-white w-[500px] rounded-xl flex items-center justify-center">
        <div className=" h-4/5 w-2/3 flex flex-col gap-4">
          <div className="flex gap-4 items-center ">
            <TbOctagonPlus className="text-blue-500 w-8 h-8" />
            <h1 className="font-bold text-xl font-sans">Add Student</h1>
          </div>
          <input
            type="text"
            disabled
            className="w-full bg-slate-300 text-sm px-3 py-2.5 h-10 border-slate-200 border rounded-[7px] text-slate-700 font-sans font-normal outline outline-0 bg-transparent"
            defaultValue={""}
            placeholder="Please, swipe your card to get your ID"
          />
          {dataStringInput.map((data) => (
            <Input
              key={data.id}
              icon={<data.icon />}
              value={data.value}
              ChangeValue={data.ChangeFunc}
              title={data.title}
            />
          ))}
          <div ref={classRef} className="relative ">
            <div
              id="choose_project"
              onClick={() => setIsChooseClass(!isChooseClass)}
              className={`w-full cursor-pointer text-sm px-3 py-2.5 h-10 border-slate-200 border rounded-[7px] text-slate-700 font-sans font-normal outline outline-0 bg-transparent`}
            >
              <span id="choose_project" className="font-normal ">
                21119A
              </span>
            </div>
            {isChooseClass && (
              <div className="dark:text-black absolute top-12 border border-slate-200 left-0 w-full h-fit bg-white rounded p-2 text-black shadow-main animate-opacity z-50">
                {["21119A", "21119B"]?.map((data, index) => (
                  <div
                    key={index}
                    className="cursor-pointer hover:bg-gray-200 rounded duration-300 p-1 px-2 font-normal"
                  >
                    {data}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div ref={genderRef} className="relative ">
            <div
              id="choose_project"
              onClick={() => setIsChooseGender(!isChooseGender)}
              className={`w-full cursor-pointer text-sm px-3 py-2.5 h-10 border-slate-200 border rounded-[7px] text-slate-700 font-sans font-normal outline outline-0 bg-transparent`}
            >
              <span id="choose_project" className="font-normal ">
                Female
              </span>
            </div>
            {isChooseGender && (
              <div className="dark:text-black absolute top-12 border border-slate-200 left-0 w-full h-fit bg-white rounded p-2 text-black shadow-main animate-opacity z-50">
                {["Male", "Female"]?.map((data, index) => (
                  <div
                    key={index}
                    className="cursor-pointer hover:bg-gray-200 rounded duration-300 p-1 px-2 font-normal"
                  >
                    {data}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex gap-4 justify-end w-full mt-6">
            <button
              onClick={() => setIsPopupAddStudent(false)}
              type="button"
              className="py-3 px-7 rounded-[7px] text-sm border border-slate-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-6 bg-sky-500 text-white rounded-[7px] text-sm border border-slate-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default FormAddStudent;

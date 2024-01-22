import React, { useEffect, useState } from "react";
import { usePopupStore } from "../../stores/PopupStore";
import { useSwipeCardStore } from "../../stores/SwipeCard";
import { ApiClient } from "../../services/api/ApiClient";
import moment from "moment";

type getAttendanceDataType = {
  uid: string;
  name: string;
  card: string;
  classID: string;
  status: boolean;
  timeAttendance: Date;
};

interface listFromDB extends getAttendanceDataType {
  __v: number;
  _id: string;
}

const TableAttendance = () => {
  const {
    setIsPopupAddStudent,
    isReFetchingStudentTable,
    isReFetchingAttendanceTable,
  } = usePopupStore();
  const { setSwipeCardState } = useSwipeCardStore();

  const [listAttendance, setListAttendance] = useState<listFromDB[]>();

  const getAttendance = async () => {
    try {
      const res = await ApiClient.get("/attendances");
      setListAttendance(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAttendance();
  }, [isReFetchingAttendanceTable]);

  return (
    <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
      <div className="p-6 px-10 overflow-auto scrollbar">
        <table className="w-full mt-4 text-left table-auto">
          <thead>
            <tr>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50/50">
                <p className="block font-sans text-sm antialiased font-bold leading-none text-black opacity-70">
                  Card ID
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50/50">
                <p className="block font-sans text-sm antialiased font-bold leading-none text-black opacity-70">
                  Student
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50/50">
                <p className="block font-sans text-sm antialiased font-bold leading-none text-black opacity-70">
                  Class
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50/50">
                <p className="block font-sans text-sm antialiased font-bold leading-none text-black opacity-70">
                  Status
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50/50">
                <p className=" text-center block font-sans text-sm antialiased font-bold leading-none text-black opacity-70">
                  Attendance Time
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50/50">
                <p className="block font-sans text-sm antialiased font-bold leading-none text-black opacity-70">
                  Attendance Day
                </p>
              </th>

              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50/50">
                <p className="block font-sans text-sm antialiased font-bold leading-none text-black opacity-70"></p>
              </th>
            </tr>
          </thead>
          <tbody>
            {listAttendance &&
              listAttendance.map((data, index) => (
                <Rowtable
                  key={index}
                  card={data.card}
                  name={data.name}
                  timeAttendance={data.timeAttendance}
                  classID={data.classID}
                  status={data.status}
                />
              ))}
          </tbody>
        </table>
      </div>
      {/* <div className="flex items-center justify-between p-4 border-blue-gray-50">
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
          Page 1 of 1
        </p>
        <div className="flex gap-2">
          <button
            disabled
            className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Previous
          </button>
          <button
            disabled
            className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Next
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default TableAttendance;

type RowtableType = {
  name: string;
  card: string;
  classID: string;
  status: boolean;
  timeAttendance: Date;
};

const Rowtable = ({
  card,
  name,
  classID,
  status,
  timeAttendance,
}: RowtableType) => {
  return (
    <tr>
      <td className="p-4 border-b border-blue-gray-50">{card || "_ _"}</td>
      <td className="p-4 border-b border-blue-gray-50">
        <div className="flex flex-col">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {name || "_ _"}
          </p>
        </div>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <div className="flex flex-col">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {classID || "_ _"}
          </p>
        </div>
      </td>
      <td className="px-4 border-b border-blue-gray-50">
        {status === true ? (
          <span className="block text-center px-2 py-1 bg-green-500 rounded-[7px] font-semibold text-white">
            success
          </span>
        ) : (
          <span className="block text-center px-2 w-full py-1 bg-orange-500 rounded-[7px] font-semibold text-white">
            fail
          </span>
        )}
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <p className="block text-center font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
          {moment(timeAttendance).format("hh:mm a") || ""}
        </p>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
          {moment(timeAttendance).format("DD/MM/YYYY") || ""}
        </p>
      </td>

      <td className="p-4 border-b border-blue-gray-50">
        <button
          className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
            </svg>
          </span>
        </button>
      </td>
    </tr>
  );
};

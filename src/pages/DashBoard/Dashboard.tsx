import TableAttendance from "../../components/DashBoard/TableAttendance";

const DashBoard = () => {
  return (
    <section className="w-full h-full items-center justify-start relative gap-4 flex flex-col">
      <div className="bg-white rounded-[7px] uppercase px-10 py-3 font-bold z-40 w-full border-b-[2px] h-fit border-slate-300">
        Attendance checking
      </div>
      <TableAttendance />
    </section>
  );
};
export default DashBoard;

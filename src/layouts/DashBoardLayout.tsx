import { Navigation } from "../components/Navigation/Navigation";
import PopupComponents from "../components/PopupComponents/PopupComponents";

export const DashBoardLayout = ({ children }: { children: any }) => {
  return (
    <div className="h-screen bg-slate-300 flex pl-[300px] overflow-auto scrollbar">
      <PopupComponents />
      <Navigation />
      <div className="flex flex-col w-full p-4 relative">
        <div className="fadeBottom bg-red-500 w-full h-[250px] fixed z-40 bottom-0 left-0" />
        {/* <div className="h-16 w-full bg-white "></div> */}
        {children}
      </div>
    </div>
  );
};

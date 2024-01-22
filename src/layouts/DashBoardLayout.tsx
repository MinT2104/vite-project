import { Navigation } from "../components/Navigation/Navigation";
import PopupComponents from "../components/PopupComponents/PopupComponents";

export const DashBoardLayout = ({ children }: { children: any }) => {
  return (
    <div className="h-screen bg-slate-200 flex">
      <PopupComponents />
      <Navigation />
      <div className="flex flex-col w-full p-4">
        {/* <div className="h-16 w-full bg-white "></div> */}
        {children}
      </div>
    </div>
  );
};

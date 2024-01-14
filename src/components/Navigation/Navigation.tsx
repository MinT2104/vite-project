import { Link } from "react-router-dom";
import { CiGrid41 } from "react-icons/ci";
import { IoCardOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiCreditCard2 } from "react-icons/ci";
import { socket } from "../../services/socket/socket";

export const Navigation = () => {
  const NavList: any = [
    {
      id: 1,
      name: "Attendance",
      icon: CiGrid41,
      link: "/",
      action: () => {
        socket.emit("cardState", "attendance");
      },
    },
    {
      id: 2,
      name: "Card Management",
      icon: IoCardOutline,
      link: "/card-management",
      action: () => {
        socket.emit("cardState", "cardManagement");
      },
    },
    {
      id: 3,
      name: "Notifications",
      icon: IoIosNotificationsOutline,
      link: "/notifications-management",
      action: () => {
        socket.emit("cardState", "notifications");
      },
    },
  ];
  const path = window.location.pathname;

  return (
    <div className="w-[300px] bg-white flex flex-col gap-6 fixed top-0 left-0 z-50 h-full">
      <div className="py-10 h-16 flex gap-4 items-center">
        <div className="pl-16">
          <div className="h-10 w-10 border border-slate-300 flex items-center justify-center rounded-full ">
            <CiCreditCard2 className="w-6 h-6 -rotate-12 text-sky-500" />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-lg">Card</span>
          <span className="font-light text-sm text-slate-400 -mt-1">
            Management
          </span>
        </div>
      </div>
      <div className="flex flex-col items-left gap-4">
        {NavList.map((item: any) => {
          return (
            <Link to={item.link} key={item.id} className="relative">
              <div
                onClick={item.action}
                className={`hover:text-sky-500 cursor-pointer hover:text-sky-500  duration-300 flex items-center h-[50px] pl-6 ${
                  path === item.link ? "text-sky-500" : "text-slate-500"
                }`}
              >
                <item.icon className="w-[20px] h-[20px] mr-[10px]" />
                <span className="font-semibold text-sm">{item.name}</span>
              </div>
              {path === item.link && (
                <div className="absolute top-0 left-0 w-3 h-full bg-sky-500 rounded-full -translate-x-[50%]" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

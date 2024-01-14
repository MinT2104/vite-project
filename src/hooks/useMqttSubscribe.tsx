import { useEffect } from "react";
import { socket } from "../services/socket/socket";
import { studentType } from "../stores/StudentStore";

const path = window.location.pathname;

export const useGetCardIDFromServer = (
  swipeCardState: any,
  setCardID: (data: string) => void,
  setStudentData: (data: studentType) => void
) => {
  useEffect(() => {
    socket.on("cardID", function (countFromServer: any) {
      var enc = new TextDecoder("utf-8");
      var arr = new Uint8Array(countFromServer);
      if (swipeCardState) {
        setCardID(enc.decode(arr).toUpperCase());
      } else {
        setCardID("");
      }
    });
  }, [swipeCardState]);

  useEffect(() => {
    socket.on("attendanceData", function (res: any) {
      if (res.data !== null) {
        setStudentData(res.data);
      } else {
        console.log("nodata");
      }
    });
    return;
  }, []);
  return;
};

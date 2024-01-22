import React from "react";
import FormAddStudent from "../CardManagement/FormAddStudent";
import { usePopupStore } from "../../stores/PopupStore";
import CardPopupAttendance from "./CardPopupAttendance";

const PopupComponents = () => {
  const { isPopupAddStudent, isPopupAttendance } = usePopupStore();
  return (
    <>
      {isPopupAddStudent ? <FormAddStudent /> : null}
      {isPopupAttendance ? <CardPopupAttendance /> : null}
    </>
  );
};

export default PopupComponents;

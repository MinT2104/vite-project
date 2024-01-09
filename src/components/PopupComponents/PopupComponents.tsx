import React from "react";
import FormAddStudent from "../CardManagement/FormAddStudent";
import { usePopupStore } from "../../stores/PopupStore";

const PopupComponents = () => {
  const { isPopupAddStudent } = usePopupStore();
  return <>{isPopupAddStudent ? <FormAddStudent /> : null}</>;
};

export default PopupComponents;

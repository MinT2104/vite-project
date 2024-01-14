import { create } from "zustand";

type usePopupStoreType = {
  isReFetchingStudentTable: boolean;
  setIsReFetchingStudentTable: (data: boolean) => void;
  isPopupAddStudent: boolean;
  setIsPopupAddStudent: (data: boolean) => void;
};

export const usePopupStore = create<usePopupStoreType>((set) => ({
  isPopupAddStudent: false,
  setIsPopupAddStudent: (data) => {
    set({ isPopupAddStudent: data });
  },
  isReFetchingStudentTable: false,
  setIsReFetchingStudentTable: (data) => {
    set({ isReFetchingStudentTable: data });
  },
}));

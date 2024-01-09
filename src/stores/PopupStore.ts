import { create } from "zustand";

type usePopupStoreType = {
  isPopupAddStudent: boolean;
  setIsPopupAddStudent: (data: boolean) => void;
};

export const usePopupStore = create<usePopupStoreType>((set) => ({
  isPopupAddStudent: false,
  setIsPopupAddStudent: (data) => {
    set({ isPopupAddStudent: data });
  },
}));

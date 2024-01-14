import { create } from "zustand";

type useSwipeCardStoreType = {
  swipeCardState: boolean;
  cardID: string;
  setCardID: (data: string) => void;
  setSwipeCardState: (data: boolean) => void;
};

export const useSwipeCardStore = create<useSwipeCardStoreType>((set) => ({
  swipeCardState: false,
  cardID: "",
  setSwipeCardState: (data) => {
    set({ swipeCardState: data });
  },
  setCardID: (data) => {
    set({ cardID: data });
  },
}));

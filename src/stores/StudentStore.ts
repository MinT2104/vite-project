import { create } from "zustand";

type useStudentStoreType = {
  name: string;
  email: string;
  phone: string;
  address: string;
  setName: (data: string) => void;
  setEmail: (data: string) => void;
  setPhone: (data: string) => void;
  setAddress: (data: string) => void;
};

export const useStudentStore = create<useStudentStoreType>((set) => ({
  name: "",
  email: "",
  phone: "",
  address: "",
  setName: (data) => {
    set({ name: data });
  },
  setEmail: (data) => {
    set({ email: data });
  },
  setPhone: (data) => {
    set({ phone: data });
  },
  setAddress: (data) => {
    set({ address: data });
  },
}));

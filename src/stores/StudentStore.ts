import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { useSwipeCardStore } from "../stores/SwipeCard";

type getStudentDataType = {
  uid: string;
  name: string;
  card: string;
  gender: number;
  email: string;
  phoneNumber: string;
  classID: string;
  address: string;
  major: string;
  lastModified: string;
  createdAt: string;
};

export interface studentType extends getStudentDataType {
  _id: string;
  __v: number;
}

type useStudentStoreType = {
  name: string;
  email: string;
  phone: string;
  address: string;
  classID: string;
  gender: number;
  major: string;
  studentData: studentType;
  setName: (data: string) => void;
  setEmail: (data: string) => void;
  setPhone: (data: string) => void;
  setAddress: (data: string) => void;
  setClassID: (data: string) => void;
  setGender: (data: number) => void;
  setMajor: (data: string) => void;
  getStudentData: () => getStudentDataType;
  setStudentData: (data: studentType) => void;
};

export const useStudentStore = create<useStudentStoreType>((set, get) => ({
  name: "",
  email: "",
  phone: "",
  address: "",
  classID: "21119A",
  gender: 0,
  major: "",
  studentData: {
    _id: "",
    __v: 0,
    uid: "",
    name: "",
    card: "",
    gender: 0,
    email: "",
    phoneNumber: "",
    classID: "",
    address: "",
    lastModified: "",
    createdAt: "",
    major: "",
  },
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
  setClassID: (data) => {
    set({ classID: data });
  },
  setGender: (data) => {
    set({ gender: data });
  },
  setMajor: (data) => {
    set({ major: data });
  },
  getStudentData: () => {
    const state = get();
    return {
      uid: uuidv4(),
      name: state.name,
      card: "",
      major: state.major,
      gender: state.gender,
      email: state.email,
      phoneNumber: state.phone,
      classID: state.classID,
      address: state.address,
      lastModified: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    };
  },
  setStudentData: (data) => {
    set({ studentData: data });
  },
}));

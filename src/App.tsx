import { useCallback, useEffect, useLayoutEffect, useState } from "react";

import "./index.css";
import { DashBoardLayout } from "./layouts/DashBoardLayout";
import { Routes, Route } from "react-router-dom";
import { CardManagement } from "./pages/CardManagement/CardManagement";
import { Information } from "./pages/Information/Information";
import DashBoard from "./pages/DashBoard/DashBoard";
import Login from "./pages/Login/Login";

import { useSwipeCardStore } from "./stores/SwipeCard";
import { useGetCardIDFromServer } from "./hooks/useMqttSubscribe";
import { socket } from "./services/socket/socket";
import { useStudentStore } from "./stores/StudentStore";

const App = () => {
  const path = window.location.pathname;
  const { swipeCardState, setCardID } = useSwipeCardStore();
  const { setStudentData, studentData } = useStudentStore();
  useGetCardIDFromServer(swipeCardState, setCardID, setStudentData);
  console.log(studentData);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <DashBoardLayout>
            <DashBoard />
          </DashBoardLayout>
        }
      />
      <Route
        path="/card-management"
        element={
          <DashBoardLayout>
            <CardManagement />
          </DashBoardLayout>
        }
      />
      <Route
        path="/notifications-management"
        element={
          <DashBoardLayout>
            <Information />
          </DashBoardLayout>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;

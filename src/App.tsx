import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import { DashBoardLayout } from "./layouts/DashBoardLayout";
import { Routes, Route } from "react-router-dom";
import { CardManagement } from "./pages/CardManagement/CardManagement";
import { Information } from "./pages/Information/Information";
import DashBoard from "./pages/DashBoard/DashBoard";
import Login from "./pages/Login/Login";

const App = () => {
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

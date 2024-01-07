import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { DashBoardLayout } from './layouts/DashBoardLayout'
import { Routes, Route } from 'react-router-dom'
import { DashBoard } from './pages/DashBoard/Dashboard'
import { CardManagement } from './pages/CardManagement/CardManagement'
import { Information } from './pages/Information/Information'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoardLayout ><DashBoard/></DashBoardLayout>} />
      <Route path="/card-management" element={<DashBoardLayout ><CardManagement/></DashBoardLayout>} />
      <Route path="/notifications-management" element={<DashBoardLayout ><Information/></DashBoardLayout>} />
    </Routes>
  )
}

export default App

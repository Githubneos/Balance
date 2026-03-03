import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar.jsx"
import Landing from "./pages/Landing.jsx"
import Login from "./pages/Login.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Budget from "./pages/Budget.jsx"
import Forecast from "./pages/Forecast.jsx"
import Planner from "./pages/Planner.jsx"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/planner" element={<Planner />} />
      </Routes>
    </>
  )
}

export default App
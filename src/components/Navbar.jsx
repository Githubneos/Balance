import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Navbar() {

  return (
    <motion.div
      className="navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="logo">Balance AI</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/budget">Budget</Link>
        <Link to="/forecast">Forecast</Link>
        <Link to="/planner">Planner</Link>
        <Link to="/login">Login</Link>
      </div>
    </motion.div>
  )
}
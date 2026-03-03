import { motion } from "framer-motion"

export default function Forecast() {
  return (
    <motion.div
      className="page"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <h1>AI Forecast</h1>
      <div className="glass">
        <button className="primary-btn">Generate Forecast</button>
      </div>
    </motion.div>
  )
}
import { motion } from "framer-motion"

export default function Planner() {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>Financial Planner</h1>
      <div className="glass">
        <input placeholder="Savings Goal Amount" />
        <button className="primary-btn">Create Plan</button>
      </div>
    </motion.div>
  )
}
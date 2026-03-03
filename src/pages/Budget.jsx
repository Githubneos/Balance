import { motion } from "framer-motion"

export default function Budget() {
  return (
    <motion.div
      className="page"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <h1>Budget Planner</h1>
      <div className="glass">
        <input placeholder="Monthly Budget Limit" />
        <button className="primary-btn">Save Budget</button>
      </div>
    </motion.div>
  )
}
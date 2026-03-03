import { motion } from "framer-motion"

export default function Landing() {
  return (
    <motion.div
      className="page center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>AI Personal Finance Forecaster</h1>
      <p>Smart budgeting. Intelligent forecasting. Clean financial clarity.</p>
      <button className="primary-btn">Get Started</button>
    </motion.div>
  )
}
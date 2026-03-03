import { motion } from "framer-motion"

export default function Dashboard() {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>Dashboard</h1>
      <div className="glass">
        Overview widgets will appear here.
      </div>
    </motion.div>
  )
}
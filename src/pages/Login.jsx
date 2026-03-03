import { motion } from "framer-motion"

export default function Login() {
  return (
    <motion.div
      className="page center"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <div className="glass">
        <h2>Login</h2>
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="primary-btn">Sign In</button>
      </div>
    </motion.div>
  )
}
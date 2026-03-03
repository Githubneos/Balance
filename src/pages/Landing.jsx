import { motion } from "framer-motion"

export default function Landing() {

  return (
    <div>

      {/* HERO */}

      <motion.section
        className="hero"
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ duration:1 }}
      >
        <h1>Balance AI</h1>

        <p>
        A smarter way to plan your finances.
        Forecast spending, optimize budgets, and reach your goals with AI.
        </p>

        <button className="primary-btn">
          Start Planning
        </button>

      </motion.section>


      {/* FEATURES */}

      <section className="features">

        <motion.div
          className="glass-card feature"
          whileHover={{ scale:1.05 }}
        >
          <h3>Smart Budget</h3>
          <p>Track monthly spending and stay within your goals.</p>
        </motion.div>

        <motion.div
          className="glass-card feature"
          whileHover={{ scale:1.05 }}
        >
          <h3>AI Forecast</h3>
          <p>Predict your future finances with intelligent modeling.</p>
        </motion.div>

        <motion.div
          className="glass-card feature"
          whileHover={{ scale:1.05 }}
        >
          <h3>Goal Planner</h3>
          <p>Build step-by-step plans to reach savings milestones.</p>
        </motion.div>

      </section>

    </div>
  )
}
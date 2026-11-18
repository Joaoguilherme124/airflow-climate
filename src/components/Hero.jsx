import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'

const fade = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <img
        className="hero-image"
        src="./images/hero.jpg"
        alt="A calm, light-filled London interior with refined architectural detailing"
      />
      <div className="hero-overlay" />

      <div className="container hero-content">
        <motion.p className="eyebrow eyebrow-light" variants={fade} initial="hidden" animate="show" custom={0.1}>
          Heating · Cooling · Ventilation · London
        </motion.p>
        <motion.h1 variants={fade} initial="hidden" animate="show" custom={0.2}>
          Comfort You Can Count On.
        </motion.h1>
        <motion.p className="hero-copy" variants={fade} initial="hidden" animate="show" custom={0.32}>
          Heating, cooling and ventilation for London homes and workplaces — discreet systems,
          considered interiors, and a calm, professional client experience from first conversation
          to completed installation.
        </motion.p>
        <motion.div className="hero-actions" variants={fade} initial="hidden" animate="show" custom={0.44}>
          <a className="btn btn-primary" href="#contact">
            Get a Free Quote
          </a>
          <a className="btn btn-ghost" href="#services">
            Explore Our Services
            <ArrowDownRight size={18} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

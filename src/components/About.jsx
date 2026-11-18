import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container about-grid">
        <motion.div
          className="about-media"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="./images/about.jpg"
            alt="Architectural heating and cooling equipment in a contemporary setting"
          />
          <div className="about-caption">
            <p>Heating, cooling and ventilation for London interiors.</p>
          </div>
        </motion.div>

        <motion.div
          className="about-copy"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">About Airflow Climate</p>
          <h2>Climate designed around the way London lives and works.</h2>
          <p>
            Airflow Climate is a London HVAC studio that treats heating, cooling and ventilation
            as part of the architecture — quiet, precise and tailored to the room, not merely the
            plant. The approach is calm and professional: a conversation first, then a clear
            proposal, then work carried out with care for the interior.
          </p>
          <p>
            This website is a portfolio demonstration of how a high-end British climate practice
            might present itself. It does not represent a trading company, and no company history
            or certifications are claimed here.
          </p>
          <ul className="about-points">
            <li>London homes, apartments and workplaces</li>
            <li>Residential and commercial interiors</li>
            <li>Heating, cooling and ventilation as one conversation</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

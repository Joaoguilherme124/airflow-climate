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
            <p>A demonstration brand for London climate design.</p>
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
            Airflow Climate is a fictional HVAC service brand created for this portfolio
            demonstration. It represents a London studio that treats heating, cooling and
            ventilation as part of the architecture — quiet, precise and tailored to the room,
            not merely the plant.
          </p>
          <p>
            The tone of the brand is calm and professional: conversations first, then a clear
            proposal, then work carried out with care for the interior. Nothing here is a real
            company history, certification or trading record. It is a design study of how a
            high-end British HVAC practice might present itself.
          </p>
          <ul className="about-points">
            <li>London-focused demonstration brand</li>
            <li>Residential and commercial interiors</li>
            <li>Heating, cooling and ventilation as one conversation</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

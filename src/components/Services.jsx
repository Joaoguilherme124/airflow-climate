import { motion } from 'framer-motion'
import { Snowflake, Flame, ClipboardCheck, Wind, Wrench, Building2 } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { services } from '../data.js'

const icons = {
  Snowflake,
  Flame,
  ClipboardCheck,
  Wind,
  Wrench,
  Building2,
}

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="What we do"
          title="Services for London interiors"
          intro="From private homes to commercial spaces, each offering is presented as a considered climate solution — not a catalogue of technical jargon."
        />

        <div className="card-grid">
          {services.map((service, index) => {
            const Icon = icons[service.icon]
            return (
              <motion.article
                key={service.id}
                className="service-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="service-card-media">
                  <img src={service.image} alt={service.title} />
                  <span className="service-icon" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                </div>
                <div className="service-card-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

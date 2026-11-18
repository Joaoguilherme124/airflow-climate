import { motion } from 'framer-motion'
import { SlidersHorizontal, ShieldCheck, MessageCircle, Home } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { benefits } from '../data.js'

const icons = {
  SlidersHorizontal,
  ShieldCheck,
  MessageCircle,
  Home,
}

export default function WhyChooseUs() {
  return (
    <section className="section" id="approach">
      <div className="container">
        <SectionHeading
          eyebrow="Why choose us"
          title="A calmer way to plan indoor comfort"
          intro="A considered client experience for homes and workplaces across London — without jargon, and without overstatement."
        />

        <div className="benefit-grid">
          {benefits.map((benefit, index) => {
            const Icon = icons[benefit.icon]
            return (
              <motion.article
                key={benefit.title}
                className="benefit-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="benefit-icon" aria-hidden="true">
                  <Icon size={22} />
                </span>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

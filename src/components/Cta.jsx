import { motion } from 'framer-motion'

export default function Cta() {
  return (
    <section className="cta-band" aria-labelledby="cta-heading">
      <img className="cta-image" src="./images/cta.jpg" alt="" />
      <div className="cta-overlay" />
      <div className="container cta-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Start a conversation</p>
          <h2 id="cta-heading">Ready to Improve Your Indoor Comfort?</h2>
          <p>
            Tell us a little about the space and the service you have in mind. The studio will
            outline a considered next step.
          </p>
        </motion.div>
        <a className="btn btn-light" href="#contact">
          Request a Free Quote
        </a>
      </div>
    </section>
  )
}

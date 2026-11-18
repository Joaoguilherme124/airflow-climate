import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import { projects } from '../data.js'

export default function Projects() {
  return (
    <section id="projects" className="section section-navy">
      <div className="container">
        <SectionHeading
          eyebrow="Selected studies"
          title="Illustrative portfolio examples"
          intro="The following cards are demonstration concepts only. They are not verified customer projects, completed installations or case studies from a real company."
        />

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="project-media">
                <img src={project.image} alt={project.title} />
                <span className="project-tag">Illustrative example</span>
              </div>
              <div className="project-body">
                <p className="project-meta">
                  {project.location} · {project.category}
                </p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

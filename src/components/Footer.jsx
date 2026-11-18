import Logo from './Logo.jsx'
import { navLinks, services } from '../data.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>
            A fictional London HVAC demonstration brand. Heating, cooling and ventilation
            presented with a premium British sensibility.
          </p>
        </div>

        <div>
          <h2>Explore</h2>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Services</h2>
          <ul>
            {services.map((service) => (
              <li key={service.id}>
                <a href="#services">{service.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Contact</h2>
          <ul>
            <li>London, United Kingdom</li>
            <li>
              <a href="mailto:hello@airflowclimate.demo">hello@airflowclimate.demo</a>
            </li>
            <li>+44 (0)20 0000 0000</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Airflow Climate. Fictional demonstration brand.</p>
        <p>Created as a portfolio example. Not a real business.</p>
      </div>
    </footer>
  )
}

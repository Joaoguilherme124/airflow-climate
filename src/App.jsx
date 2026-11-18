import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Projects from './components/Projects.jsx'
import Cta from './components/Cta.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Projects />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

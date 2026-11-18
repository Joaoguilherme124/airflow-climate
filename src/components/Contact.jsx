import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { serviceOptions, studioContact } from '../data.js'

const initial = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.phone.trim()) {
    errors.phone = 'Please enter a telephone number.'
  } else if (!/^[0-9+\s()-]{8,20}$/.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid telephone number.'
  }
  if (!values.service) errors.service = 'Please select a service.'
  if (!values.message.trim()) {
    errors.message = 'Please add a short message.'
  } else if (values.message.trim().length < 12) {
    errors.message = 'Please tell us a little more about the enquiry.'
  }
  return errors
}

export default function Contact() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const onChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Request a free quote</h2>
          <p className="section-intro">
            Share a few details about the property and the system you have in mind. A member of
            the studio can then outline a considered next step.
          </p>
          <dl className="contact-details">
            <div>
              <dt>Studio</dt>
              <dd>{studioContact.location}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${studioContact.email}`}>{studioContact.email}</a>
              </dd>
            </div>
            <div>
              <dt>Telephone</dt>
              <dd>{studioContact.phone}</dd>
            </div>
          </dl>
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              className="form-success"
              role="status"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <CheckCircle2 size={32} aria-hidden="true" />
              <h3>Thank you, {values.name.trim().split(' ')[0]}.</h3>
              <p>
                This is a demonstration form. Your message has not been sent to a real company
                and no enquiry has been lodged.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setValues(initial)
                  setSubmitted(false)
                  setErrors({})
                }}
              >
                Send another demonstration message
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              className="contact-form"
              noValidate
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={onChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name ? (
                  <p id="name-error" className="field-error">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={onChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email ? (
                    <p id="email-error" className="field-error">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={onChange}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone ? (
                    <p id="phone-error" className="field-error">
                      {errors.phone}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="field">
                <label htmlFor="service">Service required</label>
                <select
                  id="service"
                  name="service"
                  value={values.service}
                  onChange={onChange}
                  aria-invalid={Boolean(errors.service)}
                  aria-describedby={errors.service ? 'service-error' : undefined}
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.service ? (
                  <p id="service-error" className="field-error">
                    {errors.service}
                  </p>
                ) : null}
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={values.message}
                  onChange={onChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message ? (
                  <p id="message-error" className="field-error">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <button className="btn btn-primary" type="submit">
                Request a Free Quote
              </button>
              <p className="form-note">
                Demonstration form — your details stay in the browser and are not sent to a company.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

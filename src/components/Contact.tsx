import { Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { CONTACT_FORM_CONFIG } from '../config/contact'
import SectionHeading from './SectionHeading'

interface FormValues {
  name: string
  email: string
  message: string
}

const initialValues: FormValues = { name: '', email: '', message: '' }

const Contact = () => {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<Partial<FormValues>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const nextErrors: Partial<FormValues> = {}
    if (!values.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!values.email.trim()) nextErrors.email = 'Please enter your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = 'Please enter a valid email.'
    if (!values.message.trim()) nextErrors.message = 'Please share a short message.'
    else if (values.message.trim().length < 10) nextErrors.message = 'Message should be at least 10 characters.'
    return nextErrors
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    setSubmitted(false)

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
      setValues(initialValues)
    }
  }

  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Something With Data."
        description="I'm currently looking for an industrial attachment opportunity where I can learn, contribute and grow within a professional technology or data-driven environment."
      />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="glass rounded-2xl p-6">
          <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-sky-600 dark:text-sky-300" />
              <a href="mailto:lovellemusadogera@gmail.com" className="hover:text-sky-600 dark:hover:text-sky-300">
                lovellemusadogera@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-sky-600 dark:text-sky-300" /> 0712123854
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-sky-600 dark:text-sky-300" /> Harare, Zimbabwe
            </li>
          </ul>
          <p className="mt-5 rounded-lg border border-amber-300/40 bg-amber-500/10 p-3 text-xs text-amber-700 dark:text-amber-200">
            Form backend is not configured yet. {CONTACT_FORM_CONFIG.note}
          </p>
        </article>

        <form onSubmit={onSubmit} noValidate className="glass rounded-2xl p-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={values.name}
                onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-sky-500 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-900"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name ? <p id="name-error" className="mt-1 text-xs text-rose-500">{errors.name}</p> : null}
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={values.email}
                onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-sky-500 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-900"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email ? <p id="email-error" className="mt-1 text-xs text-rose-500">{errors.email}</p> : null}
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={values.message}
                onChange={(event) => setValues((prev) => ({ ...prev, message: event.target.value }))}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-sky-500 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-900"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message ? <p id="message-error" className="mt-1 text-xs text-rose-500">{errors.message}</p> : null}
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-500"
          >
            Send Message
          </button>
          {submitted ? (
            <p className="mt-3 text-sm text-emerald-600 dark:text-emerald-300">
              Message validated successfully. Configure a backend service to send it.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}

export default Contact

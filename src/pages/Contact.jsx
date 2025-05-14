import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 2600)           // reseteamos animación
  }

  return (
    <section className="contact wrapper">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .7, ease: [.33, 1, .68, 1] }}
      >
        Parlem?
      </motion.h1>

      <form onSubmit={handleSubmit} className="contact__form">
        <motion.input
          type="text"
          name="name"
          placeholder="Nom"
          className="contact__input"
          whileFocus={{ borderColor: '#18633d' }}
          required
        />
        <motion.input
          type="email"
          name="email"
          placeholder="Email"
          className="contact__input"
          whileFocus={{ borderColor: '#18633d' }}
          required
        />
        <motion.textarea
          rows="4"
          name="message"
          placeholder="Missatge"
          className="contact__input"
          whileFocus={{ borderColor: '#18633d' }}
          required
        />

        <motion.button
          type="submit"
          className="contact__btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: .96 }}
        >
          Enviar
        </motion.button>
      </form>

      {/* micro-feedback “enviat” */}
      <AnimatePresence>
        {sent && (
          <motion.div
            className="contact__toast"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: .6, ease: [.33, 1, .68, 1] }}
          >
            ✉️  Missatge enviat! Gràcies.
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../styles/notfound.css'

export default function NotFound() {
  return (
    <section className="notfound wrapper">
      {/* eriçó trist amb micro-animació */}
      <motion.div
        className="notfound__emoji"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .8, ease: [.33, 1, .68, 1] }}
      >
        🦔
      </motion.div>

      <h1 className="notfound__title">
        404 – Pàgina no trobada
      </h1>

      <p className="notfound__text">
        Sembla que aquest camí no porta enlloc…
      </p>

      <Link to="/" className="notfound__btn">
        Tornar a l’inici
      </Link>
    </section>
  )
}

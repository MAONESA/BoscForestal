import { useLocation, Outlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

/* ---------- variantes de página (fade + slide sutil) ---------- */
const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -40 }
}

export default function PageTransitionLayout() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      {/* la clave UNIQUE debe cambiar con la ruta */}
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
        className="min-h-screen"
      >
        {/* Slot donde React Router pinta la página elegida */}
        <Outlet />
      </motion.div>
    </AnimatePresence>
  )
}

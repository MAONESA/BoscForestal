import { Routes, Route } from 'react-router-dom'
import Nav              from './components/Nav'
import ForestLanding    from './pages/ForestLanding'
import About            from './pages/About'
import Contact          from './pages/Contact'
import NotFound         from './pages/NotFound'
import Footer           from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />

      <Routes>
        {/* layout que envuelve TODAS las páginas */}

          {/* página raíz: usa index en lugar de path='/' */}
          <Route index        element={<ForestLanding />} />
          <Route path="about"   element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*"       element={<NotFound />} />
   
      </Routes>

      <Footer />
    </>
  )
}

import { Link } from 'react-router-dom'
import { Instagram, Twitter, Linkedin, TreePine } from 'lucide-react'
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper footer__inner">
        {/* marca + copyright */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">BOSC/FORESTAL</Link>
          <span className="footer__copy">
            © {new Date().getFullYear()} – Tots el drets reservats
          </span>
        </div>

        {/* redes sociales */}
        <nav className="footer__social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="https://twitter.com"   target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="https://linkedin.com"  target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
        </nav>
      </div>

      {/* botón árbol – scroll top */}
    </footer>
  )
}

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import '../styles/forestLanding.css';
import { localImages } from '../assets';           // imágenes locales

/* ---------- datos ---------- */
const IMAGES   = [...localImages];
const SYNONYMS = ['Bosc', 'Fageda', 'Roureda', 'Pineda'];

/* ---------- sub-componente barra ---------- */
function SynonymsBar() {
  return (
    <div className="synonyms-bar">
      {SYNONYMS.map((word) => (
        <span key={word}>{word}</span>
      ))}
    </div>
  );
}

export default function ForestLanding() {
  const [index, setIndex] = useState(0);
  const total = IMAGES.length;

  /* flechas */
  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  /* auto-avance */
  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [total]);

  return (
    <section id="home" className="landing wrapper">
      {/* barra de sinónimos */}
      <SynonymsBar />

      {/* carrusel */}
      <div className="carousel">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={IMAGES[index]}
            alt="Bosque"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.8 }}
            className="carousel-img"
          />
        </AnimatePresence>

        <button onClick={prev} className="carousel-btn prev" aria-label="Anterior">
          <ArrowLeft size={24} />
        </button>
        <button onClick={next} className="carousel-btn next" aria-label="Siguiente">
          <ArrowRight size={24} />
        </button>
      </div>

      <div className="carousel-indicator">
        {index + 1} / {total}
      </div>
    </section>
  );
}

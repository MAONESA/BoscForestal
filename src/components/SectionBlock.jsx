// src/components/SectionBlock.jsx
import '../styles/sectionblock.css'

export default function SectionBlock({ title, text, img, reverse = false }) {
  return (
    <section className={`section-block ${reverse ? 'reverse' : ''}`}>
      <div className="section-block__img">
        <img src={img} alt={title} />
      </div>

      <div className="section-block__content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  )
}

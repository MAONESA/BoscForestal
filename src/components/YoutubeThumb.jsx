// src/components/YoutubeThumb.jsx
import { useState } from 'react';
import '../styles/youtubeThumb.css';      // crea este CSS (lo verás debajo)

export default function YoutubeThumb({ id, title }) {
  const [play, setPlay] = useState(false);

  const thumb = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;   // 480 × 360 px

  return play ? (
    <iframe
      src={`https://www.youtube.com/embed/${id}?autoplay=1`}
      title={title}
      frameBorder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="yt-frame"
    />
  ) : (
    <button
      className="yt-thumb"
      style={{ backgroundImage: `url(${thumb})` }}
      onClick={() => setPlay(true)}
      aria-label={`Reproduir ${title}`}
    >
      <span className="yt-thumb__icon">▶</span>
    </button>
  );
}

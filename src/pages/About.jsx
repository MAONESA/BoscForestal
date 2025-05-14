import '../styles/about.css';

const team = [
  {
    name: 'Montserrat Solé',
    role: 'Biòloga · Direcció científica',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=faces&fit=crop&w=400&h=400&q=80'
  },
  {
    name: 'Oriol Puig',
    role: 'Fotògraf de fauna',
    img: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?crop=faces&fit=crop&w=400&h=400&q=80'
  },
  {
    name: 'Laia Marín',
    role: 'Guia de camp · Educació',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&fit=crop&w=400&h=400&q=80'
  },
  {
    name: 'Pol Rovira',
    role: 'Videògraf · Drons',
    img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=faces&fit=crop&w=400&h=400&q=80'
  },
  {
    name: 'Marta Serra',
    role: 'Disseny gràfic · Xarxes',
    img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=400&h=400&q=80'
  },
  {
    name: 'Joan Casas',
    role: 'Investigador forestal',
    img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=faces&fit=crop&w=400&h=400&q=80'
  }
];


export default function About() {
  return (
    <section className="about">
      {/* --- equip --- */}
      <div className="wrapper">
        <h2 className="about__title">L'Equip</h2>
        <div className="team">
          {team.map(m => (
            <article key={m.name} className="team__card">
              <img src={m.img} alt={m.name} className="team__photo" />
              <h3 className="team__name">{m.name}</h3>
              <p className="team__role">{m.role}</p>
            </article>
          ))}
        </div>
      </div>

      {/* --- contingut --- */}
      <div className="wrapper">
        <h2 className="about__subtitle">EL NOSTRE CONTINGUT: BOSCOS I FAUNA A CATALUNYA</h2>

        <div className="content-row">
          <iframe
            src="https://www.youtube.com/embed/0sb4yN0wIbc"
            title="Fauna Pirinenca"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="content-row__media"
          ></iframe>
          <div className="content-row__text">
            <h3>Fauna Pirinenca</h3>
            <p>
              Explorem la vida de l'<strong>ós bru</strong>, el <strong>gall fer</strong> i les grans rapinyaires que sobrevolen les nostres valls alpines.
            </p>
            <a href="https://www.youtube.com/channel/UC-example" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
              Veure a YouTube
            </a>
          </div>
        </div>

        <div className="content-row reverse">
          <iframe
            src="https://www.youtube.com/embed/vsN7k2Jql7A"
            title="Bosc Mediterrani"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="content-row__media"
          ></iframe>
          <div className="content-row__text">
            <h3>Bosc Mediterrani</h3>
            <p>
              Des del <strong>Parc Natural del Montseny</strong> fins a les alzines del litoral, documentem la resiliència d'aquests ecosistemes al canvi climàtic.
            </p>
            <a href="https://www.youtube.com/channel/UC-example" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
              Veure la playlist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

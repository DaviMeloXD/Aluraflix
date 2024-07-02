import React from 'react';
import styles from './Banner.module.css';
import player from './player.png';

function Banner() {
  const bannerStyle = {
    backgroundImage: `url(${player})`,
  };

  return (
    <section className={styles.Banner}>
      <div className={styles.backgroundImage} style={bannerStyle}></div>
      <div className={styles.divBanner}>
        <button>FRONT-END</button>
        <h1>SEO com React</h1>
        <p>
          Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar
          uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas
          dicas sobre performance e de quebra conhecer uma plataforma
          sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse
          vídeo feito com todo o carinho do mundo construindo uma "Pokedex"!
        </p>
      </div>
      <img src={player} alt="Video Thumbnail"></img>
    </section>
  );
}

export default Banner;

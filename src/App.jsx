import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import Sidebar from './componentes/menu/Sidebar';
import Albumes from './componentes/menu/Albumes';

import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import beele from './canciones/beele.mp3';
import blessd from './canciones/blessd.mp3';
import kg from './canciones/kg.mp3';
import mora from './canciones/mora.mp3';
import mt from './canciones/mt.mp3';


const trendingSongs = [
  {
    title: "JOKER",
    img: "https://images.genius.com/a9ae618461488ac3b7d7f344479e2e06.1000x1000x1.png",
    audio: blessd
  },
  {
    title: "quédate",
    img: "https://akamai.sscdn.co/uploadfile/letras/albuns/3/0/5/7/3183171747413973.jpg",
    audio: beele
  },
  {
    title: "LATINA FOREVA",
    img: "https://i.scdn.co/image/ab67616d0000b2732bcae9fa5d95c564ddcaea00",
    audio: kg
  },
  {
    title: "DROGA",
    img: "https://i.scdn.co/image/ab67616d0000b2733c4cddfe8890b8a9d4788fa3",
    audio: mora
  },
  {
    title: "MENOS EL CORA",
    img: "https://i.scdn.co/image/ab67616d0000b2730298f1a0a56ad4251e81b323",
    audio: mt
  }
];

const favoriteArtists = [
  {
    name: "Paulo Londra",
    img: "https://i.scdn.co/image/ab676161000051743deda947e22df7dd3c8fe2c2"
  },
  {
    name: "Trueno",
    img: "https://www.soundpark.news/img/2022/05/17/trueno_damon_albarn_gorillaz.jpg?__scale=w:1200,h:1200,t:2"
  },
  {
    name: "Nicki Nicole",
    img: "https://static.wikia.nocookie.net/youtubepedia/images/b/bb/Nicki_nicole.jpg/revision/latest?cb=20220722001729&path-prefix=es"
  },
  {
    name: "Rels B",
    img: "https://i.scdn.co/image/ab67616d0000b273b5f2039fff32ee270655a218"
  }
];

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [mostrarAlbumes, setMostrarAlbumes] = useState(false);
  const audioRef = useRef(null);

  const handlePlay = (song) => {
    setCurrentSong(song);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 100);
  };

  const handlePrev = () => {
    const currentIndex = trendingSongs.findIndex(song => song === currentSong);
    if (currentIndex > 0) handlePlay(trendingSongs[currentIndex - 1]);
  };

  const handleNext = () => {
    const currentIndex = trendingSongs.findIndex(song => song === currentSong);
    if (currentIndex < trendingSongs.length - 1) handlePlay(trendingSongs[currentIndex + 1]);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ]
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <button onClick={() => setMostrarAlbumes(false)}>Inicio</button>
        <button onClick={() => setMostrarAlbumes(true)}>Tu Biblioteca</button>
      </div>

      <main className="main-view">
        {mostrarAlbumes ? (
          <Albumes />
        ) : (
          <>
            <section className="card-section">
              <h3>Canciones en tendencia</h3>
              <Slider {...settings}>
                {trendingSongs.map((song, index) => (
                  <div className="card" key={index} onClick={() => handlePlay(song)}>
                    <img src={song.img} alt={song.title} />
                    <div className="card-title">{song.title}</div>
                  </div>
                ))}
              </Slider>
            </section>

            <section className="artists-section">
              <div className="artists-header">
                <h3>Tus artistas favoritos</h3>
                <span className="show-all">Mostrar todos</span>
              </div>
              <div className="artists-container">
                {favoriteArtists.map((artist, index) => (
                  <div className="artist-card" key={index}>
                    <img src={artist.img} alt={artist.name} />
                    <div className="artist-name">{artist.name}</div>
                    <div className="artist-role">Artista</div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      {currentSong && (
        <div className="player-bar">
          <div className="player-info">
            <img src={currentSong.img} alt={currentSong.title} className="player-cover" />
            <span className="player-title">{currentSong.title}</span>
          </div>
          <div className="player-controls">
            <button onClick={handlePrev}>⏮</button>
            <button onClick={() => audioRef.current?.paused ? audioRef.current.play() : audioRef.current.pause()}>
              {audioRef.current?.paused ? '▶️' : '⏸'}
            </button>
            <button onClick={handleNext}>⏭</button>
          </div>
          <audio ref={audioRef} src={currentSong.audio} autoPlay />
        </div>
      )}
    </div>
  );
}

export default App;

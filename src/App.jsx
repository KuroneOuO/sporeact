import React, { useState, useRef, useEffect } from 'react';
import Slider from "react-slick";
import Sidebar from './componentes/menu/Sidebar';
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

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlay = (song) => {
    setCurrentSong(song);
  };

  useEffect(() => {
    if (audioRef.current && currentSong) {
      audioRef.current.load();
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentSong]);

  const togglePlayback = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
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
    ],
  };

  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-view">
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
      </main>

      {currentSong && (
        <div className="player-bar">
          <div className="player-info">
            <img src={currentSong.img} alt={currentSong.title} className="player-cover" />
            <span className="player-title">{currentSong.title}</span>
          </div>

          <div className="player-controls">
            <button className="play-pause-btn" onClick={togglePlayback}>
              {isPlaying ? '⏸️ Pausar' : '▶️ Reproducir'}
            </button>
          </div>

          {/* audio oculto */}
          <audio ref={audioRef}>
            <source src={currentSong.audio} type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>
        </div>
      )}
    </div>
  );
}

export default App;

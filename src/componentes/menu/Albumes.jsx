import React from "react";

const Albumes = () => {
  return (
    <div className="album-container" style={{ padding: "2rem" }}>
      <h2>Álbum: GOTTI B</h2>
      <img
        src="https://i.scdn.co/image/ab67616d0000b273e5236fe4dca110da2ce6a05e"
        alt="GOTTI B"
        className="album-cover"
        style={{ maxWidth: "300px", borderRadius: "1rem", marginBottom: "1rem" }}
      />
      <ul className="album-tracks">
        <li style={{ marginBottom: "1rem" }}>
          <strong>Track 1:</strong> Señorita
          <br />
          <audio
            controls
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            style={{ width: "100%", marginTop: "10px" }}
          />

          <strong>Track 2:</strong> Sometimes
          <br />
          <audio
            controls
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            style={{ width: "100%", marginTop: "10px" }}
          />


            <strong>Track 3:</strong> Si Te Pinta
          <br />
          <audio
            controls
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            style={{ width: "100%", marginTop: "10px" }}
          />

          <strong>Track 4:</strong> Mi Cuarto
          <br />
          <audio
            controls
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            style={{ width: "100%", marginTop: "10px" }}
          />

          <strong>Track 5:</strong> Antes
          <br />
          <audio
            controls
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            style={{ width: "100%", marginTop: "10px" }}
          />

          <strong>Track 6:</strong> Sudor
          <br />
          <audio
            controls
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            style={{ width: "100%", marginTop: "10px" }}
          />

          <strong>Track 7:</strong> Amantes
          <br />
          <audio
            controls
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            style={{ width: "100%", marginTop: "10px" }}
          />
        </li>
      </ul>
    </div>
  );
};

export default Albumes;

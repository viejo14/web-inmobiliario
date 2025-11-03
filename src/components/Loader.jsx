import React from 'react';
import gifAnimacion from '../assets/img/animacion_BDR.gif';

export default function Loader({ fadeOut = false }) {
  const [fade, setFade] = React.useState(false);

  React.useEffect(() => {
    if (fadeOut) {
      setTimeout(() => setFade(true), 100); // pequeño delay para iniciar fade
    }
  }, [fadeOut]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: '#2d162b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}
    >
      <img
        src={gifAnimacion}
        alt="Cargando..."
        style={{
          width: '400px',
          height: '400px',
          maxWidth: '80vw',
          maxHeight: '80vw',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
          borderRadius: '50%',
          transition: 'opacity 0.8s ease',
          opacity: fade ? 0 : 1
        }}
      />
    </div>
  );
}

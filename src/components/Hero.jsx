import React, { useState } from 'react';
// Import all carousel images
import img1 from '../../public/img/img-carrusel-hero/architecture.jpg';
import img2 from '../../public/img/img-carrusel-hero/business-modern-young-city-woman-skyscraper-1628482-pxhere.com.jpg';
import img3 from '../../public/img/img-carrusel-hero/casa-en-l-madrid-iluminacion-led-porches.jpg';
import img4 from '../../public/img/img-carrusel-hero/Diseno_confianza.jpg';
import img5 from '../../public/img/img-carrusel-hero/open-light-architecture-house-window-building-619151-pxhere.com.jpg';
import img6 from '../../public/img/img-carrusel-hero/pexels-anastasia-shuraeva-7647389.jpg';
import img7 from '../../public/img/img-carrusel-hero/pexels-mart-production-7414950.jpg';
import img8 from '../../public/img/img-carrusel-hero/standing-new-home.jpg';


const images = [img1, img2, img3, img4, img5, img6, img7, img8];

function Hero() {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [total]);

  const prevSlide = () => setCurrent((current - 1 + total) % total);
  const nextSlide = () => setCurrent((current + 1) % total);

  return (
  <section className="relative w-full" style={{height: '100vh'}}>
      <div className="absolute inset-0 w-full h-full" style={{zIndex:0}}>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Casa ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${current === idx ? 'opacity-100' : 'opacity-0'}`}
            style={{zIndex:0}}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/40" style={{zIndex:1}}></div>
      {/* Carousel navigation arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white rounded-full p-2 hover:bg-black/60" aria-label="Anterior">
        &#8592;
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white rounded-full p-2 hover:bg-black/60" aria-label="Siguiente">
        &#8594;
      </button>
      <div className="relative z-10 w-full flex items-center justify-center p-5">
        <div className="max-w-md mx-auto md:mr-auto md:ml-8 px-4 py-8 md:py-20 text-center md:text-left bg-white/10 backdrop-blur-md rounded-xl border border-white/30" style={{marginTop: '120px'}}>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white/90 mb-4">Encuentra la casa de tus sueños</h2>
          <div className="mb-6">
            <p className="text-white/80 text-base mb-4">Gestión e intermediación inmobiliaria enfocada en las personas. Asesoría integral en compra, venta y arriendo de propiedades.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="#about" className="bg-primary text-white px-8 py-3 rounded-md font-semibold text-lg text-center">Nosotros</a>
            <a href="#contact" className="bg-primary text-white px-8 py-3 rounded-md font-semibold text-lg text-center">Contacto</a>
          </div>
        </div>
      </div>
      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${current === idx ? 'bg-primary' : 'bg-white/50'} border border-white`}
            aria-label={`Ir a imagen ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;

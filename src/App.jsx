
import React from 'react';
import Header from './components/Header'
import Loader from './components/Loader';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import Contact from './components/Contact';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Nosotros from './pages/Nosotros';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Properties from './pages/Properties';
import Footer from './components/Footer'

function App(){
  const [loading, setLoading] = React.useState(true);
  const [fadeOut, setFadeOut] = React.useState(false);

  React.useEffect(() => {
    const timerFade = setTimeout(() => setFadeOut(true), 2200); // inicia fade
    const timerHide = setTimeout(() => setLoading(false), 3000); // oculta loader
    return () => {
      clearTimeout(timerFade);
      clearTimeout(timerHide);
    };
  }, []);

  if (loading) return <Loader fadeOut={fadeOut} />;

  return (
    <Router>
      <div className="min-h-screen bg-secondary text-zinc-800 font-sans flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App;

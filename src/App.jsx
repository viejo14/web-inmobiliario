
import Header from './components/Header'
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Nosotros from './pages/Nosotros';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Properties from './pages/Properties';
import Footer from './components/Footer'

function App(){
  return (
    <Router>
      <div className="min-h-screen bg-secondary text-zinc-800 font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;

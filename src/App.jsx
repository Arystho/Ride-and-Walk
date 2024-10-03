import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Header from './components/header';
import Footer from './components/footer';
import Accueil from './pages/accueil';
import Connection from './pages/connection';
import Faq from './pages/faq';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}
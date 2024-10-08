import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Accueil from './pages/accueil';
import Connection from './pages/connection';
import Faq from './pages/faq';
import Inscription from './pages/inscription';
import MotDePasseOublier from './pages/motDePassOublier';
import ValidationEmail from './pages/validationEmail';
import NewMotDePasse from './pages/newMotDePasse';
import ValidationPassword from './pages/validationPassword';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/motDePasseOublie" element={<MotDePasseOublier />} />
        <Route path="/validationEmail" element={<ValidationEmail />} />
        <Route path="/newMotDePasse" element={<NewMotDePasse />} />
        <Route path="/validationPassword" element={<ValidationPassword />} />
      </Routes>  
    </Router>
  );
}
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Accueil from './pages/accueil';
import Connection from './pages/connection';
import Faq from './pages/faq';
import MentionLegales from './pages/mentionLegales';
import ConditionDutilisation from './pages/conditionDutilisation';
import Inscription from './pages/inscription';
import MotDePasseOublier from './pages/motDePassOublier';
import ValidationEmail from './pages/validationEmail';
import PolitiqueDeConfidentialiter from './pages/politiqueDeConfidentialiter';
import NewMotDePasse from './pages/newMotDePasse';
import ValidationPassword from './pages/validationPassword';
import Activiter from './pages/activiter';
import AppDetail from './pages/appDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/mentionLegales" element={<MentionLegales />} />
        <Route path="/conditionDutilisation" element={<ConditionDutilisation />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/motDePasseOublie" element={<MotDePasseOublier />} />
        <Route path="/validationEmail" element={<ValidationEmail />} />
        <Route path="/politiqueDeConfidentialite" element={<PolitiqueDeConfidentialiter />} />
        <Route path="/newMotDePasse" element={<NewMotDePasse />} />
        <Route path="/validationPassword" element={<ValidationPassword />} />
        <Route path="/activities" element={<Activiter />} />
        <Route path="/appdetail" element={<AppDetail />} />
      </Routes>  
    </Router>
  );
}
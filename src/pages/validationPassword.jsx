import '../styles/validationPassword.css';
import { Link } from 'react-router-dom';

export default function ValidationPassword() {    
    return (
<main id="validation-password">
        <div className="background-validation-password">
            <div className="validation-container-password">
                <img src="/Black_White_Elegant_Monogram_Initial_Name_Logo-removebg-preview.png" alt="logo" className="logo"/>
                <p className="message">Votre nouveau mot de passe à bien étais enregistrer !</p>
                <Link to="/connection" className="buttom-link">Connexion</Link>
            </div>
        </div>
    </main>
    );
}
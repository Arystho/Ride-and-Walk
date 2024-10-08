import '../styles/validationEmail.css';
import { Link } from 'react-router-dom';

export default function MessageNewMotDePasse() {
    return (
<main id="validation-email">
<div className="background-validation">
    <div className="validation-container">
        <img src="/Black_White_Elegant_Monogram_Initial_Name_Logo-removebg-preview.png" alt="logo" className="logo"/>
        <h2>Vérifiez votre e-mail</h2>
        <div className="email-icon">
            <i className="fas fa-envelope"></i>
        </div>
        <p className="message">Un e-mail de confirmation a été envoyé à <strong>votre@email.com</strong>.</p>
        <p className="spam-note">Si vous ne trouvez pas l'e-mail, veuillez vérifier votre dossier spam.</p>
        <p className="resend">Vous n'avez pas reçu l'e-mail ?</p>
        <Link to="#" class="resend-link">Renvoyer l'e-mail de confirmation</Link>
        <Link to="/connection" className="return">Retour à la connexion</Link>
    </div>
</div>
</main>
    );
}   
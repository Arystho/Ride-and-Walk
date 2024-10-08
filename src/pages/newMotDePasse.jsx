import '../styles/newMotDePasse.css';
import { Link } from 'react-router-dom';

export default function NewMotDePasse() {
    return (
        <main id="inscription">
            <div className="background-inscription">
                <div className="signup-container">
                    <img src="/Black_White_Elegant_Monogram_Initial_Name_Logo-removebg-preview.png" alt="logo" className="logo" />
                    <h2>Réinitialiser votre mot de passe</h2>
                    <form>
                        <div>
                            <p>Mot de passe </p>
                            <input type="password" id="password" name="password" placeholder="Mot de passe" />
                        </div>
                        <div>
                            <p>Second mot de passe</p>
                            <input type="password" id="password" name="password" placeholder="Mot de passe" />
                        </div>
                        <div>
                            <button type="submit">S'inscrire</button>
                        </div>
                    </form>
                    <p>Vous avez déjà un compte ?</p>
                    <Link to="/connection">Connectez-vous</Link>                    
                </div>
            </div>
        </main>
    );
}
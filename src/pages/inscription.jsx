import '../styles/inscription.css';
import { Link } from 'react-router-dom';

export default function Inscription() {
    return (
        <main id="inscription">
            <div className="background-inscription">
                <div className="signup-container">
                    <img src="/Black_White_Elegant_Monogram_Initial_Name_Logo-removebg-preview.png" alt="logo" className="logo" />
                    <h2>Inscription</h2>
                    <form>
                        <div>
                            <p>Nom</p>
                            <input type="text" id="nom" name="nom" placeholder="Nom" />
                        </div>
                        <div>
                            <p>Prénom</p>
                            <input type="text" id="prenom" name="prenom" placeholder="Prénom" />
                        </div>
                        <div>
                            <p>Email</p>
                            <input type="email" id="email" name="email" placeholder="Email" />
                        </div>
                        <div>
                            <p>Mot de passe</p>
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

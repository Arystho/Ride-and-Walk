import '../styles/newMotDePasse.css';
import { Link, useNavigate } from 'react-router-dom';

export default function NewMotDePasse() {
    const navigate = useNavigate();
    const handleForm = async (e) => {
        e.preventDefault();

        const password = document.getElementById('password').value;
        const password2 = document.getElementById('password2').value;

        try {
            const response = await fetch('/api/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password, password2 }),
            });

            if (!response.ok) {
                throw new Error('Une erreur est survenue');
            }

            const data = await response.json();

            if (data.status === 'success') {
                navigate('/validatePassword');
            }
        } catch (error) {
            console.error('Erreur lors de la réinitialisation du mot de passe:', error);
        }
    }
    return (
        <main id="inscription">
            <div className="background-inscription">
                <div className="signup-container">
                    <img src="/Black_White_Elegant_Monogram_Initial_Name_Logo-removebg-preview.png" alt="logo" className="logo" />
                    <h2>Réinitialiser votre mot de passe</h2>
                    <form>
                        <div>
                            <p>Mot de passe </p>
                            <input data-testid="password-input" type="password" className="password" name="password" placeholder="Mot de passe" />
                        </div>
                        <div>
                            <p>Second mot de passe</p>
                            <input data-testid="password-confirm-input" type="password" className="password2" name="password" placeholder="Mot de passe" />
                        </div>
                        <div>
                            <button onClick={handleForm} type="submit">S'inscrire</button>
                        </div>
                    </form>
                    <p>Vous avez déjà un compte ?</p>
                    <Link to="/connection">Connectez-vous</Link>                    
                </div>
            </div>
        </main>
    );
}
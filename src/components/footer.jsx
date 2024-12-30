import '../styles/footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div>
                <div id="footer-left">
                    <h2>Ride & Walk</h2>
                    <p>Trouver votre spot idéal</p>
                </div>
                <nav>
                    <ul>
                        <li><Link to="#">Nous contacter</Link></li>
                        <li><Link to="/mentionLegales">Mentions légales</Link></li>
                        <li><Link to="/politiqueDeConfidentialite">Politique de confidentialité</Link></li>
                        <li><Link to="/conditionDutilisation">Conditions d'utilisation</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}
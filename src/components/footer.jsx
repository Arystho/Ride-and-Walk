import React from 'react';
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
                    <li><Link to="#">Assistance</Link></li>
                    <li><Link to="#">Nous contacter</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                </ul>
            </nav>
        </div>
    </footer>
    );
}
import React from 'react';
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
                    <li><a href="#">Assistance</a></li>
                    <li><a href="#">Nous contacter</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                </ul>
            </nav>
        </div>
    </footer>
    );
}
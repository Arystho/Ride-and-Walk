import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';


export default function AppDetail() {
    return (
        <>
            <Header />
            <main>
                <section className="image-section">
                    <img src="chute-du-tombereaux.jpg" alt="Chute du Tombereaux" />
                        <div className="image-info">
                            <h2>Chute du Tombereaux</h2>
                            <p>Ajouter une description</p>
                        </div>
                </section>
                <section className="comments-section">
                    <div className="comments">
                        <div className="comment">
                            <img src="user-avatar.png" alt="User Avatar" />
                                <div className="comment-content">
                                    <h3>Nom de l'utilisateur</h3>
                                    <p>Commentaire de l'utilisateur</p>
                                    <div className="comment-actions">
                                        <Link to="#">Répondre</Link>
                                        <Link to="#">J'aime</Link>
                                        <Link to="#">Signaler</Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="new-comment">
                        <textarea placeholder="Ajouter un commentaire..."></textarea>
                        <button>Commenter</button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
};
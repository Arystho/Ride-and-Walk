import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

const ProfilePage = () => {
    // Informations de profil fictives
    const profileData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'Passionné de voyages et de photographie. J\'aime découvrir de nouveaux endroits et partager mes meilleures photos.',
        profilePicture: 'https://via.placeholder.com/150',
        location: 'Paris, France',
        joinedDate: 'Juillet 2021',
    };

    return (
        <div className="profile-page">
            <div className="profile-header">
                <img src={profileData.profilePicture} alt="Profile" className="profile-picture" />
                <div className="profile-info">
                    <h2>{profileData.name}</h2>
                    <p>{profileData.email}</p>
                    <p>{profileData.bio}</p>
                </div>
            </div>

            <div className="profile-details">
                <div className="detail-item">
                    <h3>Localisation</h3>
                    <p>{profileData.location}</p>
                </div>
                <div className="detail-item">
                    <h3>Inscrit depuis</h3>
                    <p>{profileData.joinedDate}</p>
                </div>
            </div>

            <div className="profile-actions">
                <button className="edit-profile-btn">Modifier le profil</button>
                <button className="settings-btn">Paramètres</button>
            </div>
        </div>

    );
};

export default ProfilePage;
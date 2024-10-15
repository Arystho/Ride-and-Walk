# Ride & Walk - React

## Description
___________________________________________________________________

un site web qui répertorie les endroits de la région pour pratiquer des activités telles que le roller, le skate, le longboard, le vélo etc, et faire en sorte que les utilisateurs puissent aussi rajouter les lieux trouvés.


## Table des matière
___________________________________________________________________

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Prérequis](#prérequis)
- [Technologie utilisé](#technologie)
- [structure](#structure)
- [Scripts](#scripts)
- [Observations](#observations)

## Aperçu
___________________________________________________________________

Ride & Walk permet au utilisateur 

- De recherche des lieux de sport
- De choisir une activité sportive 
- De faciliter la communication avec les autres utilisateurs
- De faciliter la mise en place d'activités sportives

## Fonctionnalités
___________________________________________________________________

- Recherche des lieux de sport
- Choix de l'activité sportive
- Communication avec les autres utilisateurs
- S'inscrire
- Se connecter
- Ajouter des lieux de sport

## Prérequis
___________________________________________________________________

Assurer vous d'avoir installé :

- node.js (version 16.x.x)
- npm (installé avec node.js)
- npm install --save-dev jest (pour l'installation de teste unitaire)

## Téchnologie utilisés
____________________________________________________________________

- ESLint : Outil d'analyse statique pour identifier et signaler les problèmes dans le code JavaScript.
- Jest : Framework de test JavaScript, probablement utilisé pour les tests unitaires et d'intégration.
- CSS : Utilisé pour le styling, avec des fichiers CSS individuels pour chaque composant/page.
- JSX : Extension de syntaxe pour JavaScript, utilisée avec React pour décrire la structure des composants UI.
- npm : Gestionnaire de paquets pour gérer les dépendances du projet (indiqué par la présence de package.json et package-lock.json).
- Git : Système de contrôle de version (indiqué par la présence de .gitignore).

Dépendances principales

- React (v18.3.1): Bibliothèque JavaScript pour la construction d'interfaces utilisateur.
- React DOM (v18.3.1): Package pour rendre les composants React dans le navigateur.
- React Router DOM (v6.26.2): Bibliothèque de routage pour les applications React.

Dépendances de développement

- Vite (v5.4.1): Outil de build rapide pour les projets web modernes.
- ESLint (v9.9.0): Outil d'analyse statique pour identifier et signaler les problèmes dans le code JavaScript.
- Babel (v7.25.7): Transpileur JavaScript.

- @babel/core
- @babel/preset-env
- @babel/preset-react


Jest (v29.7.0): Framework de test JavaScript.

- babel-jest
- jest-environment-jsdom


Testing Library :

- @testing-library/jest-dom (v6.5.0)
- @testing-library/react (v16.0.1)


TypeScript (types seulement):

@types/react (v18.3.3)
@types/react-dom (v18.3.0)

Plugins ESLint:

- eslint-plugin-react (v7.35.0)
- eslint-plugin-react-hooks (v5.1.0-rc.0)
- eslint-plugin-react-refresh (v0.4.9)

Autres outils:

- @vitejs/plugin-react (v4.3.1)
- globals (v15.9.0)
- identity-obj-proxy (v3.0.0)

## Structure
___________________________________________________________________

```
RIDE-AND-WALK/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── footer.jsx
│   │   └── header.jsx
│   ├── pages/
│   │   ├── accueil.jsx
│   │   ├── connection.jsx
│   │   ├── faq.jsx
│   │   ├── inscription.jsx
│   │   ├── motDePassOublier.jsx
│   │   ├── newMotDePasse.jsx
│   │   ├── validationEmail.jsx
│   │   └── validationPassword.jsx
│   ├── styles/
│   │   ├── scss/
│   │   ├── accueil.css
│   │   ├── connection.css
│   │   ├── faq.css
│   │   ├── footer.css
│   │   ├── global.css
│   │   ├── header.css
│   │   ├── inscription.css
│   │   ├── motDePasseOublier.css
│   │   ├── newMotDePasse.css
│   │   ├── validationEmail.css
│   │   └── validationPassword.css
│   ├── App.jsx
│   └── main.jsx
├── .babelrc
├── .gitignore
├── eslint.config.js
├── index.html
├── jest.config.js
├── jest.setup.js
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Scripts
_______________________________________________________

- test: Exécute Jest en mode watch
- dev: Lance le serveur de développement Vite
- build: Construit le projet pour la production
- lint: Exécute ESLint pour l'analyse du code
- preview: Lance un aperçu de la version de production

## Contributeur
_______________________________________________________

- Noms: Jordan 

Nous sommes ravis que vous envisagiez de contribuer à RIDE-AND-WALK ! Votre aide est précieuse pour améliorer notre plateforme dédiée aux passionnés de randonnée et de vélo.
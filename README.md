# 🎨 Application de Dessin Vectoriel - Canvas HTML5

> **Étudiant** : Gauthier COPPEAUX  
> **Formation** : M1 IL CLA1 - Web Engineering  
> **Année** : 2025-26  
> **Date** : 27 novembre 2025

## Description

Application de dessin vectoriel simple développée avec JavaScript vanilla et l'API Canvas HTML5 dans le cadre du module **TP Web : Javascript et HTML5**. Conformément au sujet, l'architecture MVC est utilisée pour structurer le code.

Le projet couvre ce qui était demandé dans le [sujet](https://docs.google.com/document/d/1bgGhG9ZVWwf_K9euPAJ9xq8PJsT_zZiJFpPVtc_cW8o/edit?tab=t.0) et j’ai ajouté quelques améliorations personnelles (forme cercle, ajustements UX, personnalisation couleur / épaisseur).

## Aperçu

![Aperçu de l’application](./Capture%20d%E2%80%99%C3%A9cran%202025-11-30%20155627.png)

## Fonctionnalités du sujet (base)

### Partie 1 : Modèle de données

- Classe `Drawing` (stockage des formes)
- Classe abstraite `Shape`
- Formes concrètes : `Rectangle`, `Line`

### Partie 2 : Vue - Rendu Canvas

- Fonction `paint()` pour redessiner l’ensemble
- Rendu rectangle via `strokeRect()`
- Rendu ligne via path (`moveTo` / `lineTo`)
- Gestion couleur / épaisseur du trait

### Partie 3 : Contrôleur - Interactions

- Événements souris (`mousedown`, `mousemove`, `mouseup`)
- Conversion des coordonnées souris → coordonnées canvas
- Dessin interactif rectangle et ligne
- Sélection outil (radio buttons)
- Bouton « Effacer tout »

### Partie 4 : Vue - Liste des formes

- Liste HTML des formes
- Affichage type + coordonnées (arrondies)
- Suppression par élément
- Synchronisation automatique avec le canvas

## Fonctions ajoutées (au-delà du sujet)

### 1. Formes géométriques avancées

- Forme `Circle` (rayon calculé dynamiquement)
  - Classe dédiée + rendu avec `arc()`
  - Ajout d’un bouton radio supplémentaire

### 2. Ajout bouton clear

- Bouton « Effacer tout » pour réinitialiser le dessin
  - Vide le modèle et rafraîchit la vue


## Structure du code

Conformément au sujet, le projet utilise une architecture **MVC** avec séparation claire des responsabilités :

- **`model.js`** : Définit les classes métier

  - `Drawing` : Gère la collection de formes
  - `Shape` : Classe de base abstraite
  - `Rectangle`, `Line`, `Circle` : Classes concrètes pour chaque forme

- **`view.js`** : Gère le rendu visuel

  - `paint()` : Dessine les formes sur le canvas
  - `updateShapeList()` : Met à jour la liste HTML des formes

- **`controller.js`** : Coordination entre le modèle et la vue

  - Gestion des événements utilisateur (boutons, inputs)
  - Synchronisation entre le modèle et l'affichage

- **`interaction.js`** : Gestion des interactions bas niveau

  - Événements souris (cliquer-glisser)
  - Calcul des coordonnées relatives au canvas

- **`main.js`** : Point d'entrée de l'application
  - Initialisation des composants
  - Configuration de l'environnement

## Lancer l’application

### Méthode simple (recommandée)

Il suffit d'ouvrir le fichier `canvas.html` directement dans le navigateur :

- **Double-cliquer** sur `canvas.html` dans l'explorateur de fichiers
- Ou faire **clic droit → Ouvrir avec → votre navigateur préféré**

Pas d’installation nécessaire : un double-clic sur `canvas.html` suffit.

### Option : serveur local

Si vous préférez utiliser un serveur de développement local :

**Avec Node.js :**

```bash
npx serve .
```

**Avec Python :**

```bash
python -m http.server
```

**Avec PHP :**

```bash
php -S localhost:8000
```

**Avec l'extension VS Code :**

Extension VS Code : _Live Server_ (clic droit → Open with Live Server)

Puis accédez à `http://localhost:8000/canvas.html` (ou le port indiqué).

## 📁 Structure du projet

```plaintext
tpWeb/
├── canvas.html              # Page principale de l'application
├── canvas.css               # Styles de l'application
├── index.html               # Page d'accueil (optionnelle)
├── model.js                 # Classes métier (Drawing, Shape, etc.)
├── view.js                  # Gestion du rendu visuel
├── controller.js            # Contrôleur MVC
├── interaction.js           # Gestion des événements souris
├── main.js                  # Point d'entrée
├── jquery-2.1.3.min.js      # Bibliothèque jQuery
├── bootstrap/               # Framework Bootstrap
│   ├── css/
│   │   └── bootstrap.min.css
│   ├── fonts/
│   └── js/
│       └── bootstrap.min.js
└── README.md
```

## Technologies

- **Langage** : JavaScript (ES5)
- **API** : Canvas HTML5
- **Framework CSS** : Bootstrap 3
- **Bibliothèque** : jQuery 2.1.3
- **Architecture** : MVC (Modèle-Vue-Contrôleur)

## Points clés

1. **Architecture MVC** (demandée par le sujet) : Séparation claire des responsabilités pour un code maintenable
2. **Dessin interactif** : Cliquer-glisser fluide avec aperçu en temps réel
3. **Gestion dynamique** : Liste synchronisée automatiquement avec le canvas
4. **Interface intuitive** : Utilisation de Bootstrap pour un design moderne
5. **Code extensible** : Architecture permettant d'ajouter facilement de nouvelles formes

## Auteur

**Gauthier COPPEAUX**  
M1 IL CLA1 - Web Engineering 2025-26

## Ressources

- [Sujet du TP](https://docs.google.com/document/d/1bgGhG9ZVWwf_K9euPAJ9xq8PJsT_zZiJFpPVtc_cW8o/edit?tab=t.0)

## Retour d'expérience

Quelques points marquants pendant le développement :

- Gestion du cercle : calculer un rayon à partir du drag demandait de décider d’une convention (point d’origine = centre ou coin). J’ai retenu centre + rayon.
- Précision des coordonnées : j’ai arrondi dans la liste pour éviter le bruit visuel (décimales inutiles).

 

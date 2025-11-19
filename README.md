# TP Web : Javascript et HTML5 - Application de Dessin

## 1. Introduction

Ce dépôt contient le code source de mon projet réalisé pour le module **TP Web : Javascript et HTML5**.
L'objectif était de développer une application de dessin vectoriel simple dans le navigateur, en utilisant l'API Canvas HTML5 et une architecture MVC (Modèle-Vue-Contrôleur).

## 2. Fonctionnalités implémentées

Au cours de ce TP, j'ai implémenté les fonctionnalités suivantes :

### Formes géométriques

- **Rectangle** : Dessin par cliquer-glisser.
- **Ligne** : Tracé de lignes simples.
- **Cercle** : Ajout de la forme Cercle (calcul du rayon dynamique).

### Gestion de l'affichage

- **Liste des formes** : Affichage dynamique de toutes les formes dessinées dans une liste latérale.
- **Détails** : Chaque élément de la liste affiche son type et ses coordonnées (arrondies pour plus de lisibilité).

### Interactions et Modifications

- **Suppression individuelle** : Chaque élément de la liste possède un bouton pour supprimer la forme correspondante sur le canvas.
- **Tout effacer** : Un bouton "Corbeille" permet de vider entièrement le dessin.
- **Paramètres** : Choix de la couleur et de l'épaisseur du trait via l'interface.

## 3. Architecture du code

Le projet est structuré pour séparer les responsabilités :

- `model.js` : Définit les classes `Drawing`, `Shape`, `Rectangle`, `Line` et `Circle`.
- `view.js` : Gère le rendu graphique (`paint`) et la mise à jour de l'interface DOM (`updateShapeList`).
- `controller.js` : Fait le lien entre les interactions utilisateur (souris, boutons) et le modèle.
- `interaction.js` : Gère les événements de bas niveau (DnD).
- `main.js` : Point d'entrée de l'application.

## 4. Comment lancer le projet

Il suffit d'ouvrir le fichier `canvas.html` directement dans votre navigateur :

- **Double-cliquez** sur `canvas.html` dans l'explorateur de fichiers
- Ou faites **clic droit → Ouvrir avec → votre navigateur**

Aucune installation n'est nécessaire !

### Alternative : Serveur local (optionnel)

Si vous préférez utiliser un serveur local :

**Avec Node.js :**

```bash
npx serve .
```

**Avec Python :**

```bash
python -m http.server
```

Puis accédez à `http://localhost:8000/canvas.html` (ou le port indiqué).

## 5. Auteur

- **Étudiant** : COPPEAUX Gauthier
- **Groupe** : M1 IL CLA1
- **Année** : 2025/2026

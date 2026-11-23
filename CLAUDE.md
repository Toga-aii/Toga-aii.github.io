# Portfolio – Achille Pommier-Raymond

Portfolio de BTS SIO option SISR (Lycée de la CCI, Nîmes).
Une première version a été générée avec Emergent ; je la retravaille pour qu'elle me ressemble et que je comprenne tout le code.

## Stack

- Front : HTML, CSS et JavaScript « vanilla », tout dans `index.html` (pas de framework, pas de build).
- Back : aucun (site statique).
- Hébergement : GitHub Pages, dépôt `Toga-aii/Toga-aii.github.io`, branche `main`, dossier racine.
  Site en ligne : https://toga-aii.github.io

## Structure

- `index.html` : tout le site (HTML, CSS et JS dans un seul fichier).
  Navigation par ancres (#) entre 8 pages : Accueil, Présentation, AP1, AP2,
  Stages, Veille technologique, Guide de bonne conduite, Contact.
  Les contenus (veille, compétences, guide…) sont dans des constantes JS (`VEILLE`, `COMP_PRO`, `GUIDE`…).
- `img/` : captures du stage aux Thermes de Balaruc-les-Bains (format .webp).
- `.claude/` : configuration Claude Code du projet (sous-agents, commandes, hook, permissions).

## Commandes

- Lancer en local : ouvrir `index.html` dans le navigateur (ou `python -m http.server` puis http://localhost:8000).
- Build : aucun.
- Déployer : `git push` sur `main` → GitHub Pages met le site à jour en 1-2 minutes.

## Comment me parler

- Réponds en français, tutoie-moi.
- Sois court et direct : la réponse d'abord, l'explication ensuite seulement si utile.
- Quand tu lances une commande que je ne connais peut-être pas, explique-la en une ligne.
- Je suis étudiant en informatique (réseau et développement web) : je veux comprendre ce que tu fais, signale les notions importantes.

## Façon de travailler

- Avant une grosse modif (plusieurs fichiers, refacto), donne-moi le plan en 3-5 points et attends mon OK.
- Petites modifs : fais-les directement.
- Après une modif, vérifie le rendu (la page s'affiche sans erreur JS) et dis-moi le résultat.
- Ne touche jamais aux fichiers `.env` ni à des clés/mots de passe.
- Ne fais jamais `git push --force`, `git reset --hard` ou de suppression de fichiers sans me demander.

## Git

- Messages de commit en français, au format : `type: description courte` (feat, fix, style, docs, refactor, chore).
- Un commit = un changement logique.

## Objectifs

- Code propre et compréhensible : je dois pouvoir l'expliquer à l'oral.
- Site rapide, responsive (mobile d'abord) et accessible.
- Mettre en avant mes projets, notamment réseau (Cisco) et web.

## Règles

- Garder le style actuel : thème sombre, couleur d'accent orange. Ne change pas le design global sans me montrer avant.
- Garde les textes du site en français.
- Les contenus manquants sont marqués « À compléter » : les remplir quand on me donne les infos.
- Sur les captures, ne jamais montrer de noms de vraies personnes (les flouter).
- Le site doit rester statique (pas de framework, pas de build) pour pouvoir être hébergé sur GitHub Pages.
- Supprime le code mort laissé par la génération automatique quand tu le croises (en me le signalant).

## Code

- Noms de variables et fonctions en anglais, commentaires en français.
- Préfère du code simple et lisible à du code « malin ».

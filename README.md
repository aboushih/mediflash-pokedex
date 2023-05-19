# Commands to test the app locally

## To clone the whole project:

### `git clone https://github.com/aboushih/mediflash-pokedex.git`

## To run the front-end project:

### `cd Front-End`

### `npm install`

### `npm run start`

## To run the back-end project:

### `cd Back-End`

### `npm install`

### `npm run start`

**Si 5 devs rejoignent ton équipe demain et que ton application est en production, quelles sont les améliorations à apporter à l'environnement de Dev et pourquoi ?**

**Les classer par ordre de priorité**

Il y a plusieurs améliorations que je pourrais apporter à l'environnement de développement pour faciliter le travail de l'équipe et assurer une transition fluide.

Voici quelques suggestions :

- Utilisation d'un système de gestion de base de données : Choisir un SGBD qui convient le mieux au type de données tairtés pour assurer leur persistence. (relationnel, orienté documents ...)

- Mise en place d'une plateforme de gestion de versions : Utiliser d'un système de contrôle de version que Git et une plateforme tel que Github pour faciliter la collaboration entre les développeurs et la revue des modifications du code (en utilisant les PR ...)

- Mise en place d'un pipeline de livraison continue (CI/CD) : Automatiser le processus de déploiement en mettant en place un pipeline CI/CD en utilisant la plateforme CircleCI par exemple pour pouvoir tester, construire et déployer automatiquement les nouvelles fonctionnalités ou les correctifs de bugs.

- Configuration d'autres environnements de développement : Mettre en place plusieurs environnements mis à part celle de prod où les développeurs peuvent tester leurs fonctionnalités sans affecter l'environnement de production. (Staging, PreProd ...)

- Amélioration de l'automatisation des tests : Renforcer les tests automatisés en utilisant des frameworks tels que Jest pour les tests unitaires.

- Documentation complète : Assurer-vous que l'environnement de développement dispose d'une documentation complète, expliquant les architectures clés, les flux de travail de développement, les conventions de codage etc en utilisant l'outil Notion par exemple

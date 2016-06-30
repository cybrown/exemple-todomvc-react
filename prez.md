# 1) Introduction
 - https://facebook.github.io/react/
 - Librairie de vues (HTML ou autre).

## 1. JSX
 - JSX n'est pas du HTML !
 - class => className, for => htmlFor...
 - nom des événements: onClick...
 - style: utilisation d'objets
 - Fermeture des tags obligatoire

## 2. Composant
 - React.createClass(): https://facebook.github.io/react/docs/component-specs.html
 - ES6: https://facebook.github.io/react/docs/reusable-components.html#es6-classes
 - Pure component: https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
 - Propriétés et état.
 - Cycle de vie: https://kunigami.files.wordpress.com/2016/01/react.png
 - https://facebook.github.io/react/docs/component-specs.html
 - Angular1 => directive en mode élément
 - Pas de présence du composant dans le HTML final

# 2) Fonctionnement interne
## 1. Virtual DOM
 - Objets JavaScript simples.
 - Ne sont pas des noeuds du DOM.
 - Part du principe que le DOM est lent à manipuler.
## 2. Rendu du virtual DOM
 - Premier rendu => mapping en noeuds DOM (anciennement string)
 - Rendus suivants => différence avec rendu précédent
 - Part du principe que les fonctions de rendu sont rapides
 - Diff approximatif, suffisant mais de compléxité linéaire
## 3. Les événements sont aussi virtualisés
 - Comportement consistant entre navigateurs.
 - Performances: réutilisation des événements, utilisation d'un seul handler.

# 3) Live coding
 - TODO MVC

# 4) Pour aller plus loin
## 1. Optimisations:
 - Utiliser shouldUpdate
 - Utiliser des structures de données immutables
 - ImmutableJS: https://facebook.github.io/immutable-js/
## 2. Flux:
 - Flux: https://facebook.github.io/flux/
 - Redux: http://redux.js.org
## 3. AngularJS:
 - Intégration avec angular 1

# 5) Avantages
 - Les vues sont du code
 - Rapide par défaut, optimisations possibles
 - Flux de données plus simple à suivre
 - Très bon outil de dev (react inspector)
 - Supporté par une grande entreprise, qui l'utilise elle même en production
 - Beaucoup d'applications l'utilise déjà

# 6) Inconvénients:
 - Taille de la librairie (de l'ordre de la centaine de ko)
 - Difficulté d'utilisation par des designers / intégrateurs
 - Dépendant de facebook
 - Difficulté de mise en place

# 7) Ecosystème:
 - Babel, Webpack, Flow
 - TypeScript
 - React Native: https://facebook.github.io/react-native/
 - Radium: http://stack.formidable.com/radium/
 - Alternatives:
     - elm: http://elm-lang.org
     - maquette: http://maquettejs.org

# 8) Points à approfondir:
 - Router
 - Aide à l'optimisation
 - Tests unitaire des composants

Sources
https://kunigami.wordpress.com/2015/04/28/react-js-introduction/

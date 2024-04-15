# Documentation de tests unitaires pour une application de gestion de concession automobile

## Contexte
Il s’agit d’une petite concession à gérer. L'application permet à l'utilisateur de choisir différentes fonctionnalités, telles que l'ajout, la suppression et l'affichage de voitures. Chaque voiture est représentée par son modèle et sa marque, et l'application doit pouvoir afficher la liste des marques sans doublons.

## Réflexion sur les types de tests

- **Tests des fonctionnalités principales** :
    - **Pourquoi** : Ces tests garantissent que les fonctionnalités essentielles de l'application fonctionnent comme prévu. Ils sont cruciaux pour s'assurer que l'application répond aux besoins de l'utilisateur.
    - **Exemple** : Tester la sélection de voitures pour vérifier que l'utilisateur peut choisir une voiture avec succès.

- **Test de non-régression** :
    - **Pourquoi** : Les modifications ultérieures de l'application peuvent accidentellement introduire de nouveaux problèmes. Les tests de non-régression garantissent que les fonctionnalités existantes ne sont pas altérées par les mises à jour.
    - **Exemple** : Réexécuter les tests après une mise à jour de l'application pour vérifier que toutes les fonctionnalités précédentes fonctionnent toujours correctement.

- **Tests de performance** :
    - **Pourquoi** : Une application lente ou qui consomme trop de ressources peut entraîner une mauvaise expérience utilisateur. Les tests de performance garantissent que l'application reste réactive même dans des conditions défavorables.
    - **Exemple** : Tester le temps nécessaire pour afficher une liste de voitures, même lorsque cette liste devient très longue.

## Pourquoi Vitest ?
Vitest a été choisi comme framework de test unitaire pour plusieurs raisons :

- **Facilité d'utilisation** : Vitest offre une syntaxe simple et concise pour définir et exécuter des tests unitaires, ce qui facilite la création et la maintenance des tests.
- **Intégration transparente** : Vitest s'intègre facilement avec Node, simplifiant ainsi son intégration dans le processus de développement.
- **Flexibilité** : Vitest prend en charge une variété de styles de test, offrant ainsi aux développeurs la possibilité d'adopter l'approche qui convient le mieux à leur projet.
- **Rapports de test détaillés** : Vitest génère automatiquement des rapports de test détaillés, permettant aux développeurs de suivre l'état des tests et de diagnostiquer les problèmes éventuels.

# Documentation des fonctionnalités et des tests unitaires

## Ajouter une voiture :

**Fonctionnalité** : La méthode `addCar` permet d'ajouter une nouvelle voiture à la liste existante en spécifiant la marque et le modèle.

**Test unitaire** : Le test vérifie que la méthode `addCar` ajoute effectivement une voiture à la liste en vérifiant que la taille de la liste augmente après l'ajout et que la voiture ajoutée est correctement représentée.

## Afficher la liste de toutes les voitures :

**Fonctionnalité** : La méthode `getAllCars` retourne la liste complète de toutes les voitures disponibles dans la concession.

**Test unitaire** : Ce test vérifie que la méthode `getAllCars` renvoie une liste valide de voitures, en s'assurant que chaque voiture dans la liste est correctement représentée.

## Afficher la liste des marques sans doublons :

**Fonctionnalité** : La méthode `getUniqueBrands` retourne la liste des marques de voitures disponibles dans la concession, sans doublons.

**Test unitaire** : Ce test vérifie que la méthode `getUniqueBrands` renvoie une liste valide de marques de voitures, en vérifiant qu'aucune marque en double n'est présente dans la liste.

## Supprimer une voiture :

**Fonctionnalité** : La méthode `removeCar` permet à l'utilisateur de supprimer une voiture de la liste en spécifiant la marque et le modèle de la voiture à supprimer.

**Test unitaire** : Ce test vérifie que la méthode `removeCar` supprime effectivement une voiture de la liste, en s'assurant que la taille de la liste diminue après la suppression et que la voiture supprimée n'est plus présente dans la liste.

## Rechercher des voitures par marque :

**Fonctionnalité** : La méthode `searchCar` permet à l'utilisateur de rechercher des voitures en fonction de la marque spécifiée.

**Test unitaire** : Ce test vérifie que la méthode `searchCar` renvoie les résultats attendus en fonction de la marque spécifiée, en vérifiant que les voitures renvoyées correspondent à la marque de recherche et sont incluses dans les résultats.


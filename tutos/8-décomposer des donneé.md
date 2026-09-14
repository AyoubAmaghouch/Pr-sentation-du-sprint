# Décomposer les données

## 1. Objectif

L’objectif est de décomposer progressivement une relation qui contient plusieurs groupes de données, en utilisant les dépendances fonctionnelles.

Cela permet de séparer les données qui doivent être regroupées et d’identifier les différentes entités obtenues.

---

# 2. Prérequis

Avant de commencer, il faut :

- Avoir réalisé le dictionnaire de données.
- Avoir identifié les dépendances fonctionnelles.
- Comprendre le rôle d’un identifiant.

---

# 3. Dépendance fonctionnelle

Une dépendance fonctionnelle permet d’indiquer qu’un identifiant détermine les données qui lui sont associées.

Exemple :

```text
id_auteur → nom_auteur, email_auteur
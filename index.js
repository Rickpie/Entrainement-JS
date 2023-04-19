/* 2.1. Sujet 1
Avec une liste de nombres entiers relatifs et un nombre k, crée une méthode retournant un booléen qui affiche si deux nombres de cette liste ont k comme résultat de leur somme.

Par exemple, si je te donne la liste [10, 15, 3, 7] et k = 17, la fonction devra sortir true car 10 + 7 = 17. Si je te donne la liste [1, 8, 10, 21] et k = 19, la fonction devra sortir false car il n'y a pas deux nombres ayant 19 comme résultat de leur addition. */

function twoNumbersSumToK(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === k) {
        return true;
      }
    }
  }
  return false;
}


/*Sujet 2
Nous allons te donner une liste contenant la hauteur (en étages) d'immeubles appartenant à une rue, d'est en ouest. Un agent immobilier voudrait que tu écrives un algorithme qui retourne combien de bâtiments de cette rue ont au moins un appartement avec une vue sur le soleil couchant (à l'ouest), afin de bien évaluer la valeur des bâtiments de la rue.
Par exemple, avec la liste [3, 7, 8, 3, 6, 1], la fonction devrait retourner 3, puisque l'étage le plus haut des immeubles ayant comme taille 8, 6, et 1 ont tous une vue à l'ouest. Ou autre exemple la liste [1, 4, 5, 8] devrait te retourner 1 puisque seul le dernier bâtiment a au moins un appartement avec une vue à l'ouest.
*/
function countBuildingsWithSunsetView(buildings) {
  let count = 1; // on considère que le dernier bâtiment a une vue sur le coucher de soleil
  let maxHeight = buildings[buildings.length - 1]; // on considère que le dernier bâtiment est le plus haut jusqu'à présent
  
  // on parcourt les bâtiments de la droite vers la gauche
  for (let i = buildings.length - 2; i >= 0; i--) {
    if (buildings[i] > maxHeight) {
      // si le bâtiment est plus haut que le plus haut jusqu'à présent, il a une vue sur le coucher de soleil
      count++;
      maxHeight = buildings[i];
    }
  }
  
  return count;
}

/*
Exercice 1
Résous le sujet 1 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées
*/
function hasSumToK(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        return true;
      }
    }
  }
  return false;
}

// Exemple d'utilisation :
console.log(hasSumToK([10, 15, 3, 7], 17)); // Output: true
console.log(hasSumToK([1, 8, 10, 21], 19)); // Output: false

/*
2.3.2. Exercice 2
Résous le sujet 2 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.
*/
function nbBatimentsAvecVue(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let hasView = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        hasView = false;
        break;
      }
    }
    if (hasView) {
      count++;
    }
  }
  return count;
}
/*
2.3.3. Exercice 3
Résous le sujet 1 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).
*/
function hasSumToK(numbers, k) {
  const hashTable = {};

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    const complement = k - currentNumber;

    if (hashTable[complement]) {
      return true;
    }

    hashTable[currentNumber] = true;
  }

  return false;
}


/*
2.3.4. Exercice 4
Résous le sujet 2 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).
*/
function nombreImmeublesAvecVue(listeHauteurs) {
  let hauteurMax = 0;
  let nombreImmeublesAvecVue = 0;

  for (let i = listeHauteurs.length - 1; i >= 0; i--) {
    if (listeHauteurs[i] > hauteurMax) {
      hauteurMax = listeHauteurs[i];
      nombreImmeublesAvecVue++;
    }
  }

  return nombreImmeublesAvecVue;
}

/*
2.3.5. Exercice 5
Résous le sujet 1 en ne faisant qu'un seul passage sur ta liste.

Si tu réussis cet exercice, sache qu'il a été posé en entretien par Google. Tu peux postuler à Google. La classe, non ?
*/
function hasSum(nums, k) {
  const numsSet = new Set(); // On utilise un Set pour stocker les nombres déjà parcourus
  for (let i = 0; i < nums.length; i++) {
    const complement = k - nums[i]; // On calcule le complément du nombre courant par rapport à k
    if (numsSet.has(complement)) { // Si le complément est dans le Set, on a trouvé une paire de nombres ayant pour somme k
      return true;
    }
    numsSet.add(nums[i]); // Sinon, on ajoute le nombre courant au Set
  }
  return false; // Si on n'a pas trouvé de paire de nombres ayant pour somme k, on retourne false
}

/*
2.3.6. Exercice 6
Résous le sujet 2 en ne faisant qu'un seul passage sur ta liste.

Si tu réussis cet exercice, sache qu'il a été posé en entretien par Mailchimp. Tu peux postuler à Mailchimp. La classe, non
*/
function countBuildingsWithSunsetView(buildingHeights) {
  let count = 0;
  let max_height = 0;

  for (let i = buildingHeights.length - 1; i >= 0; i--) {
    if (buildingHeights[i] > max_height) {
      max_height = buildingHeights[i];
      count++;
    }
  }

  return count;
}

console.log(countBuildingsWithSunsetView([3, 7, 8, 3, 6, 1])); // Output: 3
console.log(countBuildingsWithSunsetView([1, 4, 5, 8])); // Output: 1

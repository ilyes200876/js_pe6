/*
// EXO 1

// Ecrire une fonction qui prend un nombre 
// et retourne "pair" ou "impair"

// REPONSE EXO 1

// TODO : créer ici la fonction estPair()

function estPair(nbr){
  if (nbr % 2 == 0){
    return "pair";
  }else{
    return "impair";
  }
}

// v2 (opérateur ternaire)
function estPair(nb){
  return (nb % 2 == 0)? "pair":"impair";
}

console.log(estPair(18)); // pair
console.log(estPair(17)); // impair

// v3 (retourne true ou false)
function estPair(nb){
  // return (nb % 2 == 0)? true:false;
  return nb % 2 == 0; // == === != < > <= >=
}
console.log(estPair(18)); // true
console.log(estPair(17)); // false

EXO 2
// EXO 2 - Ecrire une fonction qui prend 3 entiers et retourne le plus grand

// solution 1 exo 2
function max(nb1, nb2, nb3){
  if ((nb2 <= nb3) && (nb1 <= nb3)){
    return nb3;
    }
  if ((nb1 <= nb2) && (nb2 <= nb3)){
    return nb2;
  }
  if ((nb1 >= nb2) && (nb1 >= nb3 )){
    return nb1;
  }

}
  

let nbMax = max(4,2,3);
console.log(nbMax); // 4

// solution 2 ex 2
function max(a,b,c){
  let nbMax=a;
  if(nbMax<b) nbMax = b;
  if(nbMax<c) nbMax = c;
  return nbMax;
}
console.log(max(1,2,3)); // 3
console.log(max(1,3,2)); // 3
console.log(max(3,2,1)); // 3





// EXO 3 Ecrire une fonction qui prend des heures, minutes, et secondes 
// en paramètres, et retourne le nombre total de secondes.

// REPONSE
// V1
function transformerEnSecondes(h, min, s){
  let resultat;
  resultat = h * 3600 + min * 60 + s
  return resultat
}

// v2
function convert2seconds(heures,minutes,secondes){
  return heures * 3600 + minutes * 60 + secondes;
}

console.log(transformerEnSecondes(3,40,52));





// EXO 4 - créer une fonction calculerAireCercle() qui prend un rayon en paramètre 
// et qui affiche en console l'aire du cercle correspondant (Aire d'un cercle = 3.14 x Rayon x Rayon)

function calculerAireCercle(radius){
  console.log(3.14 * radius * radius);
}

calculerAireCercle(3);




// EXO 5 : Ecrire une fonction qui prend un certain nombre de vaches et d'oiseaux, 
// et retourne leur nombre de pattes.


// REPONSE
function calculNombrePattes(nbv, nbo){
  return (nbv*4 + nbo * 2);
}

console.log(calculNombrePattes(4, 3));





// EXO 6 - Ecrire une fonction qui prend une base et une hauteur de triangle en paramètre, 
// et retourne sa surface (base x hauteur / 2)

// REPONSE

function getTriangleSurface(base, hauteur){
  return base * hauteur / 2;
}

console.log(getTriangleSurface(4,6));





// EXO 7 - Ecrire une fonction qui renvoie TRUE si un entier passé est divisible par 5, sinon FALSE. 
// (utiliser par exemple modulo)

//REPONSE

function entierDivisiblePar5(nb){
  // V1
  // return (nb % 5 == 0) ? true : false;
  // V2
  return nb % 5 == 0;
}

console.log(entierDivisiblePar5(30));
console.log(entierDivisiblePar5(32));


*/




// EXO 8 - Ecrire une fonction qui prend 2 chaines et retourne une seule chaine en liant les 2.

// REPONSE

function getStringsTogether(ch1, ch2){
  return ch1 + ch2;
}

console.log(getStringsTogether("abc", "def"));






// EXO 9 - Ecrire une fonction qui prend un nom (XXX) et le genre (H/F), et qui salue en conséquence 
// ( ex : Bonjour Monsieur XXX / Bonjour Madame XXX)

// REPONSE

function saluerUnePersonne(nom, genre){
  let civilite;
  if (genre == "H"){
    civilite = "Monsieur";
  }else if (genre == "F"){
    civilite = "Madame";
  }else{
    civilite = "";
  }
  console.log("Bonjour " + civilite + " " + nom);
}

saluerUnePersonne("Toto", "H");
saluerUnePersonne("Tata", "F");
saluerUnePersonne("Toto", "k");




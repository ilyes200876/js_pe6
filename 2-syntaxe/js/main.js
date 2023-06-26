/*

// pop-up 1 bouton
alert("pop-up 1 bouton");
// console
console.log("hello, world");
console.warn("hello, world");
console.info("hello, world");
console.error("hello, world");

//  CTR + SCHIFT + Q :console.log("ok ", ok);

// ECRASE TOUT POUR AFFICHER LE DERNIER
document.body.innerHTML="Hello, world";
document.body.innerHTML="bienvenue, monde";


// <> document.body.innerHTML="Hello, world" + "bienvenue, monde"
document.body.innerHTML="<h1>Hello, world</h1>";
document.body.innerHTML+="<h2>bienvenue, monde</h2>";


// popup avec deux bouton et confirmation
var confirmation = confirm("confirmer-vous la suppression?");
console.log(confirmation);


// si variable = true
if(confirmation == true){ // == != < > <= >= && (et) || (ou) !true (false)
  alert("Données supprimés");
}else{
  // sinon
  alert("Données non-suprimées");
}


// popup avec champs de texte
// équivaut à :var age = Number(prompt("Quel age avez-vous ?"));
var age = prompt("Quel age avez-vous ?");
age = Number(age);
var age = prompt("Quel age avez-vous ?");
age = Number(age);

// Si age est inférieur à 18
if(age < 18){
  console.log("MINEUR");

// autrement
}else{
  console.log("MAJEUR");
}

// age de l'année suivante
// var ageSuivant = Number(age) + 1;
var ageSuivant = age + 1;
console.log(ageSuivant);



// orérateur de calculs
var i = 0;
// equivaut : i++ (--) i+=1 (-= += *= /=)
i = i + 1; // + - * / %

// Affiche i (1) et après incrimente (1   2)
console.log(i++);
console.log(i);
// Incrimente et apès affiche i (3)  (3    3)
console.log(++i);
console.log(i);


// Les variables
// var
var nom = "toto";
var nom = "tata";
console.log(nom); // tata
// let
let nom = "toto";
let nom = "tata";
console.log(nom); // erreur

let nom = "toto";
nom = "tata";
console.log(nom); // tata

if(true){
  // var nom = "toto";   // portée globale
  let nom = "toto";      // portée locale
}
console.log(nom);

// const
const nom = "toto";
const nom = "tata";
console.log(nom); // erreur

const nom = "toto";
nom = "tata";
console.log(nom); // erreur

const nom = "toto";
console.log(nom); // toto
if(true){
  const nom ="tata";
  console.log(nom); // tata
}
console.log(nom); //toto       // toto tata toto

// var : redéclaration possible, réaffectation possible, portée globale sauf si déclarée dans une fonction
// let :  redéclaration impossible, réaffectation possible, portée locale aux 1eres accolades où elle est déclarée
// CONST : redéclaration impossible, réaffectation impossible, portée locale aux 1eres accolades où elle est déclarée





// concatenation
let nom = "toto";

// console.log("bonjour " + nom);

// let saltation = "Bonjour" + nom // V1

// let salutation = "Bonjour";
// salutation += nom;  // V2

let salutation = ` Bonjour ${nom}`; // V3 (template strings -ES6) `= altGr+7

console.log(salutation);





// CONDITIONS IF / ELSE

let age = 21;

// v1
// if(age >= 18){
//     console.log("Accès autorisé");
// }else{
  //     console.log("Accès non-autorisé");
  // }

// v2
// if(age >= 18){
//     var message = "Accès autorisé";
// }else{
//     var message = "Accès non-autorisé";
// }

// v3 sans accolades car seule instruction
// if(age >= 18)
//     var message = "Accès autorisé";
// else
//     var message = "Accès non-autorisé";

// v3 (opérateur ternaire)
// pratique dans le cas où on souhaite initialiser une variable à 2 valeurs possibles
var message = (age >= 18) ? "Accès autorisé" : "Accès non-autorisé";

console.log(message);

// un nombre positif ou négatif passé à if est converti en true, mais 0 est converti en false
// un undefined passé à un if est converti en false
// une chaine contenant au moins 1 caractère est convertie en vrai, sinon c'est converti en false

// si il y a des erreurs
if(1){
  // si l'expression du if est évaluée à true
  console.log("VRAI");
}else{
  // si l'expression du if est évaluée à false
  console.log("FAUX");
}



// numéro de jour de semaine
let numJour = 6;

switch(numJour){
  case 1:
    var jour = "lundi";
    break;
  case 2:
    var jour = "mardi";
    break;
  case 3:
    var jour = "mercredi";
    break;
  case 4:
    var jour = "jeudi";
    break;
  case 5:
    var jour = "vendredi";
    break;
  default:
    var jour = "week-end";
    break;
}

console.log(jour);





// BOUCLE FOR (pour i allant de 1 à 5 par pas de 1)
for(var i=1 ; i<=5 ; i++){
  console.log(i);
}

// BOUCLE WHILE (tant que i <= 5)
var i=1;
while(i<=5){
  console.log(i);
  i++;
}

// DO WHILE
var i=1;
do{
  console.log(i);
  i++;
} while(i<=5)

for(var i=1 ; i<=5 ; i++){
  // if(i==2) break; // break = sortie de la boucle
  if(i==2) continue; // continue = force l'itération suivante (prochaine boucle)
  console.log(i);
}




// FONCTION SANS VALEUR DE RETOUR
// déclaration
function saluer(){
  console.log("Bonjour");
}
// utilisation (appel)
saluer();

// FONCTION AVEC VALEUR DE RETOUR
// déclaration
function getSalutation(){
  return "Bonjour";
}
// utilisation (appel)
// let salutation = getSalutation();
// console.log(salutation);         // ou bien directement : console.log(getSalutation());


// PASSAGE DE PARAMETRES / ARGUMENTS ET VALEURS PAR DEFAUT

// déclaration
function saluer(prenom,nom=""){                // valeur par défaut en ES6
  // if(nom == undefined) nom="";            // valeur par défaut en ES5
  console.log("Bonjour "+prenom+" "+nom);
}

// utilisation (appel)
saluer("Ali","HH");
saluer("Ilyes");


// PORTEE DES VARIABLES PAR RAPPORT AUX FONCTIONS
// si une variable (comme maVariableGlobale) est définie dans le prog. principal
// elle est également connue de chaque fonction
// si une variable (comme maVariableDeFonction) est définie dans une fonction
// elle est locale à celle-ci et non-connue du prog. principal

function maFonction(){
  console.log(maVariableGlobale);         // 1
  maVariableGlobaleDeFonction = 1;        // variable globale (à éviter, mauvaise pratique)
  var maVariableDeFonction = 1;           // variable locale à la fonction
  // console.log(maVariableDeFonction);   // 1
}

let maVariableGlobale = 1;
maFonction();
console.log(maVariableGlobale);             // 1
console.log(maVariableGlobaleDeFonction);   // 1
console.log(maVariableDeFonction);          // erreur


// FONCTIONS ANONYMES et FONCTIONS FLECHEES

function saluer(prenom){                  // v1 (fonction normale / nommée)
  console.log("Bonjour "+prenom); 
} 

let saluer = function(prenom){            // v2 (fonction anonyme)
  console.log("Bonjour "+prenom);
}

let saluer = (prenom) => {                // v3 (fonction fléchée - ES6)
  console.log("Bonjour "+prenom);
}

saluer("Yanis");




*/













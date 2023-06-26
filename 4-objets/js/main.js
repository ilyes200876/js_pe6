/*
function court(){
  console.log("VITE VITE");
}

// DECLARATION D'OBJET V1
let superman = new Object();


// propriétés / attributs / carracteristiques / variables liées à un objet
superman.prenom= "Clark";
superman.nom = "Kent";
superman.genre = "Homme";


// méthodes / actions /fonctions liées à un objet
superman.voler = function(){
  console.log("VERS L'INFINIIIIIIII");
};
superman.courir = court;

// DECLARATION D'OBJET V2 (JSON : JavaScript Object Notation)
let superman = {
  prenom:"Clark",
  nom:"kent",
  genre:"Homme",
  voler:function(){
    console.log("VERS L'INFINIIIIII")
  },
  courir: court // courir:courir équivaut à courir
};


// DECLARATION D'OBJET V3 (avec une fonction)

//  usine à Kryptonien
function Kryptonien(prenom_, nom_, genre_){
  this.prenom = prenom_;
  this.nom = nom_;
  this.genre = genre_;
  this.voler = function(){
    console.log("VERS L'INFINIIIIIIII");
  };
  this.courir = court;
}
// on instancie superman de type Superman et superman2(on passe comande à l'usine)
let superman = new Kryptonien("Clark", "Kent", "HOMME");
let superman2 = new Kryptonien("Kara", "Danvers", "Femme");



// DECLARATION D'OBJET V4 (avec class - ES6)
class Extraterrestre{
  constructor(planete_, ville_){
    this.planete = planete_;
    this.ville = ville_
  }
}


class Kryptonien extends Extraterrestre{
  constructor(prenom_, nom_, genre_){
    super("Kryppton", "Kryptonville");
    this.prenom = prenom_;
    this.nom = nom_;
    this.genre = genre_;
  }
  voler(){
    console.log("VERS L'INFINIIIIIIII");
  }
  courir(){
    console.log("VITE VITE");
  }
}

let superman = new Kryptonien("Clark", "Kent", "HOMME");
let superman2 = new Kryptonien("Kara", "Danvers", "Femme");




// UTILISATION
console.log(superman);
console.log(superman2); // à activer que pour V3 et V4
console.log(superman.prenom);
console.log(`Il s'agit de ${superman.prenom}`);
console.log("il s'agit de " + superman.prenom);
console.log(`Il s'agit de ${superman.prenom} ${superman.nom}`);
console.log("il s'agit de " + superman.prenom + " " + superman.nom);
superman.voler();
superman.courir();





*/
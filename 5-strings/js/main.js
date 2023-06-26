/* 
let nom = "Toto";
console.log(nom);
console.log(typeof nom);



let nom = new String("Toto");
console.log(nom);
console.log(nom.length);
console.log(nom.charAt(0));
console.log(nom.toUpperCase());
console.log(nom.toLowerCase());
console.log(nom.replace("o", "a"));


console.log(Number.parseInt(1.85959));
console.log(Number.parseInt("1.85959"));
let n= 3.14 // équivalent à let n = new String(3.14);
console.log(n);
console.log(n.toExponential());




// Exo 1
// Ecrire une fonction qui prend deux chaînes str1 et str2 et retourne
//  TRUE si elles ont autant de caractères, sinon FALSE.

// REPONSE EXO 1
function getStringCompared(ch1, ch2){
  return ch1.length == ch2.length;
}

console.log(getStringCompared("abcd","aoie")); // true
console.log(getStringCompared("abcd","aie"));  //false


//  EXO 2
// Ecrire une fonction qui renvoie TRUE 
// si une chaîne contient des espaces, sinon FALSE.

// Reonse

function getStringSpace(ch){
  let i;
  for (i = 0; i < ch.length; i++){
    if (ch[i] == " "){
      return true;
    }
  }
  return false;
   // let espaceDetecte = false;
    // for(let i=0;i<=chaine.length-1;i++){
    //     if(chaine.charAt(i) == " "){
    //         espaceDetecte=true;
    //     }
    // }
    // return espaceDetecte;                // v2

    // return chaine.includes(" ");         // v3
    
    // if(chaine.indexOf(" ") == -1){
      //     return false;
    // }else{
    //     return true;
    // }                                    // v4
    
    // return chaine.indexOf(" ") != -1;       // v5
  
  }

console.log(getStringSpace("abchvjf"));  // false
console.log(getStringSpace("abch vjf")); // true

// EXO 3
// Ecrire une fonction qui renvoie le nombre de mots d'une chaine.

// REPONSE EXO 3
// V1
// function getWordsNumber(ch){
//   return (ch.split(" ").length);
// }
// V2
function getWordsNumber(ch){
  let i;
  let k =1;
  for (i = 0; i< ch.length; i++){
    if (ch[i] == " "){
      k = k + 1;
    }
  }
  return k;
//   let nbEspaces = 0;  // V2
//             chaine = chaine.trimStart().trimEnd();
//             for(let i=0;i<=chaine.length-1;i++){
//                 if(chaine.charAt(i) == " "){
//                     nbEspaces++;
//                 }
//             }
//             return nbEspaces+1; 
}


console.log(getWordsNumber("sqd qsd qsddds dfdzszsf"));  // 4
console.log(getWordsNumber("AZDAZD DAZ"));               // 2

// EXO 4
//  Ecrire une fonction qui prend une chaine et retourne la chaine inversée.

function getInverseString(ch){
  let i;
  let ch1 = "";
  for (i= (ch.length)-1; i>=0; i--){
    ch1 = ch1 + ch[i];
    // V2/ chaineInversee += chaine.charAt(i); V2
  }
  return ch1;
}

console.log(getInverseString("abcdef ghij"));     // jihg fedcba

// EXO 5
//  Écrire une fonction qui renvoie TRUE si une chaine est un palindrome. 
// Ex : BOB // true car se lit aussi à l'envers

// REPONSE EXO 5

function getPanadrome(ch){
  let i;
  let k = 1;
  for(i =0; i<ch.length; i++){
    if (ch[i] == ch[ch.length - k]){
      k = k+1;
    }
  }
  return k == ch.length + 1;
}

console.log(getPanadrome("BOB"));                        // true
console.log(getPanadrome("ahdkfvaaa  zzzsjsssjd"));      // false
console.log(getPanadrome("kfc cfk"));                    // true
console.log(getPanadrome("kfc cfk "));                   // false
console.log(getPanadrome(" kfc cfk "));                  // true





// EXO 1
// Ecrire une fonction qui prend un objet comme argument et renvoie une chaîne
// qui représente une personne. Les attributs de la personne devront être 
// extraits des trois propriétés de l’objet: nom / prenom / age. La chaîne doit 
// avoir le format suivant: PRENOM NOM a AGE ans.
// ex : afficherPersonne({nom:"Dupont",prenom:"Thomas", age:"25"}) 
// retourne Thomas Dupont a 25 ans.


// reponse

//My version 
function AfficherPersonne( nom_, prenom_, age_){
  this.nom = nom_;
  this.prenom = prenom_;
  this.age = age_;
  let reponse = this.prenom + " " + this.nom + " a " + this.age + " ans";
  return (reponse);
}

let personne = new AfficherPersonne("Dupont", "Thomas", "25")
let personne2 =new AfficherPersonne("Attia", "Ilyes", "33");
console.log(personne);
console.log(personne2);
console.log(AfficherPersonne("Dupont", "Thomas", "25"));
console.log(AfficherPersonne("Attia", "Ilyes", "33"));

// V2
// a
// class Personne{
  //     constructor(prenom_,nom_,age_){
    //         this.prenom=prenom_;
    //         this.nom=nom_;
    //         this.age=age_;
    //     }
    // }
    // let personne = new Personne("Thomas","Dupont","25");
    
    // b
    // function Personne(prenom_,nom_,age_){
//     this.prenom=prenom_;
//     this.nom=nom_;
//     this.age=age_;
// }
// let personne = new Personne("Thomas","Dupont","25");

// c
// let personne = {nom:"Dupont",prenom:"Thomas", age:"25"};

// let phrase = afficherPersonne(personne);
// console.log(phrase);

// function afficherPersonne(personne){
//     return `${personne.prenom} ${personne.nom} a ${personne.age} ans`;
// }


// EXO 2 
// Ecrire une fonction qui convertit du snake_case en camelCase. 
// Exemple : gros_serpent -> grosSerpent


// reponse

// My version
function convertToCamelCase(ch){
  let ch1 = "";
  
  let i;
  for (i = 0; i < ch.length; i++){
    if (ch[i] == "_"){
      ch1 = ch1 + ch[i + 1].toLocaleUpperCase();
      i = i + 1;
    }else{
      ch1 = ch1 + ch[i];
      
    }
  }
  console.log(ch1);
}

// V2
// let mot = "bonjour_tout_le_monde";
// console.log(conversionCamel(mot)); // bonjourToutLeMonde

// function conversionCamel(motSnake){
  //     let motCamel="";
//     let underscoreDetected=false;
//     for(let i=0;i<motSnake.length;i++){
//         let lettre = motSnake.charAt(i);
//         if(lettre != "_"){
  //             if(underscoreDetected){
    //                 motCamel += lettre.toUpperCase();
    //                 underscoreDetected=false;
    //             }else{
//                 motCamel += lettre;
//             }
//         }else{
  //             underscoreDetected=true;
  //         }
  //     }
  //     return motCamel;
  // }
  
  convertToCamelCase("gros_serpent");    // grosSerpent
convertToCamelCase("gros_serpent_dangereux");    // grosSerpentDangereux


// EXO 3
// Écrire une fonction qui renvoie l’extension d'un nom de fichier passé en paramètre.
//  Exemple : fichier.txt // retourne txt

// reponse


//My version 
function getExtension(ch){
  let ch1 = "";
  let ch2 = "";
  let i;
  let k = 0;
  for (i = ch.length - 1; i >= 0; i--){
    if (ch[i] == "."){
      break;
    }else{
      ch1 = ch1 + ch[i];
      k++;
    }
  }
  if (k == ch.length){
    console.log("format incorrect.");
    return false;
  }
  for (i = ch1.length - 1; i >= 0 ; i--){
    ch2 = ch2 + ch1[i];
  }
  return ch2;
}

// v2
// let fichier = "monfichier.txt";
// console.log(getExtension(fichier)); // txt

// function getExtension(nomFichier){
//     let extension = "";
//     let positionPoint = nomFichier.indexOf(".");
//     extension = nomFichier.slice(positionPoint+1);
//     return extension;
// }

console.log(getExtension("mlklml.html"));  // html
console.log(getExtension("mlklmlhtml"));  // format incorrect / false
console.log(getExtension("mlklml.lmfao"));  // lmfao

*/












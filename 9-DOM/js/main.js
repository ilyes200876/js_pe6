
/*// SELECTIONS DE NOEUDS
// l'objectif est de récupérer un ou plusieurs noeuds en vue
// de pouvoir les lire ou les modifier


// CAS 1 : sélection d'un seul noeud
// let n = document.getElementById("t1");       // par id
// let n = document.getElementById("#t1");       // par id
// let n = document.getElementById("h1");       // par balise
// let n = document.getElementById(".titre");       // par classre
// console.log(n);

// CAS 2 : sélection d'une liste de noeuds (HTMLCollection / NodeList)
// let liste= document.getElementsByTagName("h1"); 
let liste = document.querySelectorAll("h1"); // ici par balise
console.log(liste);
// console.log(liste[0]);
// console.log("t1");
liste.forEach(function(n, i){
    console.log(i,n);
})

// CAS 3:
let n = document.querySelector("#t1"); // ici par classe
console.log(n)

*/

// LECTURE ET MODIFICATION DE NOEUDS

// sélection préalable
let n = document.querySelector("#t1");
console.log(n);

// au niveau du contenu
console.log(n.innerHTML);     // lecture
n.innerHTML = "Hello !";      // écriture


//  au niveau des id
console.log(n.id);           // lecture
n.id = "titre";              // écriture

//  au niveau des classes

console.log(n.className);      // lecture sous forme de chaine
console.log(n.classList);      // lecture sous forme de chaine
n.className = "titre";         // écriture sous forme de chaine
n.classList.add("gros");       // ajout au tableau de classes
n.classList.remove("gros");    // suppression du tableau de classes
n.classList.toggle("gros");    // ajout/ suppression du tableau de classes


// au niveau des style
// n.style.cssText = "color: blue; background-color: yellow";   // écriture des css
// ou
n.style.color = "blue";                  // écriture de la propriété color
n.style.backgroundColor = "yellow";      // écriture de la propriété background-color
console.log(n.style.color);              // lecture de la propriété color
const cssObj = window.getComputedStyle(n,null);     // récup. de la valeur d'une prop dans l'absolu
console.log(cssObj.getPropertyValue("display"));    // récup. de la valeur d'une prop dans l'absolu



// au niveau des attributs (hormis id / class / style)

n.setAttribute("title", "infobulle");
console.log(n.getAttribute("title"));








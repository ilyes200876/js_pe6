// timers
// let timer = setInterval(maFonction,1000);   // v1 : appel continu chaque seconde
// setTimeout(maFonction,1000);                // v2 : appel unique au bout d'une seconde
// function maFonction(){}

// window.location
// console.log(window.location);
// console.log(window.location.href);          // lecture de l'URL
// window.location.href = "https://google.fr"; // réécriture de l'URL

// ETAPE 1 : afficher un grand 5 sur la page, dans un conteneur (div par exemple) qui a un id
// ETAPE 2 : en JS, récupérer une référence à ce conteneur avec un querySelector pour pouvoir le modifier
// ETAPE 3 : faire en sorte en JS de réécrire le contenu du conteneur en changeant le 5 en 4
// ETAPE 4 : créer une fonction qui effectue cette modification, et l'appeler
// ETAPE 5 : appeler cette fonction en continu avec un timer
// ETAPE 6 : faire en sorte que l'appel multiple de cette fonction change le nombre en 5 4 3 2 1
// ETAPE 7 : faire une redirection avant d'écrire le 0
let temps = 5;
let compteur = document.getElementById(`timer`);
console.log(compteur)
let timer = setInterval(decrementerSeconds,1000);              

function decrementerSeconds() {
  compteur.innerText = temps;
  temps--;

  if (temps <= 0){
    clearInterval(timer);         // on stoppe le timer
    window.location.href = "https://fr.wikipedia.org/";
  } 
  
}

window.onmousemove = function (e){
  temps = 5
}


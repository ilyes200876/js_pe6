// ETAPE 1 : faire la balle en HTML/CSS, qui est par exemple un div qui contient un input 
// text

// ETAPE 2 : répondez à la question : quand-est ce que l'interface doit être modifiée ?
// déduisez-en l'évènement à écouter et placer cet écouteur

// ETAPE 3 : répondez à la question : qu'est-ce qui doit être modifié dans l'interface ?
// déduisez-en la sélection à faire correspondant à l'élément que vous souhaiterez 
// modifier

// ETAPE 4 : procéder à la modification de l'interface, au moment juste, et grâce à la 
// sélection faite votre but ici est d'afficher une réponse

// ETAPE 5 : faire en sorte que chaque réponse soit aléatoire, par exemple en utilisant
// un tableau et Math.random() et Math.round()

// ETAPE 6 : détection de la touche espace et rechargement de l'interface avec location.
// reload()

let detail = document.querySelector("input");
let tab = ["Absolument, oui", "Peu être", "Je croix pas", "Absolument pas", "continue à rêver"]
let i = Math.round(Math.random()*4);
let h1 = document.querySelector("h1");


window.onkeyup=function changerInterface(e){
  if (e.key == "Enter"){
    detail.classList.add("show");
    detail.setAttribute("placeholder", tab[i]);
    h1.innerHTML = "Votre réponse. Appuyer sur espace pour rejouer";
    h1.style.color = "green";
    window.onkeyup=function interfaceOriginale(e){
      if (e.key == " "){
        location.reload();
      }
    }
  }
}







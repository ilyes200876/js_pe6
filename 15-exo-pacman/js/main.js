// window.onkeyup=function(e){
//   console.log(e.key);
//   if(e.key=="Enter"){
//    document.body.style.background="yellow";
//  }
// }


// ETAPE1 : afficher une image de la chose a déplacer dans le HTML
// ETAPE 2 : détecter l'appui sur la touche flèche droite et déplacer l'image vers la droite
// ETAPE3 : répéter cela pour les 3 autres directions
// ETAPE4 : définir 2 variables globales posX et posY qui représentent la position de l'image, et les faire évoluer en cas d'appui sur les flèches. Utiliser ces 2 variables pour mettre à jour la position de pacman
// ETAPE 5 : réaliser les questions bonus

let positionl = 100;
let positiont = 100;
let echelle = 1;    // 1 / -1
let rotation = 0;   // 0 / -90 / 90

let pacman = document.getElementById('pacman') 
window.onkeydown=function(e){
  if (e.key == 'ArrowRight'){
    positionl += 100;
    if (positionl > window.innerWidth - pacman.width ){
      positionl = window.innerWidth - 100;
    }
    echelle=1;
    rotation=0;
  }
    if (e.key == 'ArrowUp'){
      positiont -= 100;
      if (positiont < 0){
        positiont = 0;
      }
      echelle=1;
      rotation=-90;
    }
    if (e.key == 'ArrowDown'){
      positiont += 100;
      if (positiont > window.innerHeight - pacman.height){
        positiont = window.innerHeight - pacman.height;
      }
      echelle=1;
      rotation=90;
    } 
    if (e.key == 'ArrowLeft'){
      positionl -= 100;
      if (positionl < 0){
        positionl = 0;
      }
      echelle=-1;
      rotation=0;

    }
    if((e.key=="ArrowLeft") || (e.key=="ArrowRight") || (e.key=="ArrowUp") || (e.key=="ArrowDown")){
      majPos();
};


}

// met à jour la position de pacman en utilisant les variables globales positionl et positiont
function majPos(){
pacman.style.left=positionl+"px";
pacman.style.top=positiont+"px";
pacman.style.transform=`scaleX(${echelle}) rotate(${rotation}deg)`;
}
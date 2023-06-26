// // ETAPE 1 
// // Créer un tableau qui contient les 4 chemins d'images

// // ETAPE 2
// // Parcourir le tableau avec une boucle afin d'ajouter lors 
// // de chaque boucle une nouvelle petite image à la page (body)

// let tab = ['./img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'];
// let image;
// let i;

//   for (i = 0; i < tab.length; i++){
//     // V1
//     // document.body.innerHTML+=`<img src="${images[i]}" width='300' onclick="console.log(event)">`;
    
//     // V2
//     let image = document.createElement('IMG');
//     image.src = tab[i];
//     image.setAttribute('width', '200');
//     document.body.appendChild(image);

//   }


// ETAPE 1 : créer une tableau d'images JS listant toutes les images du dossier img récupéré (sauf fond.jpg)
// ETAPE 2 : parcourir ce tableau afin d'afficher chacune des images à la suite dans la page
// ETAPE 3 : préciser en CSS que ces images sont positionnées en absolute afin de pouvoir utiliser left / top par la suite
// ETAPE 4 : ajouter a chacune des image des coordonnées aléatoires (axes X et Y) en leur ajoutant des propriétés CSS left et top
// ETAPE 5 : ajouter en CSS un fond à la page en utilisant l'image fond.jpg fournie

let largeur = 200;
let posX = 200;
let posY = 50;

/*
// V1
let conteneur = document.body;
// let conteneur = document.querySelector("#maDiv");
// let conteneur = document.getElementById("maDiv");
conteneur.innerHTML = `<img src="img/planete1.png" alt="planete 1" style="width:${largeur}px;left:${posX}px;top:${posY}px;">`;

// V2
let newImg = document.createElement("img");     // <img>
newImg.setAttribute("src","img/planete1.png");  // <img src="img/planete1.png">
newImg.setAttribute("alt","planete1 ");         // <img src="img/planete1.png" alt="planete 1">
newImg.style.width=largeur+"px";                // <img src="img/planete1.png" alt="planete 1" style="width:200px">
newImg.style.left=posX+"px";// <img src="img/planete1.png" alt="planete 1" style="width:200px;left:200px">
newImg.style.top=posY+"px"; // <img src="img/planete1.png" alt="planete 1" style="width:200px;left:200px;top:100px;">
conteneur.appendChild(newImg);

// Comment grouper 4 Données pour 4 images

// V1                0                   1                   2                   3
let images = ["img/planete1.png","img/planete2.png","img/planete3.png","img/planete4.png"];
//              0   1   2   3
let largeurs = [100,200,300,400];
let posXs = [500,600,700,800];
let posYs = [900,1000,1200,1300];

images.forEach(function(image,i){
    console.log(image,largeurs[i],posXs[i],posYs[i]);
});
*/

// V2
function genererImage(chemin,largeur,posX,posY){
  let newImg = document.createElement("img");     // <img>
  newImg.setAttribute("src",chemin);  // <img src="img/planete1.png">
  newImg.setAttribute("alt","image");         // <img src="img/planete1.png" alt="planete 1">
  newImg.style.width=largeur+"px";                // <img src="img/planete1.png" alt="planete 1" style="width:200px">
  newImg.style.left=posX+"px";// <img src="img/planete1.png" alt="planete 1" style="width:200px;left:200px">
  newImg.style.top=posY+"px"; // <img src="img/planete1.png" alt="planete 1" style="width:200px;left:200px;top:100px;">
  document.body.appendChild(newImg);
  
}

//                  0                   1                   2                   3
/*
let images = ["img/planete1.png","img/planete2.png","img/planete3.png","img/planete4.png"];
//              0   1   2   3
let largeurs = [100,200,300,400];
let posXs = [500,600,700,800];
let posYs = [900,1000,1200,1300];

images.forEach(function(image,i){
  console.log(image,largeurs[i],posXs[i],posYs[i]);
});



// v3.1
let image0 = {chemin:"img/planete1.png",largeur:100,posX:500,posY:900};
let image1 = {chemin:"img/planete2.png",largeur:200,posX:600,posY:1000};
let image2 = {chemin:"img/planete3.png",largeur:300,posX:700,posY:1200};
let image3 = {chemin:"img/planete4.png",largeur:400,posX:800,posY:1300};
let images = [image0,image1,image2,image3];
images.forEach(function(image,i){
    console.log(image.chemin,image.largeur,image.posX,image.posY);
});
*/

// v3.2
let images = [
    {chemin:"img/planete1.png",largeur:getRandomNumber(100,500),posX:500,posY:900},
    {chemin:"img/planete2.png",largeur:200,posX:600,posY:300},
    {chemin:"img/planete3.png",largeur:300,posX:700,posY:400},
    {chemin:"img/planete4.png",largeur:400,posX:800,posY:600}
];
images.forEach(function(image,i){
  console.log(image.chemin,image.largeur,image.posX,image.posY);
  genererImage(image.chemin,image.largeur,image.posX,image.posY);
});

function getRandomNumber(min,max){
  return Math.max(min,Math.round(Math.random()*max));
}

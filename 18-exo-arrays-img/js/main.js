// ETAPE 1 
// Créer un tableau qui contient les 4 chemins d'images

// ETAPE 2
// Parcourir le tableau avec une boucle afin d'ajouter lors 
// de chaque boucle une nouvelle petite image à la page (body)

let tab = ['./img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'];
let image;
let i;

  for (i = 0; i < tab.length; i++){
    // V1
    // document.body.innerHTML+=`<img src="${images[i]}" width='300' onclick="console.log(event)">`;
    
    // V2
    let image = document.createElement('IMG');
    image.src = tab[i];
    image.setAttribute('width', '200');
    document.body.appendChild(image);

  }


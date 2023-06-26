/*
// Math.floor -> arrondi au dessous
// Math.round() -> arrondi au plus proche
// Math.ceil() ->arrondi au dessus

console.log(Math.round(3.14));      // 3
console.log(Math.pow(2,2));         // 2² : 4
console.log(Math.max(1,2,3,4,5));   // 5
let couleurs = ["cyan", "yellow", "magenta", "lime"];
let i = Math.round(Math.random()*3); // 0+3 <= i <1* 3
document.body.style.backgroundColor = couleurs[i];
// console.log(i);
*/
function maj(){
  let r = getRandomNumber(0,255);
  let g = getRandomNumber(0,255);
  let b = getRandomNumber(0,255);
  let tableau = ["Il faut prendre le taureau par les cornes",
      "Quand les brebis enragent, elles sont pires que les loups",
      "Donner, c'est donner ; reprendre, c'est voler",
      "Faute avouée est à moitié pardonnée",
      "Il n'y a que les imbéciles qui ne changent pas d'avis"]
// document.body.style.backgroundColor = couleurs[i];
  document.body.style.background = `rgb(${r},${g},${b})`;
  let i = Math.round(Math.random()*4);
  document.body.innerHTML = `<h1> ${tableau[i]}</h1>`
  if ((r < 150) && (g < 150) && (b < 150)){
    document.body.style.color = `#FFF`;
  }
}

function getRandomNumber(min,max){
    return Math.max(min,Math.round(Math.random()*max));
}

let timer = setInterval(maj,3000);
/*
// V1
function clic(balise, couleur){
  console.log(balise);
  balise.style.color = couleur;
}

// V2
function clicE(e,couleur){
  console.log(e);
  let balise = e.target;
  balise.style.color = couleur;

}

// V3
let h2 = document.querySelector("h2");

// V3.1
// h2.onclick = clicE2;
// function clicE2(e){
//   console.log(e);
//   let balise = e.target;
//   balise.style.color = "blue";

// }

// V3.2 (fonction anonyme)
h2.onclick = function (e){
  console.log(e);
  let balise = e.target;
  balise.style.color = "blue";

}

// V3.3 (fonction fléchée)
h2.onclick = (e) => {
  console.log(e);
  let balise = e.target;
  balise.style.color = "blue";

}

//  V3.4
h2.addEventListener("clic",clicE2);
function clicE2(e){
  console.log(e);
  let balise = e.target;
  balise.style.color = "blue";

}
*/

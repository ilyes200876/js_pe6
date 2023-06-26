// $.post("back.php",{langue:"EN"},function(response){
//   console.log(response)
// });

/*
$.get("back.php",{langue:"EN"},function(response){
  let objet = JSON.parse(response)
  console.log(response,objet);
  console.log(objet.bonjour);
  console.log(objet.aurevoir);
});

// TEST DE LA BOARD API
let url = "https://www.boredapi.com/api/activity";
$.get(url,null,function(response){
  document.body.innerHTML = `<h1>${response.activity}</h1>`
});
*/

// TEST DE LA POKEAPI
function afficherPokemon(nom){
  let url = "https://pokeapi.co/api/v2/pokemon/"+nom;
  $.get(url,null,function(response){
      console.log(response);
      console.log(response.sprites.front_default);
      document.body.innerHTML+=`<img src="${response.sprites.front_default}">`;
  });
}

let url = "https://pokeapi.co/api/v2/pokemon/";
$.get(url,null,function(response){
  console.log(response);
  response.results.forEach(function(pokemon){
      afficherPokemon(pokemon.name);
  });
});
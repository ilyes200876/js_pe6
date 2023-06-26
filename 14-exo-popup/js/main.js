function affichePopup(id){
  let popup = document.getElementById(id);
  let b = document.getElementsByClassName("popupbackground");
  popup.classList.add("show");
  b[0].classList.add("show");
}

function cacherPopup(id){
  let popup = document.getElementById(id);
  let b = document.getElementsByClassName("popupbackground");
  popup.classList.remove("show");
  b[0].classList.remove("show");
}
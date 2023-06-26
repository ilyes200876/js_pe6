window.onresize = majFond;
window.onload = majFond; 
function majFond(e){
  // DE 0 à 500px -> lime
  // DE 501 à 900px -> orange
  // DEs 901px -> blanc
  
  if (window.innerWidth <= 500){
    document.body.style.backgroundColor = "lime";
  } else if (window.innerWidth < 900){
      document.body.style.backgroundColor = "orange";
    }else{
      document.body.style.backgroundColor = "white";
    }
};
// INITIALISER LA DATE ACTUELLE (CREER OBJET DATE)

// My version
function monHorloge(){ 
  
  let d = new Date();
  let heures = d.getHours();
  let minutes = d.getMinutes();
  let secondes = d.getSeconds();
  let blocHeures = document.querySelector(`#h${heures}`);
  blocHeures.innerHTML = heures;
  blocHeures.className = "bloc hour_actif";
  let blocMinutes = document.querySelector(`#m${minutes}`);
  blocMinutes.innerHTML = minutes;
  blocMinutes.className = "bloc minute_actif";
  let blocSecondes = document.querySelector(`#s${secondes}`);
  blocSecondes.innerHTML = secondes;
  blocSecondes.className = "bloc second_actif";
  let blocHeures1 = document.querySelector(`#h${heures-1}`);
  let blocMinutes1 = document.querySelector(`#m${minutes-1}`);
  let blocSecondes1;
  if(secondes == 0){
    blocSecondes1 = document.querySelector(`#s59`);
    blocSecondes1.classList.remove("second_actif");
  }else{
    blocSecondes1 = document.querySelector(`#s${secondes-1}`);
    blocSecondes1.classList.remove("second_actif");
  }
  if(minutes == 0){
    blocMinutes1 = document.querySelector(`#m59`);
    blocMinutes1.classList.remove("minute_actif");
  }else{
    blocMinutes1 = document.querySelector(`#m${minutes-1}`);
    blocMinutes1.classList.remove("minute_actif");
  }
  if(heures == 0){
    blocHeures1 = document.querySelector(`#h23`);
    blocHeures1.classList.remove("heure_actif");
  }else{
    blocHeures1 = document.querySelector(`#h${heures-1}`);
    blocHeures1.classList.remove("heure_actif");
  }
    blocHeures1.innerHTML = "";

    blocMinutes1.innerHTML = "";

    blocSecondes1.innerHTML = "";
  
  
}
let timer = setInterval(monHorloge,1000);

monHorloge();

// RECUPIRER LES HEURES ET LES MINUTES DANS 2 VARIABLES



// SELECTIONNER LE BLOC HEURE CORRESPONDANT A L'EURE ACTUELLE PAR SON
// ID ET LE MODIFEREN AFFICHANT SON NUMERO D'HEURE


// IDEM AVEC LES MINUTES

// METTRE EN PLACE UN TIMER QUI MET A JOUR L'INTERFACE CHAQUE MINUTE

// FAIRE EN SORTE DE DESACTIVER LES ANCIENS BLOCS A CHAQUE NOUVELLE MINUTE

// EVENTUELLEMENT AJOUTER DES SECONDES

// EVENTUELLEMENT RENDRE CA PLUS JOLI

// V2

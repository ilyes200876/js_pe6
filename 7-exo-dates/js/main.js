
/*// écrire sur la page
// let nom = "World";
// document.body.innerHTML = `Hello ${nom}`;

// objet date
let d = new Date();
console.log(d);
console.log(d.getFullYear());

// timers
let i = 0;
function maFonction(){
      console.log("MA FONCTION "+i);
      if(i==5) clearInterval(timer);  // stoppe le timer
      i++;
  }
  maFonction();                    // appel instantané
  setTimeout(maFonction,1000);     // appel unique dans 1s
  let timer = setInterval(maFonction,1000);   // appel continu chaque seconde
*/


function majHorloge(){
  // EXO TIMER
  /// ECRIRE LA DATE v1
  // let d = new Date();
  // let jour = imposer2chiffres(d.getDate());
  // let mois = imposer2chiffres(d.getMonth()+1);
  // let annee = d.getFullYear();
  // let heures = imposer2chiffres(d.getHours());
  // let minutes = imposer2chiffres(d.getMinutes());
  // let secondes = imposer2chiffres(d.getSeconds());
  // document.body.innerHTML = `  <h2>${jour}/${mois}/${annee}</h2>
  //                              <h1>${heures}:${minutes}:${secondes}</h1>`;

  // ECRIRE LA DATE v2
    let d = new Date();
    document.body.innerHTML = ` <div id="horloge">
                            <h2>${d.toLocaleDateString()}</h2>
                            <h1>${d.toLocaleTimeString()}</h1>
                            </div>`;
}
// ANIMER LA DATE
let timer = setInterval(majHorloge,1000);

// GERER LES 0
function imposer2chiffres(nb){
    if(nb<10) return "0"+nb;
    else return nb;
}
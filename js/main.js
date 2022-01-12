/* On crée une constante nommée "livres". Cette constante est un tableau ("array") qui contient des objets 
  Ici par exemple, les objets de l'array "livres" sont :
    -> grandLivreJavascript / htmlPlusVite / windowsNT / kitRessource / formationJava / creerSiteWeb
  A l'intérieur de chaque objet, on entre un index + une valeur :
    -> Exemple : Dans l'objet grandLivreJavascript, l'index[0] est nommé "titre" et sa valeur correspond à
                 "Le grand livre du JavaScript".
*/
const books = [
  (grandLivreJavascript = {
    titre: "Le grand livre du JavaScript",
    reference: "IB454681",
    prixUnit: 25,
  }),
  (htmlPlusVite = {
    titre: "HTML encore plus vite",
    reference: "IB454668",
    prixUnit: 35,
  }),
  (windowsNT = {
    titre: "Windows NT 4.0",
    reference: "IB454688",
    prixUnit: 15,
  }),
  (kitRessource = {
    titre: "Le Kit de Ressource technique de NT",
    reference: "IB454622",
    prixUnit: 32,
  }),
  (formationJava = {
    titre: "Formation Java",
    reference: "IB454688",
    prixUnit: 42,
  }),
  (creerSiteWeb = {
    titre: "Comment créer son site Web",
    reference: "IB454673",
    prixUnit: 31,
  }),
 ];

// Pour accéder au tableau "livres" puis à l'index[1] "htmlPlusVite" et enfin à la valeur de l'index[0] "titre" :
//console.log(livres[1].titre); Résultat obtenu : HTML encore plus vite

// Pour accéder au tableau "livres" puis à l'index[4] "formationJava" et enfin à la valeur de l'index[2] "prixUnit" :
//console.log(livres[4].prixUnit); Résultat obtenu : 42

/*********************************************************************************************/

var form = document.getElementById("form");
var select = document.querySelectorAll("select");
var option = document.querySelectorAll("option");
var input = document.querySelectorAll("input");
var inputReference = document.querySelectorAll(".reference");
var inputQuantite = document.querySelectorAll(".quantite");
var inputPrixUnitaire = document.querySelectorAll(".prixUnitaire");
var inputPrix = document.querySelectorAll(".prix");
console.log(select);
console.log(option);
console.log(input);


for(i = 0; i < select.length ; i++) 
{
  select[i].addEventListener("change", choose);
}

function choose()
{
  for(j = 0 ; j < select.length ; j++) 
  {
    for(k = 0 ; k < select[j].options.length ; k++ ) 
    {
      if(select[j].options[k].selected == true && k != 0) {
        {
          inputReference[j].value = "prout";
          inputQuantite[j].value = 2;
          inputPrixUnitaire[j].value = 12.5;
          inputPrix[j].value = inputQuantite[j].value * inputPrixUnitaire[j].value;
        }
      }  
    }
  }
};




















/*************************************************************************************************/
// var livres = document.getElementsByClassName("livres")[0];
// var reference = document.getElementsByClassName("reference")[0];
// var quantite = document.getElementsByClassName("quantite")[0];
// var prixUnit = document.getElementsByClassName("prixUnitaire")[0];
// var prix = document.getElementsByClassName("prix")[0];

// livres.addEventListener("change", function() {
//   console.log("ael: " + this.name);
//   returnVal(this.name);
// }, false);

// function returnVal(sitem){ // selected item = sitem
//   // on passe le nom de la variable (books) en paramètre
//   // c'est donc le nom de la variable mais pas sa valeur
//   // pour passer d'un string à un nom de variable on utilise eval()
//   sitem = eval(sitem);
//   // on cible le noeud des options du select
//   var options = sitem.querySelectorAll("option");
//   console.log(options);
//   // on parcours le noeud pour trouver l'index sélectionné
//   for(var item of options){
//       if(item.selected == true){
//           var i = item.index;
//       }
//   }
//   // console.log('i= '+ i);
//   // console.log("(name= "+ sitem.name +") (value= "+ options[i].value +") (text= "+ options[i].text +")");
//    //var count = options.length;
//   //console.log(count); 
//   //document.getElementsByClassName('reference')[0].value = options[i].value;

//   if(livres[i].selected == true) {
//     reference.value = books[i].reference;
//     quantite.value += 1;
//     prixUnit.value = books[i].prixUnit;
//     prix.value = quantite[i].value * prixUnit[i].value; 
//   } else {
//     quantite.value -= 1;
//   }
// }







// var firstLivres = document.getElementsByClassName("first-livres")[0];
// var secondLivres = document.getElementsByClassName("second-livres")[0];

// var fieldReference = document.getElementsByClassName("field")[0];
// var fieldQuantite = document.getElementsByClassName("field")[1];
// var fieldPrixUnit = document.getElementsByClassName("field")[2];
// var fieldPrix = document.getElementsByClassName("field")[3];

// var fieldReference2 = document.getElementsByClassName("field")[4];
// var fieldQuantite2 = document.getElementsByClassName("field")[5];
// var fieldPrixUnit2 = document.getElementsByClassName("field")[6];
// var fieldPrix2 = document.getElementsByClassName("field")[7];

// // Premier champ choix libre
//   // Premier choix
// firstLivres.addEventListener("change", () => {
//   var resultReference = fieldReference;
//   resultReference.value = livres[0].reference;
//   fieldQuantite.value += 1;
//   var resultPrixUnit = fieldPrixUnit;
//   resultPrixUnit.value = livres[0].prixUnit;
//   // console.log(livres[0].reference);
//   var calculPrix = parseInt(resultPrixUnit.value * fieldQuantite.value);
//   fieldPrix.value = calculPrix;
//   document.getElementsByClassName("mini-field")[0].value = parseFloat(
//     document.getElementsByClassName("field")[3].value + 
//       document.getElementsByClassName("field")[7].value + 
//       document.getElementsByClassName("field")[11].value + 
//       document.getElementsByClassName("field")[15].value + 
//       document.getElementsByClassName("field")[19].value + 
//       document.getElementsByClassName("field")[23].value + 
//       document.getElementsByClassName("field")[27].value + 
//       document.getElementsByClassName("field")[31].value + 
//       document.getElementsByClassName("field")[35].value + 
//       document.getElementsByClassName("field")[39].value);
// });

//   // Deuxième choix
//   firstLivres.addEventListener("change", () => {
//     var resultReference = fieldReference;
//     resultReference.value = livres[1].reference;
//     fieldQuantite.value += 1;
//     var resultPrixUnit = fieldPrixUnit;
//     resultPrixUnit.value = livres[1].prixUnit;
//     console.log(livres[0].reference);
//     var calculPrix = parseInt(resultPrixUnit.value * fieldQuantite.value);
//     fieldPrix.value = calculPrix;
//     document.getElementsByClassName("mini-field")[0].value = parseFloat(
//       document.getElementsByClassName("field")[3].value + 
//         document.getElementsByClassName("field")[7].value + 
//         document.getElementsByClassName("field")[11].value + 
//         document.getElementsByClassName("field")[15].value + 
//         document.getElementsByClassName("field")[19].value + 
//         document.getElementsByClassName("field")[23].value + 
//         document.getElementsByClassName("field")[27].value + 
//         document.getElementsByClassName("field")[31].value + 
//         document.getElementsByClassName("field")[35].value + 
//         document.getElementsByClassName("field")[39].value);
//   });

// // Second champ choix livre
// secondLivres.addEventListener("change", () => {
//   const resultReference2 = fieldReference2;
//   resultReference2.value = livres[0].reference;
//   fieldQuantite2.value += 1;
//   var resultPrixUnit2 = fieldPrixUnit2;
//   resultPrixUnit2.value = livres[0].prixUnit;
//   // console.log(livres[0].reference);
//   var calculPrix = parseInt(resultPrixUnit2.value * fieldQuantite2.value);
//   fieldPrix2.value = calculPrix;
//   document.getElementsByClassName("mini-field")[0].value = parseFloat(
//     document.getElementsByClassName("field")[3].value + 
//       document.getElementsByClassName("field")[7].value + 
//       document.getElementsByClassName("field")[11].value + 
//       document.getElementsByClassName("field")[15].value + 
//       document.getElementsByClassName("field")[19].value + 
//       document.getElementsByClassName("field")[23].value + 
//       document.getElementsByClassName("field")[27].value + 
//       document.getElementsByClassName("field")[31].value + 
//       document.getElementsByClassName("field")[35].value + 
//       document.getElementsByClassName("field")[39].value);
// });





















/************************************************************************/
// firstLivres.addEventListener("change", function () {
//   var options = firstLivres.querySelectorAll("option");
//   var count = options.length;
//   if (options[1].selected == true) {
//     fieldReference.textContent = livres[0].reference;
//     console.log(livres[0].reference);
//   }
//   console.log(
//     "(name= " +
//       this.name +
//       ") (value= " +
//       this.value +
//       ") (selectedIndex= " +
//       this.selectedIndex +
//       ")"
//   );
//   console.log(count);
// });

// secondLivres.addEventListener("change", function () {
//   var options = secondLivres.querySelectorAll("option");
//   var count = options.length;
//   console.log(
//     "(name= " +
//       this.name +
//       ") (value= " +
//       this.value +
//       ") (selectedIndex= " +
//       this.selectedIndex +
//       ")"
//   );
//   console.log(count);
// });

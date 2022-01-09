/* On crée une constante nommée "livres". Cette constante est un tableau ("array") qui contient des objets 
  Ici par exemple, les objets de l'array "livres" sont :
    -> grandLivreJavascript / htmlPlusVite / windowsNT / kitRessource / formationJava / creerSiteWeb
  A l'intérieur de chaque objet, on entre un index + une valeur :
    -> Exemple : Dans l'objet grandLivreJavascript, l'index[0] est nommé "titre" et sa valeur correspond à
                 "Le grand livre du JavaScript".
*/
const livres = [
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
console.log(livres[1].titre); //Résultat obtenu : HTML encore plus vite

// Pour accéder au tableau "livres" puis à l'index[4] "formationJava" et enfin à la valeur de l'index[2] "prixUnit" :
console.log(livres[4].prixUnit); // Résultat obtenu : 42

// Voila mes petites trouvailles du jour ! Bon Week-end à toutes et tous ! ;)

/*********************************************************************************************/

var firstLivres = document.getElementsByClassName("first-livres")[0];
var secondLivres = document.getElementsByClassName("second-livres")[0];

var fieldReference = document.getElementsByClassName("field")[0];
var fieldQuantite = document.getElementsByClassName("field")[1];
var fieldPrixUnit = document.getElementsByClassName("field")[2];

var fieldReference2 = document.getElementsByClassName("field")[4];
var fieldQuantite2 = document.getElementsByClassName("field")[5];
var fieldPrixUnit2 = document.getElementsByClassName("field")[6];

firstLivres.addEventListener("change", () => {
  const resultReference = fieldReference;
  resultReference.value = livres[0].reference;
  fieldQuantite.value += 1;
  var resultPrixUnit = fieldPrixUnit;
  resultPrixUnit.value = livres[0].prixUnit;
  // console.log(livres[0].reference);
  var calculPrix = parseInt(resultPrixUnit.value * fieldQuantite.value);
  document.getElementsByClassName("field")[3].value = calculPrix;
  document.getElementsByClassName("mini-field")[0].value = parseInt(
    document.getElementsByClassName("field")[3].value +
      document.getElementsByClassName("field")[7].value +
      document.getElementsByClassName("field")[11].value +
      document.getElementsByClassName("field")[15].value +
      document.getElementsByClassName("field")[19].value +
      document.getElementsByClassName("field")[23].value +
      document.getElementsByClassName("field")[27].value +
      document.getElementsByClassName("field")[31].value +
      document.getElementsByClassName("field")[35].value +
      document.getElementsByClassName("field")[39].value
  );
});

secondLivres.addEventListener("change", () => {
  const resultReference2 = fieldReference2;
  resultReference2.value = livres[0].reference;
  fieldQuantite2.value += 1;
  var resultPrixUnit2 = fieldPrixUnit2;
  resultPrixUnit2.value = livres[0].prixUnit;
  // console.log(livres[0].reference);
  var calculPrix = parseInt(resultPrixUnit2.value * fieldQuantite2.value);
  document.getElementsByClassName("field")[7].value = calculPrix;
  document.getElementsByClassName("mini-field")[0].value = parseInt(
    document.getElementsByClassName("field")[3].value +
      document.getElementsByClassName("field")[7].value +
      document.getElementsByClassName("field")[11].value +
      document.getElementsByClassName("field")[15].value +
      document.getElementsByClassName("field")[19].value +
      document.getElementsByClassName("field")[23].value +
      document.getElementsByClassName("field")[27].value +
      document.getElementsByClassName("field")[31].value +
      document.getElementsByClassName("field")[35].value +
      document.getElementsByClassName("field")[39].value
  );
});

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

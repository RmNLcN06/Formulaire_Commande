var livres = document.getElementsByClassName("livres")[0];

livres.addEventListener("change", function () {
  var options = livres.querySelectorAll("option");
  var count = options.length;
  console.log(
    "(name= " +
      this.name +
      ") (value= " +
      this.value +
      ") (selectedIndex= " +
      this.selectedIndex +
      ")"
  );
  console.log(count);
});

let header = document.getElementById("header");
let searchBar = document.querySelector("#myInput");
let letter = document.getElementsByClassName("letterName");
let morseNote = document.getElementsByClassName("morseNotation");

searchBar.addEventListener("keyup", morseSearch);

// VARIABLES
let card = document.getElementsByClassName("card");
let name = document.getElementsByClassName("name");

//SEARCH BAR
function morseSearch() {
  let input = document.getElementById("myInput").value;
  input = input.toLowerCase();
  for (let i = 0; i < card.length; i++) {
    resetHidden(card[i]);

    if (!letter[i].innerHTML.toLowerCase().includes(input)) {
      addHidden(card[i]);
    } else {
      card[
        i
      ].firstElementChild.firstElementChild.nextElementSibling.style.fontSize =
        "15vh";
      card[i].style.marginTop = "20";
    }
  }
  if (!input.length == 0) {
    addHidden(header);
  } else {
    resetHidden(header);
  }
}

function addHidden(card) {
  card.classList.add("hidden");
}

function resetHidden(card) {
  card.classList.remove("hidden");
}

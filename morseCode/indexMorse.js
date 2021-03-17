let header = document.getElementById("header");
let searchBar = document.querySelector("#myInput");
let letter = document.getElementsByClassName("letterName");

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

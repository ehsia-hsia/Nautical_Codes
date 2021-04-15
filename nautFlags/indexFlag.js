//FLAG ID"S
const alpha = document.getElementById("alpha");
const bravo = document.getElementById("bravo");
const charlie = document.getElementById("charlie");
const delta = document.getElementById("delta");
const echo = document.getElementById("echo");
const foxtrot = document.getElementById("foxtrot");
const golf = document.getElementById("golf");
const hotel = document.getElementById("hotel");
const india = document.getElementById("india");
const juliet = document.getElementById("juliet");
const kilo = document.getElementById("kilo");
const lima = document.getElementById("lima");
const mike = document.getElementById("mike");
const november = document.getElementById("november");
const oscar = document.getElementById("oscar");
const papa = document.getElementById("papa");
const quebec = document.getElementById("quebec");
const romeo = document.getElementById("romeo");
const sierra = document.getElementById("sierra");
const tango = document.getElementById("tango");
const uniform = document.getElementById("uniform");
const victor = document.getElementById("victor");
const whiskey = document.getElementById("whiskey");
const xray = document.getElementById("xray");
const yankee = document.getElementById("yankee");
const zulu = document.getElementById("zulu");

// VARIABLES
const card = document.getElementsByClassName("card");
const name = document.getElementsByClassName("name");
const header = document.querySelector(".header");
const dropName = document.getElementById("searchName");
const dropBack = document.getElementById("topLevelDrop").firstElementChild
  .firstElementChild;
const dropMenu = document.getElementById("droppedItems");
const body = document.getElementsByTagName("body");
//EVENT LISTENERS
const redButton = document.querySelector("#myRedButton");
redButton.addEventListener("click", Red);

const blueButton = document.querySelector("#myBlueButton");
blueButton.addEventListener("click", Blue);

const yellowButton = document.querySelector("#myYellowButton");
yellowButton.addEventListener("click", Yellow);

const whiteButton = document.querySelector("#myWhiteButton");
whiteButton.addEventListener("click", White);

const blackButton = document.querySelector("#myBlackButton");
blackButton.addEventListener("click", Black);

const allButton = document.querySelector("#myAllButton");
allButton.addEventListener("click", All);

let searchBar = document.querySelector("#myInput");
searchBar.addEventListener("keyup", flagSearch);
searchBar.addEventListener("keyup", submitInput);
// searchBar.addEventListener("focus", showMenu);

searchBar.autocomplete = "off";

const searchSubmit = document.querySelector(".submit");
searchSubmit.addEventListener("click", flagSearch);

//COLOR ARRAYS
const red = [
  bravo,
  charlie,
  echo,
  foxtrot,
  hotel,
  oscar,
  romeo,
  tango,
  uniform,
  victor,
  whiskey,
  yankee,
  zulu,
];
const blue = [
  alpha,
  charlie,
  delta,
  echo,
  golf,
  juliet,
  kilo,
  mike,
  november,
  papa,
  sierra,
  tango,
  whiskey,
  xray,
  zulu,
];
const yellow = [delta, golf, india, kilo, oscar, quebec, romeo, yankee, zulu];
const white = [
  alpha,
  charlie,
  foxtrot,
  hotel,
  juliet,
  mike,
  november,
  papa,
  sierra,
  tango,
  uniform,
  victor,
  whiskey,
  xray,
];
const black = [india, lima, zulu];

//Filter FUNCTIONS

function hideHeader() {
  document.querySelector(".header").classList.add("hidden");
}

function hideCard(card) {
  card.classList.add("hidden");
}

function resetHidden(card) {
  card.classList.remove("hidden");
}

//SEARCH BAR

function submitInput(e) {
  if (e.key == "Enter") {
    flagSearch();
  }
}

// function showMenu() {
//   $(".droppedItems").dropdown("show");
// }

function flagSearch(e) {
  let input = searchBar.value;
  input = input.toLowerCase();
  hideHeader();
  AllFlagButton("Flag Search", "black");

  for (let i = 0; i < card.length; i++) {
    resetHidden(card[i]);
    if (!card[i].innerHTML.toLowerCase().includes(input)) {
      hideCard(card[i]);
    } else if (input == "") {
      resetHidden(header);
      resetHidden(card[i]);
    } else {
      card[i].style.width = "80%";
      card[i].style.marginTop = "15%";
    }
  }
}

//BUTTONS
function Red() {
  hideHeader();
  for (let i = 0; i < card.length; i++) {
    resetHidden(card[i]);
    if (!red.includes(card[i])) {
      hideCard(card[i]);
    }
  }

  dropNameChange("Red Flags", "#d02023");
}

function Blue() {
  hideHeader();
  for (let i = 0; i < card.length; i++) {
    resetHidden(card[i]);
    if (!blue.includes(card[i])) {
      hideCard(card[i]);
    }
  }
  dropNameChange("Blue Flags", "rgb(1, 57, 150)");
}

function Yellow() {
  hideHeader();
  for (let i = 0; i < card.length; i++) {
    resetHidden(card[i]);
    if (!yellow.includes(card[i])) {
      hideCard(card[i]);
    }
  }
  dropNameChange("Yellow Flags", "rgb(231, 185, 1");
}

function White() {
  hideHeader();
  for (let i = 0; i < card.length; i++) {
    resetHidden(card[i]);
    if (!white.includes(card[i])) {
      hideCard(card[i]);
    }
  }
  dropNameChange("White Flags", "black");
}

function Black() {
  hideHeader();

  for (let i = 0; i < card.length; i++) {
    resetHidden(card[i]);

    if (!black.includes(card[i])) {
      hideCard(card[i]);
    }
  }
  dropNameChange("Black Flags", "black");
}

function All() {
  resetHidden(header);
  for (let i = 0; i < card.length; i++) {
    resetHidden(card[i]);
  }
  AllFlagButton("Flag Search", "black");
}

function dropNameChange(color, backC) {
  dropName.textContent = color;
  dropBack.style.backgroundColor = backC;
  dropBack.style.borderBottom = 0;
}
function AllFlagButton(color, backC) {
  dropName.textContent = color;
  dropBack.style.backgroundColor = backC;
  dropBack.style.borderBottom = "solid 4px #004aad";
}

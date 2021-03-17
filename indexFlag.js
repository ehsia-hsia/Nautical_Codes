//FLAG ID"S
let alpha = document.getElementById("alpha");
let bravo = document.getElementById("bravo");
let charlie = document.getElementById("charlie");
let delta = document.getElementById("delta");
let echo = document.getElementById("echo");
let foxtrot = document.getElementById("foxtrot");
let golf = document.getElementById("golf");
let hotel = document.getElementById("hotel");
let india = document.getElementById("india");
let juliet = document.getElementById("juliet");
let kilo = document.getElementById("kilo");
let lima = document.getElementById("lima");
let mike = document.getElementById("mike");
let november = document.getElementById("november");
let oscar = document.getElementById("oscar");
let papa = document.getElementById("papa");
let quebec = document.getElementById("quebec");
let romeo = document.getElementById("romeo");
let sierra = document.getElementById("sierra");
let tango = document.getElementById("tango");
let uniform = document.getElementById("uniform");
let victor = document.getElementById("victor");
let whiskey = document.getElementById("whiskey");
let xray = document.getElementById("xray");
let yankee = document.getElementById("yankee");
let zulu = document.getElementById("zulu");

// VARIABLES
let card = document.getElementsByClassName("card");
let name = document.getElementsByClassName("name");
let header = document.querySelector(".header");

//EVENT LISTENERS
let redButton = document.querySelector("#myRedButton");
redButton.addEventListener("click", Red);

let blueButton = document.querySelector("#myBlueButton");
blueButton.addEventListener("click", Blue);

let yellowButton = document.querySelector("#myYellowButton");
yellowButton.addEventListener("click", Yellow);

let whiteButton = document.querySelector("#myWhiteButton");
whiteButton.addEventListener("click", White);

let blackButton = document.querySelector("#myBlackButton");
blackButton.addEventListener("click", Black);

let searchBar = document.querySelector("#myInput");
searchBar.addEventListener("keyup", flagSearch);

//COLOR ARRAYS
let red = [
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
let blue = [
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
let yellow = [delta, golf, india, kilo, oscar, quebec, romeo, yankee, zulu];
let white = [
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
let black = [india, lima, zulu];

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
function flagSearch() {
  let input = document.getElementById("myInput").value;
  input = input.toLowerCase();
  for (let i = 0; i < card.length; i++) {
    if (!card[i].innerHTML.toLowerCase().includes(input)) {
      hideCard(card[i]);
      hideHeader();
    } else if (input == "") {
      resetHidden(header);
      resetHidden(card[i]);
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
}

function Blue() {
  hideHeader();
  for (let i = 0; i < card.length; i++) {
    resetHidden(card[i]);
    if (!blue.includes(card[i])) {
      hideCard(card[i]);
    }
  }
}

function Yellow() {
  hideHeader();
  for (let i = 0; i < card.length; i++) {
    resetHidden(card[i]);
    if (!yellow.includes(card[i])) {
      hideCard(card[i]);
    }
  }
}

function White() {
  hideHeader();
  for (let i = 0; i < card.length; i++) {
    resetHidden(card[i]);
    if (!white.includes(card[i])) {
      hideCard(card[i]);
    }
  }
}

function Black() {
  hideHeader();

  for (let i = 0; i < card.length; i++) {
    resetHidden(card[i]);

    if (!black.includes(card[i])) {
      hideCard(card[i]);
    }
  }
}

function All() {
  resetHidden(header);
  for (let i = 0; i < card.length; i++) {
    resetHidden(card[i]);
  }
}

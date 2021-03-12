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

let header = document.querySelector(".header");
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

// VARIABLES
let card = document.getElementsByClassName("card");
let name = document.getElementsByClassName("name");

//SEARCH BAR
function flagSearch() {
  header.classList.add("hidden");
  let input = document.getElementById("myInput").value;
  input = input.toLowerCase();
  let card = document.getElementsByClassName("card");
  let name = document.getElementsByClassName("name");

  for (let i = 0; i < card.length; i++) {
    if (!card[i].innerHTML.toLowerCase().includes(input)) {
      card[i].style.display = "none";
    } else if (input == "") {
      header.classList.remove("hidden");
    } else {
      card[i].style = "gridLayout";
      card[i].style.maxWidth = "400px";
    }
  }
}

//BUTTON FUNCTIONS
function Red() {
  let input = document.getElementById("myRedButton");
  let card = document.getElementsByClassName("card");
  let name = document.getElementsByClassName("name");
  document.querySelector(".header").style.display = "none";

  for (let i = 0; i < card.length; i++) {
    if (!red.includes(card[i])) {
      card[i].style.display = "none";
    } else {
      card[i].style = "gridLayout";
    }
  }
}

function Blue() {
  let input = document.querySelector("#myBlueButton");
  let card = document.getElementsByClassName("card");
  let name = document.getElementsByClassName("name");
  document.querySelector(".header").style.display = "none";

  for (let i = 0; i < card.length; i++) {
    if (!blue.includes(card[i])) {
      card[i].style.display = "none";
    } else {
      card[i].style = "gridLayout";
    }
  }
}

function Yellow() {
  let input = document.getElementById("myYellowButton");
  let card = document.getElementsByClassName("card");
  let name = document.getElementsByClassName("name");
  document.querySelector(".header").style.display = "none";

  for (let i = 0; i < card.length; i++) {
    if (!yellow.includes(card[i])) {
      card[i].style.display = "none";
    } else {
      card[i].style = "gridLayout";
    }
  }
}

function White() {
  let input = document.getElementById("myWhiteButton");
  let card = document.getElementsByClassName("card");
  let name = document.getElementsByClassName("name");
  document.querySelector(".header").style.display = "none";

  for (let i = 0; i < card.length; i++) {
    if (!white.includes(card[i])) {
      card[i].style.display = "none";
    } else {
      card[i].style = "gridLayout";
    }
  }
}

function Black() {
  let input = document.getElementById("myBlackButton");
  let card = document.getElementsByClassName("card");
  let name = document.getElementsByClassName("name");
  document.querySelector(".header").style.display = "none";

  for (let i = 0; i < card.length; i++) {
    if (!black.includes(card[i])) {
      card[i].style.display = "none";
    } else {
      card[i].style = "block";
      document.getElementById("india").style.maxWidth = "400px";
      document.getElementById("lima").style.maxWidth = "400px";
    }
  }
}

function All() {
  let input = document.getElementById("myAlButton");
  // input = input.toLowerCase();
  let card = document.getElementsByClassName("card");
  let name = document.getElementsByClassName("name");
  let grid = document.querySelector(".gridlayout");
  let header = (document.querySelector(".header").style.display = "block");

  for (let i = 0; i < card.length; i++) {
    if (!card[i].innerHTML.includes("")) {
      card[i].style.display = "none";
    } else {
      card[i].style = "gridLayout";
    }
  }
}

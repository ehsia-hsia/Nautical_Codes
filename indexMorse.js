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
let header = document.getElementById("header");

let searchBar = document.querySelector("#myInput");
searchBar.addEventListener("keyup", morseSearch);

// VARIABLES
let card = document.getElementsByClassName("card");
let name = document.getElementsByClassName("name");

//SEARCH BAR
function morseSearch() {
  let input = document.getElementById("myInput").value;
  input = input.toLowerCase();
  let card = document.getElementsByClassName("card");
  // let name = document.getElementsByClassName("name");
  let letter = document.getElementsByClassName("letterName");

  for (let i = 0; i < card.length; i++) {
    if (!letter[i].innerHTML.toLowerCase().includes(input)) {
      card[i].style.display = "none";
    } else {
      card[i].style = "gridLayout";
      card[i].style.maxWidth = "400px";
    }
  }
  if (!input.length == 0) {
    header.style.display = "none";
  } else {
    header.style.display = "block";
  }
}

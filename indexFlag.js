//FLAG ID"S 
let alpha = document.getElementById('alpha');
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



//COLOR ARRAYS
let red = [bravo, charlie, echo, foxtrot, hotel];
let blue = [alpha, charlie, delta, echo, golf, juliet, kilo, mike, november];
let yellow = [delta, golf, india, kilo];
let white = [alpha, charlie, foxtrot, hotel, juliet, mike, november];
let black = [india, lima];


//EVENT LISTENERS
let redButton = document.querySelector('#myRedButton');
redButton.addEventListener("click", Red);

let blueButton = document.querySelector('#myBlueButton');
blueButton.addEventListener("click", Blue);

let yellowButton = document.querySelector('#myYellowButton');
yellowButton.addEventListener("click", Yellow);

let whiteButton = document.querySelector('#myWhiteButton');
whiteButton.addEventListener("click", White);

let blackButton = document.querySelector('#myBlackButton');
blackButton.addEventListener("click", Black);

let searchBar = document.querySelector('#myInput');
searchBar.addEventListener("keyup", flagSearch);

// VARIABLES
let card = document.getElementsByClassName('card');
let name = document.getElementsByClassName('name');



//SEARCH BAR
function flagSearch() {
    let input = document.getElementById('myInput').value;
    input = input.toLowerCase();
    let card = document.getElementsByClassName('card');
    let name = document.getElementsByClassName('name');

    for (let i = 0; i < card.length; i++) {
        if (!card[i].innerHTML.toLowerCase().includes(input)) {
            card[i].style.display = "none";
        } else {
            card[i].style = "gridLayout";
        }
    }

}

//BUTTON FUNCTIONS 
function Red() {
    let input = document.getElementById('myRedButton');
    let card = document.getElementsByClassName('card');
    let name = document.getElementsByClassName('name');
    for (let i = 0; i < card.length; i++) {
        if (!red.includes(card[i])) {
            card[i].style.display = "none";
        } else {
            card[i].style = "gridLayout";
        }
    }

}


function Blue() {
    let input = document.querySelector('#myBlueButton');
    let card = document.getElementsByClassName('card');
    let name = document.getElementsByClassName('name');
    for (let i = 0; i < card.length; i++) {
        if (!blue.includes(card[i])) {
            card[i].style.display = "none";
        } else {
            card[i].style = "gridLayout";
        }
    }

}


function Yellow() {
    let input = document.getElementById('myYellowButton');
    let card = document.getElementsByClassName('card');
    let name = document.getElementsByClassName('name');
    for (let i = 0; i < card.length; i++) {
        if (!yellow.includes(card[i])) {
            card[i].style.display = "none";
        } else {
            card[i].style = "gridLayout";
        }
    }

}

function White() {
    let input = document.getElementById('myWhiteButton');
    let card = document.getElementsByClassName('card');
    let name = document.getElementsByClassName('name');
    for (let i = 0; i < card.length; i++) {
        if (!white.includes(card[i])) {
            card[i].style.display = "none";
        } else {
            card[i].style = "gridLayout";
        }
    }

}



function Black() {
    let input = document.getElementById('myBlackButton');
    let card = document.getElementsByClassName('card');
    let name = document.getElementsByClassName('name');
    for (let i = 0; i < card.length; i++) {
        if (!black.includes(card[i])) {
            card[i].style.display = "none";
        } else {
            card[i].style = "gridLayout";
        }
    }

}


function All() {
    let input = document.getElementById('myAlButton');
    // input = input.toLowerCase();
    let card = document.getElementsByClassName('card');
    let name = document.getElementsByClassName('name');
    let grid = document.querySelector('.gridlayout');
    for (let i = 0; i < card.length; i++) {
        if (!card[i].innerHTML.includes("")) {
            card[i].style.display = "none";
        } else {
            card[i].style = "gridLayout";
        }
    }

}




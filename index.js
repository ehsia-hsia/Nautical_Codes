"use strict";
const body = document.querySelector("body");
const header = document.querySelector(".header");
const headerText = document.querySelector(".big-heading");
const headerPara = document.querySelector(".aboutpara").firstElementChild;
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.classList.add("noButtonBorder");
});
const toggleSwitch = document.getElementById("customSwitch1");

toggleSwitch.addEventListener("click", darkMode);
function darkMode() {
  header.classList.toggle("backgroundDarkMode");
  headerText.classList.toggle("textDarkMode");
  headerPara.classList.toggle("textDarkMode");
  body.classList.toggle("backgroundDarkMode");
  buttons.forEach((button) => {
    button.classList.toggle("noButtonBorder");

    button.classList.toggle("borderDarkMode");
  });
}

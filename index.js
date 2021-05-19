"use strict";
const body = document.querySelector("body");
const header = document.querySelector(".header");
const headerText = document.querySelector(".big-heading");
const headerPara = document.querySelector(".aboutpara").firstElementChild;
const morseFlex = document.getElementById("mor");
const flagFlex = document.getElementById("flags");

const flexTitle = document.querySelectorAll(".sectiontitle");
const flexPara = document.querySelectorAll(".descriptionFlex");
const images = document.querySelectorAll("img");
images.forEach((image) => {
  image.classList.add("backgroundDarkMode");
});
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.classList.add("noButtonBorder");
});
const toggleSwitch = document.getElementById("customSwitch1");

toggleSwitch.addEventListener("click", darkMode);
function darkMode() {
  header.classList.toggle("backgroundDarkMode");
  body.classList.toggle("backgroundDarkMode");
  morseFlex.classList.toggle("backgroundDarkMode");
  flagFlex.classList.toggle("backgroundDarkMode");
  headerText.classList.toggle("textDarkMode");
  headerPara.classList.toggle("textDarkMode");
  flexTitle.forEach((title) => {
    title.classList.toggle("textDarkMode");
  });

  flexPara.forEach((title) => {
    title.classList.toggle("textDarkMode");
  });
  buttons.forEach((button) => {
    button.classList.toggle("noButtonBorder");
    button.classList.toggle("borderDarkMode");
  });
}

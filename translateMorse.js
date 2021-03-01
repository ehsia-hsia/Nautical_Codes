/*translator*/
let ogText = document.getElementById("textArea");
let translatedText = document.getElementById("translatedArea");
const test = [];

let buttonSubmit = document.getElementById("submit");
buttonSubmit.addEventListener("click", translate);

let buttonClear = document.getElementById("clear");
buttonClear.addEventListener("click", clear);

function translate() {
  ogText = ogText.value;
  // ogText.toString();
  //   if (!ogText.length == 0) {
  const splitText = ogText.split("");
  for (let i = 0; i < splitText.length; i++) {
    switch (splitText[i]) {
      case "a":
        test.push("._ ");
        break;
      case "b":
        test.push("_...");
        break;
      case "c":
        test.push("_._.");
        break;
      case "d":
        test.push("_..");
        break;
      case "e":
        test.push(".");
        break;
      case "f":
        test.push(".._.");
        break;
      case "g":
        test.push("_ _ .");
        break;
      case "h":
        test.push("....");
        break;
      case "i":
        test.push("..");
        break;
      case "j":
        test.push("._ _ _");
        break;
      case "k":
        test.push("___");
        break;
      case "l":
        test.push("._..");
        break;
      case "m":
        test.push("_ _");
        break;
      case "n":
        test.push("_.");
        break;
      case "o":
        test.push("_ _ _");
        break;
      case "p":
        test.push("._ _.");
        break;
      case "q":
        test.push("_ _._");
        break;
      case "r":
        test.push("._.");
        break;
      case "s":
        test.push(".");
        break;
      case "t":
        test.push("_");
        break;
      case "u":
        test.push(".._");
        break;
      case "v":
        test.push("..._");
        break;
      case "w":
        test.push("._ _");
        break;
      case "x":
        test.push("_.._");
        break;
      case "y":
        test.push("_._ _");
        break;
      case "z":
        test.push("_ _..");
        break;
    }
  }

  // test.toString();
  // test.join("");
  translatedText.style.fontSize = "2rem";
  return (translatedText.innerHTML = test.join("    "));
}

function clear() {
  if (!ogText.length == "0") {
    document.getElementById("translatedArea").value = "";
    document.getElementById("textArea").value = "";
  }
}

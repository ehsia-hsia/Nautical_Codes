/*translator*/
let ogText = document.getElementById("textArea");
let translatedText = document.getElementById("translatedArea");
translatedText.readOnly = true;
let transTextArray = [];
let buttonSubmit = document.getElementById("submit");
buttonSubmit.addEventListener("click", translate);

let buttonClear = document.getElementById("clear");
buttonClear.addEventListener("click", clear);
ogText.style.color = "white";
function translate() {
  ogText = ogText.value;
  // ogText.toString();
  //   if (!ogText.length == 0) {
  const splitText = ogText.split("");
  for (let i = 0; i < splitText.length; i++) {
    switch (splitText[i]) {
      case "a":
        transTextArray.push("._ ");
        break;
      case "b":
        transTextArray.push("_...");
        break;
      case "c":
        transTextArray.push("_._.");
        break;
      case "d":
        transTextArray.push("_..");
        break;
      case "e":
        transTextArray.push(".");
        break;
      case "f":
        transTextArray.push(".._.");
        break;
      case "g":
        transTextArray.push("_ _ .");
        break;
      case "h":
        transTextArray.push("....");
        break;
      case "i":
        transTextArray.push("..");
        break;
      case "j":
        transTextArray.push("._ _ _");
        break;
      case "k":
        transTextArray.push("___");
        break;
      case "l":
        transTextArray.push("._..");
        break;
      case "m":
        transTextArray.push("_ _");
        break;
      case "n":
        transTextArray.push("_.");
        break;
      case "o":
        transTextArray.push("_ _ _");
        break;
      case "p":
        transTextArray.push("._ _.");
        break;
      case "q":
        transTextArray.push("_ _._");
        break;
      case "r":
        transTextArray.push("._.");
        break;
      case "s":
        transTextArray.push(".");
        break;
      case "t":
        transTextArray.push("_");
        break;
      case "u":
        transTextArray.push(".._");
        break;
      case "v":
        transTextArray.push("..._");
        break;
      case "w":
        transTextArray.push("._ _");
        break;
      case "x":
        transTextArray.push("_.._");
        break;
      case "y":
        transTextArray.push("_._ _");
        break;
      case "z":
        transTextArray.push("_ _..");
        break;
      case ".":
        transTextArray.push("._._._");
        break;
      case ",":
        transTextArray.push("_ _.._ _");
        break;
      case "?":
        transTextArray.push(".._ _..");
        break;
      case "@":
        transTextArray.push("._ _._.");
        break;
      case "1":
        transTextArray.push("._ _ _ _");
        break;
      case "2":
        transTextArray.push(".._ _ _");
        break;
      case "3":
        transTextArray.push("..._ _");
        break;
      case "4":
        transTextArray.push("...._");
        break;
      case "5":
        transTextArray.push(".....");
        break;
      case "6":
        transTextArray.push("_....");
        break;
      case "7":
        transTextArray.push("_ _...");
        break;
      case "8":
        transTextArray.push("_ _ _..");
        break;
      case "9":
        transTextArray.push("_ _ _ _.");
        break;
      case "0":
        transTextArray.push("_ _ _ _ _");
        break;
    }
  }

  // transTextArray.toString();
  // transTextArray.join("");
  // translatedText.style.fontSize = "4vh";
  translatedText.style.color = "white";
  return (translatedText.innerHTML = transTextArray.join("    "));
}

document.addEventListener("keydown", function (e) {
  ///creates object
  if (e.key === "Backspace") {
    ogText = document.getElementById("textArea");
  }
  if (ogText.value === "") {
    clear();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") translate();
});

function clear() {
  ogText = document.getElementById("textArea");
  translatedText = document.getElementById("translatedArea");
  transTextArray = [];
  ogText.value = "";
  translatedText.innerHTML = "";
}

/*translator*/
let ogText = document.getElementById("textArea");
let translatedText = document.getElementById("translatedArea");
const test = [];

let button = document.getElementById("submit");
button.addEventListener("click", translate);

function translate() {
  ogText = ogText.value;
  // ogText.toString();
  const splitText = ogText.split("");
  for (let i = 0; i < splitText.length; i++) {
    switch (splitText[i]) {
      case "a":
        test.push("._ ");
        break;
      case "b":
        test.push("..");
        break;
      case "c":
        test.push("___");
        break;
      case "d":
        test.push(".-.");
        break;
      case "e":
        test.push("._");
        break;
      case "f":
        test.push("..");
        break;
      case "g":
        test.push("___");
        break;
      case "h":
        test.push(".-.");
        break;
      case "i":
        test.push("._");
        break;
      case "j":
        test.push("..");
        break;
      case "k":
        test.push("___");
        break;
      case "l":
        test.push(".-.");
        break;
    }
  }
  // test.toString();
  // test.join("");
  translatedText.style.fontSize = "2rem";
  return (translatedText.innerHTML = test.join(" "));
}

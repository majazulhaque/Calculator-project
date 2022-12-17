import "./styles.css";
var buttons = document.getElementsByClassName("button");
var displays = document.getElementById("display");
var operant1 = 0;
var operant2 = null;
var operator = null;
for (var i = 0; i < buttons.length; i++) {
  var num = "";
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    if (displays.innerText.length > 10) {
      displays.style.color = "black";
      displays.innerText = "";
    }
    displays.style.fontSize = "2rem";
    if (value === "+/-") {
      displays.style.fontSize = "10px";
      displays.style.color = "red";
      displays.innerText =
        "This key is under implementation,Please CLICK on 'AC' button to continue...";
    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/" ||
      value === "%"
    ) {
      operator = value;
      displays.innerText += value;
      // operant1 = parseFloat(displays.textContent);
      operant1 = num;
      num = "";
      console.log(operant1);
    } else if (value === "AC") {
      displays.innerText = "";
      operant1 = 0;
      operant2 = 0;
      num = "";
    } else if (value === "=") {
      // operant2 = parseFloat(displays.textContent);
      operant2 = num;
      num = "";
      console.log(operant1, operator, operant2);
      switch (operator) {
        case "-":
          num = operant1 - operant2;
          break;
        case "+":
          num = parseInt(operant1, 0) + parseInt(operant2, 0);
          break;
        case "*":
          num = operant1 * operant2;
          break;
        case "/":
          num = operant1 / operant2;
          break;
        case "%":
          num = operant1 % operant2;
          break;
        default:
          num = 0;
      }
      displays.innerText = num;
      operant1 = num;
    } else {
      // displays.innerText += value;
      num += value;
      displays.innerText += value;
    }
  });
}

const screenLower = document.querySelector(".lower-operand");
const screenUpper = document.querySelector(".upper-operand");
const buttons = document.querySelectorAll(".btn");
const clear = document.querySelector(".btn-clear");
const deleteBtn = document.querySelector(".btn-del");
const equal = document.querySelector(".btn-equal");

buttons.forEach((button) => {
  button.addEventListener("click", calculate);
});

function calculate() {
  let buttonText = this.innerText;

  if (buttonText === "AC") {
    screenLower.innerText = "0";
    screenUpper.innerText = "";

    return;
  }

  if (buttonText === "DEL") {
    screenUpper.textContent = screenUpper.textContent.substring(
      0,
      screenUpper.textContent.length - 1
    );
    return;
  }


  if (buttonText === "=") {
    screenLower.innerText = eval(screenUpper.innerText);
  } else {
    screenUpper.textContent += buttonText;
    return;
  }
}

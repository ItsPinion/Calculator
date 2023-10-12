import "./style.css";

const screen = document.getElementById("screen") as HTMLInputElement;
const buttons = document.getElementsByClassName("cal-button");
const buttonsArray = Array.from(buttons);

for (let i = 0; i < buttonsArray.length; i++) {
  const element = buttonsArray[i];
  element.addEventListener("click", () => {
    let screenValue = screen.value;
    const textContent = element.textContent as string;

    if (textContent === "AC") {
      screenValue = "";
      screen.placeholder = "0";
    } else if (textContent === "DEL") {
      screenValue = screenValue.slice(0, -1);
    } else if (textContent === "÷") {
      screenValue += "/";
    } else if (textContent === "×") {
      screenValue += "*";
    } else if (textContent === "−") {
      screenValue += "-";
    } else if (textContent === "=") {
      try {
        let result = eval(screenValue);
        if (result.toString().length > 9) {
          screen.placeholder = result.toExponential(5);
        } else {
          screen.placeholder = "" + result;
        }
        screenValue = "";
      } catch (e) {
        screen.placeholder = "Error";
        screenValue = "";
      }
    } else {
      screenValue += textContent;
    }

    screen.value = screenValue;
    screen.scrollLeft = screen.scrollWidth;
  });
}

setInterval(() => {
  console.debug(screen.value);
}, 1000);

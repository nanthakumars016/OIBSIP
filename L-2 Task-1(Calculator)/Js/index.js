let output_screen = document.getElementById("output-screen");
let buttons = document.querySelectorAll(
  ".number, .operator, #clear,#equal, #del, #absolute"
);
buttons.forEach((button) =>
  button.addEventListener("click", () => {
    if (button.id === "clear") {
      output_screen.value = "";
    } else if (button.id === "equal") {
      try {
        output_screen.value = eval(output_screen.value);
      } catch (err) {
        output_screen.value = "Error";
      }
    } else if (button.id === "del") {
      output_screen.value = output_screen.value.slice(0, -1);
    } else if (button.id === "absolute") {
      output_screen.value = Math.abs(output_screen.value);
    } else {
      output_screen.value += button.textContent;
    }
  })
);

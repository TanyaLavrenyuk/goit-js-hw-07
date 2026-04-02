const textInput = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value.trim();
  if (inputValue === "") {
    outputName.textContent = "Anonymous";
  } else {
    outputName.textContent = inputValue;
  }
});

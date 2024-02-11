const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", (value) => {
nameOutput.textContent = nameInput.value.trim() || "Anonymous";
});
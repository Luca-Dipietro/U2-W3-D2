// Esercizio 1

const nameInput = document.getElementById("nameInput");
const removeButton = document.getElementById("removeButton");
const form = document.getElementById("registrationForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const saveName = function () {
    const name = nameInput.value;
    if (name.length > 0) {
      localStorage.setItem("savedName", JSON.stringify(name));
    } else {
      alert("Inserisci un nome valido.");
    }
  };
  saveName();
});

const savedName = localStorage.getItem("savedName");

if (savedName) {
  savedName = JSON.parse(savedName);
  nameInput.value = savedName;
}

const removeName = function () {
  localStorage.removeItem("savedName");
  nameInput.value = "";
};

removeButton.addEventListener("click", removeName);

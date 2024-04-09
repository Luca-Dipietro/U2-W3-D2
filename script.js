// Esercizio 1

const nameInput = document.getElementById("nameInput");
const removeButton = document.getElementById("removeButton");
const form = document.getElementById("registrationForm");
const savedNameDisplay = document.getElementById("savedNameDisplay");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const saveName = function () {
    const name = nameInput.value;
    if (name.length > 0) {
      localStorage.setItem("savedName", JSON.stringify(name));
      savedNameDisplay.textContent = name;
      nameInput.value = "";
    } else {
      alert("Inserisci un nome valido.");
    }
  };
  saveName();
});

const savedName = localStorage.getItem("savedName");

if (savedName) {
  savedNameDisplay.textContent = JSON.parse(savedName);
}

const removeName = function () {
  localStorage.removeItem("savedName");
  savedNameDisplay.textContent = "";
  nameInput.value = "";
};

removeButton.addEventListener("click", removeName);

// Esercizio 2

const updateCounter = function () {
  if (sessionStorage.getItem("counter")) {
    let counter = parseInt(sessionStorage.getItem("counter"));
    counter++;

    sessionStorage.setItem("counter", counter);

    document.querySelector("#counter h1").innerText = counter;
  } else {
    sessionStorage.setItem("counter", 0);
  }
};

setInterval(updateCounter, 1000);

window.onload = updateCounter;

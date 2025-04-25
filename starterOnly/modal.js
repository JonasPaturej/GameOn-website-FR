function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

let isValid = true;

// validation du Prénom
function checkFirstName() {
  const prenom = document.getElementById("prenom").value.trim();
  const prenomChamp = document.getElementById("prenom");
  const errorElement =
    prenomChamp.parentElement.querySelector(".error-message");
  if (prenom.length < 2) {
    errorElement.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    errorElement.style.display = "block";
    isValid = false;
  } else {
    errorElement.textContent = "";
    errorElement.style.display = "none";
  }
}

// validation du Nom
function checkLastName() {
  const nom = document.getElementById("nom").value.trim();
  const nomChamp = document.getElementById("nom");
  const errorElement = nomChamp.parentElement.querySelector(".error-message");
  if (nom.length < 2) {
    errorElement.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    errorElement.style.display = "block";
    isValid = false;
  } else {
    errorElement.textContent = "";
    errorElement.style.display = "none";
  }
}

// validation de l'Email
function checkEmail() {
  const email = document.getElementById("email").value.trim();
  const emailChamp = document.getElementById("email");
  const errorElement = emailChamp.parentElement.querySelector(".error-message");
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    errorElement.textContent = "L'adresse email est invalide.";
    errorElement.style.display = "block";
    isValid = false;
  } else {
    errorElement.textContent = "";
    errorElement.style.display = "none";
  }
}

// validation date de naissance
function checkBirthdate() {
  const birthdate = document.getElementById("birthdate").value;
  const birthdateChamp = document.getElementById("birthdate");
  const errorElement =
    birthdateChamp.parentElement.querySelector(".error-message");
  if (!birthdate) {
    errorElement.textContent = "Vous devez entrer votre date de naissance.";
    errorElement.style.display = "block";
    isValid = false;
  } else {
    errorElement.textContent = "";
    errorElement.style.display = "none";
  }
}

// validation du nombre de tournois
function checkTournoi() {
  const tournoi = parseInt(document.getElementById("tournoi").value, 10);
  const tournoiChamp = document.getElementById("tournoi");
  const errorElement =
    tournoiChamp.parentElement.querySelector(".error-message");
  if (isNaN(tournoi) || tournoi < 0) {
    errorElement.textContent =
      "Veuillez entrer un nombre valide pour le nombre de tournois.";
    errorElement.style.display = "block";
    isValid = false;
  } else {
    errorElement.textContent = "";
    errorElement.style.display = "none";
  }
}

// validation du bouton tournoi
function checkRadioButton() {
  const radioButtons = document.getElementsByName("location");
  const errorElement = document
    .getElementById("location1")
    .parentElement.querySelector(".error-message");
  let radioSelected = false;

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      radioSelected = true;
      break;
    }
  }

  if (!radioSelected) {
    errorElement.textContent = "Vous devez choisir une option.";
    errorElement.style.display = "block";
    isValid = false;
  } else {
    errorElement.textContent = "";
    errorElement.style.display = "none";
  }
}

// validation des conditions générales
function checkConditions() {
  const conditionsChecked = document.getElementById("checkbox1").checked;
  const errorElement = document.querySelector(".error-message");

  if (!conditionsChecked) {
    errorElement.textContent =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
    errorElement.style.display = "block";
    isValid = false;
  } else {
    errorElement.textContent = "";
    errorElement.style.display = "none";
  }
}

// validation formulaire
function validationFormulaire() {
  const formulaire = document.getElementById("formulaire");

  isValid = true;

  checkFirstName();
  checkLastName();
  checkEmail();
  checkBirthdate();
  checkTournoi();
  checkRadioButton();
  checkConditions();

  return isValid;
}

formulaire.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validationFormulaire()) {
    alert("Formulaire validé !");
  } else {
    alert("Erreurs dans le formulaire");
  }
});

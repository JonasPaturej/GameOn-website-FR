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

// close modal form après submit
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", closeModal);

let isValid = true;

// affiche message d'erreur
function displayError(champ, errorMessage) {
  const errorElement = champ.parentElement.querySelector(".error-message");

  errorElement.textContent = errorMessage;
  errorElement.style.display = "block";
  isValid = false;
}

// cache message d'erreur
function hideError(champ) {
  const errorElement = champ.parentElement.querySelector(".error-message");
  errorElement.textContent = "";
  errorElement.style.display = "none";
}

// validation du Prénom
function checkFirstName() {
  const champ = document.getElementById("prenom");
  const champValue = champ.value.trim();
  if (champValue.length < 2) {
    displayError(
      champ,
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    );
  } else {
    hideError(champ);
  }
}

// validation du Nom
function checkLastName() {
  const champ = document.getElementById("nom");
  const champValue = champ.value.trim();
  if (champValue.length < 2) {
    displayError(
      champ,
      "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    );
  } else {
    hideError(champ);
  }
}

// validation de l'Email
function checkEmail() {
  const champ = document.getElementById("email");
  const champValue = champ.value.trim();
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(champValue)) {
    displayError(champ, "L'adresse email est invalide.");
  } else {
    hideError(champ);
  }
}

// validation de la Date de naissance
function checkBirthdate() {
  const champ = document.getElementById("birthdate");
  const champValue = champ.value.trim();
  if (champValue === "") {
    displayError(champ, "Vous devez entrer votre date de naissance.");
  } else {
    hideError(champ);
  }
}

// validation du Nombre de tournois
function checkTournoi() {
  const champ = document.getElementById("tournoi");
  const champValue = champ.value.trim();
  const tournoi = parseInt(champValue, 10);
  if (isNaN(tournoi) || tournoi < 0) {
    displayError(
      champ,
      "Veuillez entrer un nombre valide pour le nombre de tournois."
    );
  } else {
    hideError(champ);
  }
}

// validation du choix du Tournoi (boutons radios)
function checkRadioButton() {
  const radioButtons = document.getElementsByName("location");
  const champ = document.getElementById("location1"); // un des radios pour trouver où mettre l'erreur
  let radioSelected = false;

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      radioSelected = true;
      break;
    }
  }

  if (!radioSelected) {
    displayError(champ, "Vous devez choisir une option.");
  } else {
    hideError(champ);
  }
}

// validation de l'acceptation des Conditions générales
function checkConditions() {
  const champ = document.getElementById("checkbox1");
  const conditionsChecked = champ.checked;
  if (!conditionsChecked) {
    displayError(
      champ,
      "Vous devez vérifier que vous acceptez les termes et conditions."
    );
  } else {
    hideError(champ);
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

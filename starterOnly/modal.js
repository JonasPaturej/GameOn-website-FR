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
const closeBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

let isValid = true;
let errorMessage = "";

// validation du Prénom
function checkFirstName() {
  const prenom = document.getElementById("prenom").value;
  if (prenom.length < 2) {
    //trouver l'élément d'erreur du champ prénom
    //afficher le message d'erreur
    //arrêter la validation
    isValid = false;
    errorMessage =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.\n";
  }
}

// validation formulaire
// document.addEventListener('DOMContentLoaded', function () {
document
  .getElementById("formulaire")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    /*
    let isValid = true;
    let errorMessage = "";
*/
    checkFirstName();
    /*
      // validation du Prénom
      const prenom = document.getElementById('prenom').value;
      if (prenom.length < 2) {
          isValid = false;
          errorMessage += 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.\n';
      }
*/
    // validation du Nom
    const nom = document.getElementById("nom").value;
    if (nom.length < 2) {
      isValid = false;
      errorMessage +=
        "Veuillez entrer 2 caractères ou plus pour le champ du nom.\n";
    }

    // validation de l'Email
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      isValid = false;
      errorMessage += "L'adresse email est invalide.\n";
    }

    // validation date de naissance
    function validate() {
      const birthdateInput = document.getElementById("birthdate");
      const birthdateValue = birthdateInput.value;

      if (!birthdateValue) {
        alert("Vous devez entrer votre date de naissance.");
        return false;
      }

      return true;
    }

    // validation du nombre de tournois
    const tournoi = parseInt(document.getElementById("tournoi").value, 10);
    if (isNaN(tournoi) || tournoi < 0) {
      isValid = false;
      errorMessage +=
        "Veuillez entrer un nombre valide pour le nombre de tournois.\n";
    }

    // validation du bouton tournoi
    const radioButtons = document.getElementsByName("location");
    let radioSelected = false;
    console.log("Nombre de boutons radio : ", radioButtons.length);

    for (let i = 0; i < radioButtons.length; i++) {
      console.log(
        "État du bouton radio " +
          radioButtons[i].id +
          " : " +
          radioButtons[i].checked
      );
      if (radioButtons[i].checked) {
        radioSelected = true;
        break;
      }
    }

    if (!radioSelected) {
      isValid = false;
      errorMessage += "Vous devez choisir une option.\n";
    }

    // validation des conditions générales
    const conditionsChecked = document.getElementById("checkbox1").checked;
    if (!conditionsChecked) {
      isValid = false;
      errorMessage +=
        "Vous devez vérifier que vous acceptez les termes et conditions.\n";
    }

    // affichage des messages d'erreur
    if (isValid) {
      alert("Formulaire validé !");
    } else {
      alert("Erreurs dans le formulaire :\n" + errorMessage);
    }
  });
//});

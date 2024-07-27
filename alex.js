function validerNom(input) {
    let nom = input.value;
    let erreurNom = document.getElementById("error-nom");
    if (nom.length < 2) {
      erreurNom.textContent = "Le nom doit avoir au moins 2 caractères.";
      input.classList.add("invalid");
      input.classList.remove("valid");
      erreurNom.classList.add("show");
    } else {
      erreurNom.textContent = "";
      input.classList.remove("invalid");
      input.classList.add("valid");
      erreurNom.classList.remove("show");
    }
  }
  
  function validerPrenom(input) {
    let prenom = input.value;
    let erreurPrenom = document.getElementById("error-prenom");
    if (prenom.length < 2) {
      erreurPrenom.textContent = "Le prénom doit avoir au moins 2 caractères.";
      input.classList.add("invalid");
      input.classList.remove("valid");
      erreurPrenom.classList.add("show");
    } else {
      erreurPrenom.textContent = "";
      input.classList.remove("invalid");
      input.classList.add("valid");
      erreurPrenom.classList.remove("show");
    }
  }
  
  function validerEmail(input) {
    let email = input.value;
    let erreurEmail = document.getElementById("error-email");
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      erreurEmail.textContent = "Veuillez saisir un email valide.";
      input.classList.add("invalid");
      input.classList.remove("valid");
      erreurEmail.classList.add("show");
    } else {
      erreurEmail.textContent = "";
      input.classList.remove("invalid");
      input.classList.add("valid");
      erreurEmail.classList.remove("show");
    }
  }
  
  function validerFormulaire() {
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
  
    let erreurs = [];
  
    if (nom.length < 2) {
      erreurs.push("Le nom doit avoir au moins 2 caractères.");
    }
    if (prenom.length < 2) {
      erreurs.push("Le prénom doit avoir au moins 2 caractères.");
    }
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      erreurs.push("Veuillez saisir un email valide.");
    }
  
    if (erreurs.length > 0) {
      alert(erreurs.join("\n"));
      return false;
    } else {
      envoyerEmail(nom, prenom, email);
      alert("Inscription réussie !");
      return true;
    }
  }
  
  // Compte à rebours
  let countDownDate = new Date("Dec 25, 2024 15:37:25").getTime(); // Remplacez par la date et l'heure de la prochaine formation
  let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
  
    let mois = Math.floor(distance / (1000 * 60 * 60 * 24 * 30)); // Calcul en mois
    let jours = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    let heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let secondes = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("mois").innerHTML = mois;
    document.getElementById("jours").innerHTML = jours;
    document.getElementById("heures").innerHTML = heures;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("secondes").innerHTML = secondes;
  
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "La formation a commencé!";
    }
  }, 1000);
  
  // Envoi d'email (vous devrez configurer un service d'envoi d'email comme Mailgun ou SendGrid)
  function envoyerEmail(nom, prenom, email) {
    // Configuration du service d'envoi d'email
    let apiKey = "YOUR_MAILGUN_API_KEY"; // Remplacez par votre clé API Mailgun
    let domain = "YOUR_MAILGUN_DOMAIN.com"; // Remplacez par votre domaine Mailgun
  
    // Créez une nouvelle requête HTTP
    let xhr = new XMLHttpRequest();
    xhr.open("POST", `https://api.mailgun.net/v3/${domain}/messages`, true);
    xhr.setRequestHeader("Authorization", "Basic " + btoa("api:" + apiKey));
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  
    // Définissez les données de l'email
    let data = `from=Formation%20<alexemerantdtatchum@gmail.com>&to=${email}&subject=Invitation%20à%20la%20formation&text=Cher(ère) ${nom} ${prenom},\n\nVous êtes cordialement invité(e) à la prochaine formation.`;
  
    // Envoyez l'email
    xhr.send(data);
  }
  
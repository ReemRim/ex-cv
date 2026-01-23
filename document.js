document.getElementById("wireframe-form").addEventListener("submit", function(e){
    e.preventDefault(); 

    const prenom = document.getElementById("prenom").ariaValueText.trim();
    const nom = document.getElementById("nom").ariaValueText.trim();
    const sujet = document.getElementById("sujet").ariaValueText.trim();
    const message = document.getElementById("message").ariaValueText.trim();
    const feedback = document.getElementById("feedback");

    if(!prenom || !nom || !sujet || !message){
        feedback.textContent = "Veuillez remplir tous les champs.";
        feedback.style.color = "red";
    }else{
        feedback.textContent = "Merci pour votre message, " + prenom + "!";
        feedback.style.color = "green";

        document.getElementById("wireframe-form").remove();
    }
    });
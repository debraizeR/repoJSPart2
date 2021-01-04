let boiteTexte = document.getElementById("lastname");

function recupValeur(message){
    window.alert(message);
}

boiteTexte.addEventListener("keydown", (e) => {recupValeur("Vous avez appuyé sur la touche " + e.key);});
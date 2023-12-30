window.addEventListener("DOMContentLoaded", event => {
    document.querySelector("form").addEventListener("submit", event => {
        event.preventDefault();
        let name = document.querySelector("#name").value;
        let email = document.querySelector("#email").value;
        let feedback = document.querySelector("textarea").value;
        if (document.querySelector("form").checkValidity()) {
            console.log(`Nom: ${name} Email: ${email} Commentaire: ${feedback}`);
            document.querySelector("#name").value = "";
            document.querySelector("#email").value = "";
            document.querySelector("textarea").value = "";
            showDialog("Nous avons bien reçu vos commentaires. Merci!")
        } else {
            showDialog("Veuillez saisir un nom et une adresse e-mail valides!")
        }
    })
});

function showDialog(message) {
    alert(message);
    if (window.webkit && window.webkit.messageHandlers 
            && window.webkit.messageHandlers.alert) {
        window.webkit.messageHandlers.alert.postMessage(message);
    } 
}

function injectFormData(name, email="") {
    document.querySelector("#name").value = name;
    document.querySelector("#email").value = email;
}
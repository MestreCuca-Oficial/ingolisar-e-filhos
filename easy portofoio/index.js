function copiarNumero() {
    var tempInput = document.createElement("input");
    tempInput.value = "954355425";
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Número copiado: " + tempInput.value);
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    setTimeout(function() {
        console.log("Hiding chase animation");
        document.querySelector(".chase").style.display = "none";
        var welcomeMessage = document.getElementById("welcome-message");
        console.log("Displaying welcome message");
        welcomeMessage.style.display = "block";
        setTimeout(function() {
            console.log("Adding show class to welcome message");
            welcomeMessage.classList.add("show");
        }, 100); // Pequeno atraso para garantir que a transição funcione
    }, 3000); // 3 segundos para mostrar a mensagem de boas-vindas

    setTimeout(function() {
        console.log("Fading out loading screen");
        document.getElementById("loading-screen").classList.add("fade-out");
    }, 6000); // 6 segundos para começar a desaparecer a tela de carregamento
});
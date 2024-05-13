// Para desplazar suavemente al hacer click en los enlaces del menu de navegación y volver desde el fin de página al inicio
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Evento para que al hacer click en el botón mostrar servicios se muestre la información de tarifas y terapias
document.getElementById("mostrarServiciosBtn").addEventListener("click", function () {
    // Mostrar el párrafo con los servicios
    document.getElementById("servicios").style.display = "block";
    // Mostrar la tabla de precios
    document.getElementById("priceTable").style.display = "block";
});
// Evento para al hacer click se muestre la información del whatsapp, email y maps
document.getElementById("whatsapp").addEventListener("click", function () {
    document.getElementById("showTel").style.display = "block";
});
document.getElementById("email").addEventListener("click", function () {
    document.getElementById("showEmail").style.display = "block";
});
document.getElementById("adress").addEventListener("click", function () {
    document.getElementById("showAdress").style.display = "block";
});


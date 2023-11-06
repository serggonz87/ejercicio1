document.getElementById("tipoSeguro").addEventListener("change", function () {
    var precio = 0;
    var tipoSeguro = this.value;
    if (tipoSeguro === "basico") {
        precio = 500;
    } else if (tipoSeguro === "intermedio") {
        precio = 1000;
    } else if (tipoSeguro === "premium") {
        precio = 1500;
    }
    document.getElementById("precioSeguro").textContent = "$" + precio;
});
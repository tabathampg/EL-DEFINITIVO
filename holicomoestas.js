function cambiamensaje() {
document.getElementById("mensaje").innerText = "Enviado!"
}

setTimeout (cambiamensaje, 5300)

setTimeout (function () {
    alert ("Recibiste el abrazo!!! Te amo")
}, 5600)
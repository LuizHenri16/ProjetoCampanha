const dropdowns = document.querySelectorAll(".dropdown")
const dropContentText = document.querySelectorAll(".dropdown-content")

function toggleDropdown(index) {
    dropdowns.forEach((dropdown, i) => {
        if (i !== index) {
            dropdown.classList.remove("ativo")
        }
        dropdowns[index].classList.toggle("ativo")
    })
}


dropContentText.forEach((dropContentText, index) => {
    dropContentText.addEventListener("mouseleave", () => {
        dropdowns[index].classList.remove("ativo")
    })
})

const whatsAppLink = "https://wa.me/71984771099";
function goToContact() {
    window.open(whatsAppLink)
}

function showOverlay(id) {
    document.getElementById(id).style.display = "flex";
}

// Fechar o overlay com o código para o Pix
function closeOverlay(id) {
    document.getElementById(id).style.display = "none";
}

function copiarCodigo(id) {
    const codeElement = document.getElementById(id)
    const code = codeElement.textContent;

    navigator.clipboard.writeText(code).then(() => {
        alert("Código copiado: " + code)
    })
}





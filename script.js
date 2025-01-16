// Coloco a div dropdown dentro dessa var constante chamada dropdowns, pegando assim todas as existentes
const dropdowns = document.querySelectorAll(".dropdown")
// Coloco a div dropdown-content dentro dessa var constante chamada dropContentText
const dropContentText = document.querySelectorAll(".dropdown-content")

//alterar section1 
const section1Content = document.querySelector("#section1 .content")


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

// Link para o whatsapp, primeiro vou instanciar uma var e iniciar com o link do whatsapp, depois crio a função que vai ser executada ao clicar um botão
const whatsAppLink = "https://wa.me/71984771099";
function goToContact() {
    window.open(whatsAppLink)
}

// Abrir o overlay com o código pix e qrcode
function showOverlay(id) {
    document.getElementById(id).style.display = "flex";
    document.body.style.overflow = "hidden"
}

// Fechar o overlay com o código para o Pix
function closeOverlay(id) {
    document.getElementById(id).style.display = "none";
    document.body.style.overflow = "auto"
}

// Copiar qrcode ao clicar no botão de copiar código
function copiarCodigo(id) {
    const codeElement = document.getElementById(id)
    const code = codeElement.textContent;

    navigator.clipboard.writeText(code).then(() => {
        alert("Código copiado, cole no seu aplicativo de banco favorito!")
    })
}






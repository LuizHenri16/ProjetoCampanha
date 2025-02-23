const dropdowns = document.querySelectorAll(".dropdown")
const dropContentText = document.querySelectorAll(".dropdown-content")

const header = document.getElementById("Header")
const headerText = document.querySelector("#Header .logo p span")


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

// Copiar qrcode ao clicar no botão de copiar cóigo
function copiarCodigo(id) {
    const codeElement = document.getElementById(id)
    const code = codeElement.textContent;

    navigator.clipboard.writeText(code).then(() => {
        alert("Código copiado, cole no seu aplicativo de banco favorito!")
    })
}

window.addEventListener('scroll', function() {
    if(window.scrollY > 40) {
        header.style.backgroundColor = "#447afb";
        headerText.style.color = "white"
    } else if (window.screenY < 100) {
        header.style.backgroundColor = "#fafcff";
         headerText.style.color = "#284cf3"
    }
})


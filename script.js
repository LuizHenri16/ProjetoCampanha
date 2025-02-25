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
        header.style.backgroundColor = "#C4D0F7";
        headerText.style.color = "white"
        header.style.boxShadow = " 1px 1px 3px .5px rgba(135,135,135,0.84)";
    } else if (window.screenY < 100) {
        header.style.backgroundColor = "#fafcff";
         headerText.style.color = "#284cf3"
         header.style.boxShadow = "none";
    }
})


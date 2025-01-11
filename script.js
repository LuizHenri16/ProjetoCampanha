// Coloco a div dropdown dentro dessa var constante chamada dropdowns, pegando assim todas as existentes
const dropdowns = document.querySelectorAll(".dropdown")
// Coloco a div dropdown-content dentro dessa var constante chamada dropContentText
const dropContentText = document.querySelectorAll(".dropdown-content")

//alterar section1 
const section1Content = document.querySelector("#section1 .content")

const mobileSection = `
                    <h3>Seja bem vindo(a) ao nosso
                        espaço de doação!</h3>

                    <h1>Páscoa solidária</h2>
                
                    <button class="donationButton" onclick="location.href='#section2'">Faça sua doação</button>
            
                    <div class="corpoBussola">
                        <img class="centroBussola" src="assets/icons/centroBussola.svg" alt="">
                    </div>
            
                    <div class="campaigntext">
                        <h4>Para algumas crianças a
                            <span>PÁSCOA</span> é bem mais que
                            apenas chocolate! A atenção
                            e o carinho nessa data
                            aquece o coração dos nossos
                            pequeninos. Por
                            isso, a sua doação é tão
                            importante!</h4>
                </div>
`
const desktopSection = `<h1>Páscoa solidária</h2>
                        <div class = "content1">
                            <div class = "content2">
                                <h3>Seja bem vindo(a) ao nosso
                                    espaço de doação!</h3>       
                                <button class="donationButton" onclick="location.href='#section2'">Faça sua doação</button>
                            </div> 
                            <div class="corpoBussola">
                                <img class="centroBussola" src="assets/icons/centroBussola.svg" alt="">
                            </div>
                        </div>      

                        <div class="campaigntext">
                            <h4>Para algumas crianças a
                                <span>PÁSCOA</span> é bem mais que
                                apenas chocolate! A atenção
                                e o carinho nessa data
                                aquece o coração dos nossos
                                pequeninos. Por
                                isso, a sua doação é tão
                                importante!</h4>
                        </div>
` 

//Setar a section com as tags pensando no desktop
function setSectionDesktop() {
    section1Content.innerHTML = desktopSection;
}

//Setar a section com as tags pensando no mobile
function setSectionMobile() {
    section1Content.innerHTML = mobileSection;
}

// Função responsável por trocar para o modo mobile e o modo desktop
function checkScreenSize() {
    if (window.innerWidth >= 1024) {
        setSectionDesktop();
    } else if (window.innerWidth <= 1023) {
        setSectionMobile();
    }
}

// verificar o tamanho da tela sempre que acontecer um evento de resize na página
window.addEventListener('resize', checkScreenSize);
// Fazer a verificação ao carregar a página
window.addEventListener('load', checkScreenSize);


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






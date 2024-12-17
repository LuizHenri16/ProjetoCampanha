const dropdown = document.querySelectorAll(" .sectionsButtonsSelectors .dropdown")
const dropbtn = document.querySelectorAll(" .sectionsButtonsSelectors .dropbtn")
const dropContentText = document.querySelectorAll(" .sectionsButtonsSelectors .dropdown-content")

dropbtn.forEach((dropbtn, index) => {
    dropbtn.addEventListener('click', () => {
        dropdown[index].classList.toggle("ativo")
    })
})

dropContentText.forEach((dropContentText, index) => {
    dropContentText.addEventListener("mouseleave", () => {
        dropdown[index].classList.remove("ativo")
    })
})

const whatsAppLink = "https://wa.me/71984771099";
function goToContact() {
    window.open(whatsAppLink)
}
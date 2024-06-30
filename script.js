const messagesContainer = document.getElementById("messages-container")
let messages = messagesContainer.children
messages = Array.from(messages);

const vueButton = document.getElementById("vue-button")
const reactButton = document.getElementById("react-button")
const tailwindButton = document.getElementById("tailwind-button")
const bootstrapButton = document.getElementById("bootstrap-button")
const aboutButton = document.getElementById("about-button")
const listButton = [vueButton, reactButton, tailwindButton, bootstrapButton, aboutButton]

listButton.forEach((button, index) => {
    button.addEventListener('mouseover', () => {
        messages[index].style.display = 'block'
        messages[index].classList.add('appear');
    })
    
    button.addEventListener('mouseleave', () => {
        messages[index].style.display = 'none'
        messages[index].classList.remove('appear');
    })
});
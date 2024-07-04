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

// Changelog
const changelogList = document.getElementById("changelog-list")
const changelogButton = document.getElementById("changelog-button")
const changelogText = document.getElementById("changelog-text")

document.addEventListener('DOMContentLoaded', () => {
    fetch('./vars.json')
        .then(response => response.json() )
        .then(data => {
            // Usar solo las ultimas actulizaciones
            generateChangeLog(data.lastUpdates)
        })
        .catch(error => {
            console.error('No se conecto con el archivo json de la raiz, error:', error);
        });
});

changelogButton.addEventListener('click', () => {
    if (changelogList.style.display == 'block') {
        changelogList.classList.remove('appear');
        changelogList.style.display = 'none'
        changelogText.style.color = 'rgb(66,66,66)'
    } else {
        changelogList.style.display = 'block'
        changelogList.classList.add('appear');
        changelogText.style.color = 'rgb(0, 13, 115)'
    }

})

function generateChangeLog(changeLog) {
    changeLog.forEach(accion => {
        const newLi = document.createElement('li')
        newLi.textContent = accion

        changelogList.appendChild(newLi)
    });
}
const messagesContainer = document.getElementById("messages-container")
let messages = messagesContainer.children
messages = Array.from(messages);

const vueButton = document.getElementById("vue-button")
const nextButton = document.getElementById("next-button")
const tailwindButton = document.getElementById("tailwind-button")
const bootstrapButton = document.getElementById("bootstrap-button")
const aboutButton = document.getElementById("about-button")
const listButton = [vueButton, nextButton, tailwindButton, bootstrapButton, aboutButton]

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
const changelogText = document.getElementById("changelog-text")

document.addEventListener('DOMContentLoaded', () => {
    fetch('./vars.json')
        .then(response => response.json() )
        .then(data => {
            // Acceso solo las ultimas actulizaciones
            generateChangeLog(data.lastUpdates)
            // Acceso solo a los toDo
            toDoLog(data.toDO)
        })
        .catch(error => {
            console.error('No se conecto con el archivo json de la raiz, error:', error);
        });
});

changelogText.addEventListener('mouseenter', () => {
    changelogList.style.display = 'block'
    changelogList.classList.add('appear');
    changelogText.style.color = 'rgb(0, 13, 115)'
})

changelogText.addEventListener('mouseleave', () => {
    changelogList.style.display = 'none'
    changelogList.classList.remove('appear');
    changelogText.style.color = 'rgb(66,66,66)'
})

function generateChangeLog(changeLog) {
    changeLog.forEach(accion => {
        const newLi = document.createElement('li')
        newLi.textContent = accion

        changelogList.appendChild(newLi)
    });
}

// toDo
const toDoList = document.getElementById("todo-list")
const toDoText = document.getElementById("todo-text")

toDoText.addEventListener('mouseenter', () => {
    toDoList.style.display = 'block'
    toDoList.classList.add('appear');
    toDoText.style.color = 'rgb(0, 13, 115)'
})

toDoText.addEventListener('mouseleave', () => {
    toDoList.style.display = 'none'
    toDoList.classList.remove('appear');
    toDoText.style.color = 'rgb(66,66,66)'
})

function toDoLog(toDoLog) {
    toDoLog.forEach(accion => {
        const newLi = document.createElement('li')
        newLi.textContent = accion

        toDoList.appendChild(newLi)
    });
}

// // Mouse Circle
// const circleMouse = document.getElementById('circle-mouse');

// function updateCircleMousePosition(event) {
//     const mouseX = (event.clientX - 7);
//     const mouseY = (event.clientY - 2);

//     circleMouse.style.left = mouseX + 'px';
//     circleMouse.style.top = mouseY + 'px';
// }

// document.addEventListener('mousemove', updateCircleMousePosition);


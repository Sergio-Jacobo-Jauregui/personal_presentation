// Load json file 
document.addEventListener('DOMContentLoaded', () => {
    fetch('../../../vars.json')
        .then(response => response.json() )
        .then(data => {
            makeChanges(data)
        })
        .catch(error => {
            console.error('No se conecto con el archivo json de la raiz, error:', error);
        });
});

function makeChanges(data)  {
    const linkHome = document.getElementById("link-home")

    linkHome.href = data.principalUrl
}

// Position example
const containerPositionExample = document.getElementById("position-example")
let buttonsPositionExample = containerPositionExample.firstElementChild.children
buttonsPositionExample = Array.from(buttonsPositionExample);
const divPositionExample = document.getElementById("div-position-example")
const messagePositionExample = document.getElementById("message-position-example")
const messages = [
    'static es el predefinido',
    'se mueve y aun ocupa su espacio original',
    'se mueve pero no ocupa su espacio original',
    'combinacion de relative y fixed, use el scroll para ver como se queda pegado',
]

buttonsPositionExample.forEach((button, index) => {
    button.addEventListener('click', () => {
        divPositionExample.style.position = (button.innerText).toLowerCase()
        divPositionExample.style.top = "10px"
        divPositionExample.style.left = "4.5rem"

        messagePositionExample.innerText = messages[index]
        console.log(messages[index]);
    })
});
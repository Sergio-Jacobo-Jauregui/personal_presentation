// Load json file 
document.addEventListener('DOMContentLoaded', () => {
    fetch('../vars.json')
        .then(response => response.json() )
        .then(data => {
            makeChanges(data)
        })
        .catch(error => {
            console.error('No se conecto con el archivo json de la raiz, error:', error);
        });
});

function makeChanges(data)  {
    const linkHome = document.getElementById("go-home")

    linkHome.href = data.principalUrl
}

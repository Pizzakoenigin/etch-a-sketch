'usestrict';

init()

function init() {
    let container = document.createElement('div')
    container.classList.add('container')
    document.querySelector('body').appendChild(container)

    buildGrid(64)
    eventListener()
}

function buildGrid(amount) {
    let container = document.querySelector('.container')
    
    for (let i = 1; i <= amount; i++) {
        let square = document.createElement('div');
        container.appendChild(square)
        square.classList.add('square')
    }
    
    
}

function eventListener() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => (
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = 'red'
        })
    ))
}
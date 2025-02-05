'usestrict';

init()

function init() {
    let container = document.createElement('div')
    container.classList.add('container')
    document.querySelector('body').appendChild(container)

    buildGrid()
    eventListener()
}

function buildGrid() {
    let container = document.querySelector('.container')
    let containerSize = 720
    let squaresPerSide = 100
    let squaresTotal = squaresPerSide * squaresPerSide
    let size = containerSize/squaresPerSide

    container.style.width = `${containerSize}px`
    container.style.height = `${containerSize}px`
    container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`
    
    for (let i = 1; i <= squaresTotal; i++) {
        let square = document.createElement('div');
        // square.style.width = `${size}px`
        // square.style.height = `${size}px`        
        container.appendChild(square)
        square.classList.add('square')

    }

  
    
    
}

function eventListener() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => (
        
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = 'rgba(0,0,0,0.1)'
        })
    ))
}
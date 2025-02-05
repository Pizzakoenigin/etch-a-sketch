'usestrict';

init()

function init() {
    let container = document.createElement('div')
    container.classList.add('container')
    document.querySelector('body').appendChild(container)

    buildSketcharea()
    eventListener()
}

function buildSketcharea() {
    let container = document.querySelector('.container')
    let sketcharea = document.createElement('div')
    let containerSize = 720
    let squaresPerSide = 100
    let squaresTotal = squaresPerSide * squaresPerSide
    let size = containerSize/squaresPerSide

    container.appendChild(sketcharea)

    sketcharea.classList.add('sketcharea')
    sketcharea.style.width = `${containerSize}px`
    sketcharea.style.height = `${containerSize}px`
    sketcharea.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`
    
    for (let i = 1; i <= squaresTotal; i++) {
        let square = document.createElement('div');
        sketcharea.appendChild(square)
        square.classList.add('square')
    }

    
    let resetButton = document.createElement("button")
    container.appendChild(resetButton).textContent = "reset"
    document.querySelector('button').addEventListener('click', () => {
        resetGrid()
    })

}

function resetGrid() {
    document.querySelector("body").removeChild(document.querySelector(".container"));
    init()
}

function eventListener() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => (
        
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = 'rgba(0,0,0,0.1)'
        })
    ))
}
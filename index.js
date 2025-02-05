'usestrict';

init()

function init() {
    let squaresPerSide = 100
    buildSketcharea(squaresPerSide)
}

function buildSketcharea(squaresPerSide) {
    let container = document.createElement('div')
    let currentSquaresLabel = document.createElement('p')
    let sketcharea = document.createElement('div')
    let containerSize = 600
    let squaresTotal = squaresPerSide * squaresPerSide

    container.classList.add('container')
    document.querySelector('body').appendChild(container)   

    container.appendChild(currentSquaresLabel).textContent = `current grid: ${squaresPerSide} x ${squaresPerSide} squares`
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

    buildResetarea(squaresPerSide)
    eventListener()
}

function buildResetarea(squaresPerSide) {
    let container = document.querySelector('.container')
    let resetButton = document.createElement("button")
    let setSquaresPerSide = document.createElement("input")
    let resetLabel = document.createElement("p")

    container.appendChild(setSquaresPerSide)
    container.appendChild(resetButton).textContent = "reset"
    resetButton.classList.add('rstbtn')
    resetLabel.classList.add('rstLabel')

    document.querySelector('input').type = "range"
    document.querySelector('input').min = "1"
    document.querySelector('input').max = "100"
    document.querySelector('input').value = squaresPerSide

    container.appendChild(resetLabel).textContent = `make new grid with ${document.querySelector('input').value} squares`

    document.querySelector('input').addEventListener("input", () => {
        document.querySelector('.rstLabel').textContent = `make new grid with ${document.querySelector('input').value} squares`
        squaresPerSide = document.querySelector('input').value
    })

    document.querySelector('button').addEventListener('click', () => {
        document.querySelector("body").removeChild(document.querySelector(".container"));
        buildSketcharea(squaresPerSide)
    })
}


function eventListener() {
    let squares = document.querySelectorAll('.square');
    // let transparencyStep = 0
    squares.forEach((square) => {
        square.transparencyStep = 0.1;
    })
    squares.forEach((square) => (
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = `rgba(0,0,0,${square.transparencyStep})`
        })
    ))

    squares.forEach((square) => {
        square.addEventListener("mouseout", () => {
            square.transparencyStep = square.transparencyStep + 0.1
        })
    })
}
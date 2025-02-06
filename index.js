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
    let containerSize = 500
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
    buildColorWheels()
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
    setSquaresPerSide.classList.add('rstInput')

    document.querySelector('.rstInput').type = "range"
    document.querySelector('.rstInput').min = "1"
    document.querySelector('.rstInput').max = "100"
    document.querySelector('.rstInput').value = squaresPerSide

    container.appendChild(resetLabel).textContent = `make new grid with ${document.querySelector('.rstInput').value} squares`

    document.querySelector('.rstInput').addEventListener("input", () => {
        document.querySelector('.rstLabel').textContent = `make new grid with ${document.querySelector('.rstInput').value} squares`
        squaresPerSide = document.querySelector('.rstInput').value
    })

    document.querySelector('button').addEventListener('click', () => {
        document.querySelector("body").removeChild(document.querySelector(".container"));
        buildSketcharea(squaresPerSide)
    })
}

function buildColorWheels() {
    let container = document.querySelector('.container')
    let colorDiv = document.createElement('div')
    // let colorLabels = ['red', 'green', 'blue']
    let colorLabels = {'red': {value}}

    container.appendChild(colorDiv).textContent = 'Choose Color'



    for (let i = 0; i < 3; i++) {

        // createColorInput(colorLabels[i])
        let colorInput = document.createElement('input')
        let colorLabel = document.createElement('label')
        // let value
        colorDiv.appendChild(colorLabel)
        // colorLabel.textContent = `${colorLabels[i]}`
        colorLabel.appendChild(colorInput)
        colorLabel.classList.add('colorWheel' + colorLabels[i])
        colorInput.classList.add('colorWheel')
        colorInput.type = "range"
        colorInput.type.min = "0"
        colorInput.type.max = "256"

        colorInput.addEventListener ( "input", () => {
            colorLabels[i].bla = colorInput.value
            console.log(colorLabels[i].bla);

            // colorLabel.textContent = `${colorLabels[i]}: ${value}`
        }

        )
    }

//     let wheels = document.querySelectorAll('colorWheel')
//     wheels.forEach((wheel) => {
//         wheel.addEventListener("input", () => {
//             // let value = colorInput.value
//             console.log(wheel.value);

//             // colorLabel.textContent = `${colorLabels[i]}: ${value}`
//         }

//         )
//     })

// function createColorInput(color) {
//     let colorInput = document.createElement('input')
//     let colorLabel = document.createElement('label')
//     // let value
//     colorDiv.appendChild(colorLabel)
//     // colorLabel.textContent = `${colorLabels[i]}`
//     colorLabel.appendChild(colorInput)
//     colorLabel.classList.add('colorWheelLabel' + color)
//     colorInput.classList.add('colorWheelInput')
//     colorInput.type = "range"
//     colorInput.type.min = "0"
//     colorInput.type.max = "256"

// }



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
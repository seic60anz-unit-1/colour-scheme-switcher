const redBtn = document.querySelector('.red')
const whiteBtn = document.querySelector('.white')
const blueBtn = document.querySelector('.blue')
const yellowBtn = document.querySelector('.yellow')

// const body = document.querySelector('body')

console.log(backRed)

const changeBackRed = function () {
    document.body.style.backgroundColor = redBtn.dataset.color;
}

redBtn.addEventListener('click', changeBackRed)

const changeBackWhite = function () {
    document.body.style.backgroundColor = whiteBtn.dataset.color;
}

whiteBtn.addEventListener('click', changeBackWhite)

const changeBackBlue = function () {
    document.body.style.backgroundColor = blueBtn.dataset.color;
}

blueBtn.addEventListener('click', changeBackBlue)

const changeBackYellow = function () {
    document.body.style.backgroundColor = yellowBtn.dataset.color;
}

yellowBtn.addEventListener('click', changeBackYellow)

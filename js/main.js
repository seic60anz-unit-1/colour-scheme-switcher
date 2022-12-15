// VARIABLES
// const incrementButton = document.querySelector(`.increment`)
// const decrementButton = document.querySelector(`.decrement`)
// const count = document.querySelector(`.count`)
// let number = parseInt(count.textContent)

// // INCREMENT
// const btnClickPlus = function () {
//     number++
//     count.textContent = number;
// }

// incrementButton.addEventListener(`click`, btnClickPlus)



const red = document.querySelector(`.red`)
const yellow = document.querySelector(`.yellow`)
const white = document.querySelector(`.white`)
const blue = document.querySelector(`.blue`)

const redColor = red.dataset.color; 
const yellowColor = yellow.dataset.color;
const whiteColor = white.dataset.color; 
const blueColor = blue.dataset.color; 

// RED
const redClick = function () {
    document.body.className = redColor;
    // document.body.style.backgroundColor = "red";
}

red.addEventListener(`click`, redClick)

// YELLOW
const yellowClick = function () {
    document.body.className = yellowColor;
    // document.body.style.backgroundColor = "yellow";
}

yellow.addEventListener(`click`, yellowClick)

// WHITE
const whiteClick = function () {
    document.body.className = whiteColor;
    // document.body.style.backgroundColor = "white";
}

white.addEventListener(`click`, whiteClick)

// BLUE
const blueClick = function () {
    document.body.className = blueColor;
    // document.body.style.backgroundColor = "blue";
}

blue.addEventListener(`click`, blueClick)
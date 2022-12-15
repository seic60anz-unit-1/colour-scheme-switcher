const red = document.querySelector('.red');
const white = document.querySelector('.white');
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const body = document.querySelector('body');
const colors = document.querySelectorAll('a');
let dataColor = []

for (let i =0; i < colors.length; i++) {
    dataColor.push(colors[i].dataset.color);
}
for (let i =0; i < colors.length; i++) {
    colors[i].addEventListener('click', function() {
        body.style.backgroundColor = dataColor[i]
    })}





// let colorRed = red.dataset.color;
// let colorWhite = white.dataset.color;
// let colorBlue = blue.dataset.color;
// let colorYellow = yellow.dataset.color;

// red.addEventListener('click', function() {
//     body.style.backgroundColor = colorRed
// })
// white.addEventListener('click', function() {
//     body.style.backgroundColor = colorWhite
// })
// blue.addEventListener('click', function() {
//     body.style.backgroundColor = colorBlue
// })
// yellow.addEventListener('click', function() {
//     body.style.backgroundColor = colorYellow
// })


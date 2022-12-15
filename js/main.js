const red = document.querySelector('.red');
const white = document.querySelector('.white');
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const body = document.querySelector('body');
const btnsColor = document.querySelector('.js-buttons');
let dataColor = [];

for (let i = 0; i < btnsColor.children.length; i++) {
    dataColor.push(btnsColor.children[i].firstElementChild.dataset.color);
}
for (let i = 0; i < btnsColor.children.length; i++) {
    btnsColor.children[i].addEventListener('click', function() {
        body.style.backgroundColor = dataColor[i];
    })
}


console.log(btnsColor.children[1]);
console.log(white)







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


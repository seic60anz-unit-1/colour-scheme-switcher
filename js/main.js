const redBtn = document.querySelector('.red')
const whiteBtn = document.querySelector('.white')
const blueBtn = document.querySelector('.blue')
const yellowBtn = document.querySelector('.yellow')


// RED BUTTON
redBtn.addEventListener('click', function() {
    const body = document.querySelector('body')
    body.style.backgroundColor = redBtn.dataset.color
})

// WHITE BUTTON
whiteBtn.addEventListener('click', function() {
    const body = document.querySelector('body')
    body.style.backgroundColor = whiteBtn.dataset.color
})

// BLUE BUTTON
blueBtn.addEventListener('click', function() {
    const body = document.querySelector('body')
    body.style.backgroundColor = blueBtn.dataset.color
})

// YELLOW BUTTON
yellowBtn.addEventListener('click', function() {
    const body = document.querySelector('body')
    body.style.backgroundColor = yellowBtn.dataset.color
})
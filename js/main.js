// Update the js/main.js file such that when a user clicks on one of the coloured dots the background colour of the entire page changes to match that dot. You do not need to change any HTML or CSS.

// Study the index.html and css/style.css files first and figure out how to get the colour from the clicked dots and how to apply that colour to the whole page.

const body = document.querySelector('body')
const switchbtn = document.querySelector('.js-buttons')

// const redBtn = document.querySelector('.red')
// console.log(switchbtn)
// for (let btn of switchbtn.children){
//     console.log(btn)
// }
// console.log(redBtn.dataset.color)

    for (let btn of switchbtn.children){
        // console.dir(btn.children[0].dataset.color)
        // console.log('hello')
        // console.log(btn.children[0].dataset.color)
        // console.log(btn.children.dataset.color)
        btn.addEventListener('click', function(){
            body.style.backgroundColor = btn.children[0].dataset.color ;
            // console.log(button)
            // console.log(btn.children[0].dataset.color)
        })
    }


// HINTS
// The coloured dots have their colours in a data-color attribute.
// The css/style.css file has styles for each colour using classes (.red, .white, .blue, .yellow). You need to apply that class to the body element.
// Instead of classList, it'll be easier to use the body element's className property instead.


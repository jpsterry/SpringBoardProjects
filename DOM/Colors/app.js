const h1 = document.querySelector('h1')
const letters = document.querySelectorAll('.letter')



const randomColor = () => {

    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`

}


const timer = setInterval(function () {

    for (let letter of letters) {
        letter.style.color = randomColor()
    }

}, 2000)

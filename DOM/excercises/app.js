document.getElementById('container')
document.querySelector('#container')
document.querySelectorAll('.second')
document.querySelector("ol .third")
document.querySelector('#container').innerText = "Hello"
document.querySelector('.footer').classList.add("main")
document.querySelector('.footer').classList.remove("main")
const li = document.createElement(li)
li.innerText = "four"
document.querySelector("ul").appendChild(li)
let lis = document.querySelectorAll("ol li")
for (let li of lis) {
    li.style.backgroundColor = 'green'
}
document.querySelector('.footer').remove()
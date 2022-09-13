const form = document.querySelector('#meme-form')


const memeURL = document.querySelector("#mUrl")
const memeTop = document.querySelector("#mTopText")
const memeBot = document.querySelector("#mBotText")
const body = document.querySelector("body")
const container = document.querySelector('#meme-container')

body.addEventListener('click', (e) => {

    // console.log(e.target.classList)

    if (e.target.classList.value.includes("remove-btn")) {
        e.target.parentElement.remove()
    }


})




const formSubmit = (u, t, b) => {

    const div = document.createElement("div")
    const img = document.createElement("div")
    const topText = document.createElement("span")
    const botText = document.createElement("span")
    const removeBtn = document.createElement("div")

    topText.innerText = t
    botText.innerText = b
    img.style.backgroundImage = `url("${u}")`
    removeBtn.innerText = "X"

    topText.classList.add('meme-top')
    botText.classList.add('meme-bot')
    div.classList.add('meme-div')
    removeBtn.classList.add('remove-btn')
    img.classList.add('img')


    div.appendChild(topText)
    div.appendChild(botText)
    div.appendChild(img)
    div.appendChild(removeBtn)
    container.appendChild(div)

    memeURL.value = ''
    memeTop.value = ''
    memeBot.value = ''



}




form.addEventListener('submit', (e) => {

    e.preventDefault()
    if (memeURL.value === '') {
        alert("Meme URL must contain a value")
    }
    else {
        formSubmit(memeURL.value, memeTop.value, memeBot.value)
    }


})



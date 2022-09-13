const todoList = document.querySelector(".todo-list")
const form = document.querySelector("#todo-form")
const newTodo = document.querySelector("#todo-text")



todoList.addEventListener('click', (e) => {



    if (e.target.classList.value.includes("remove-btn")) {
        e.target.parentElement.remove()
    }
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("strike")
    }
    localStorage.setItem('todoListItems', todoList.innerHTML)

})


const formSubmit = (u) => {

    const newLi = document.createElement("li")
    const remove = document.createElement("button")


    newLi.innerHTML = u + `&emsp;&emsp;&emsp;`
    remove.innerText = "X"

    remove.classList.add("remove-btn")

    newLi.append(remove)
    todoList.appendChild(newLi)


    newTodo.value = ''

    localStorage.setItem('todoListItems', todoList.innerHTML)


}





form.addEventListener('submit', (e) => {

    e.preventDefault()
    if (newTodo.value === '') {
        alert("Todo must contain a value")
    }
    else {
        formSubmit(newTodo.value)
    }


})
const saved = localStorage.getItem('todoListItems')

if (saved) {

    todoList.innerHTML = saved

}
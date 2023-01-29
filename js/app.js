const firstInput = document.querySelector('.first-input')
const secondInput = document.querySelector('.second-input')
const btn = document.querySelector('.add-btn')
const ul = document.querySelector('.ul')
const form = document.querySelector('.form')
const success = document.querySelector('.success')





function view() {
    const tasks = JSON.parse(localStorage.getItem('task')) || []
    ul.innerHTML = ''
    tasks.map((el, idx) => {
        ul.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
        <div class="line">${el.name[0].toUpperCase()}${el.username[0].toUpperCase()}</div>  Имия: ${el.name} Фамилия: ${el.username}  <button class="del-btn btn btn-danger">Удалить</button> </li>`
    })
    deleteTask()
firstInput.value = ''
secondInput.value = ''
}

view()

btn.addEventListener('click', () => {
    if (firstInput.value !== '' && secondInput.value !== '') {
        let tasks = JSON.parse(localStorage.getItem('task')) || []
        const newTask = {
            id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            name: firstInput.value,
            username: secondInput.value,
        }
        tasks = [...tasks, newTask]
        localStorage.setItem('task', JSON.stringify(tasks))
        view()
        firstInput.style.border = '2px solid green'
        secondInput.style.border = '2px solid green'
    }else if (firstInput.value === '' && secondInput.value === ''){
        firstInput.style.border = '2px solid red'
        secondInput .style.border = '2px solid red'
    }
})

function deleteTask() {
    let tasks = JSON.parse(localStorage.getItem('task')) || []
    const buttons = document.querySelectorAll('.del-btn')
    buttons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            tasks = tasks.filter((el, idx) => {
                return index !== idx
            })
            localStorage.setItem('task', JSON.stringify(tasks))
            view()
        })
    })
}

firstInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter'){
        secondInput.focus()
    }
})

secondInput.addEventListener('keydown',(e)=>{
    if (e.key === 'Enter'){
        btn.focus()
    }
})














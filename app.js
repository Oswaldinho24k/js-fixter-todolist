//dom variables
const taskInput = document.querySelector('input')
const form = document.querySelector('.form')
const todosList = document.querySelector('.todos')



//variables
const todosArray = [
    {
        task:'Traer chelas 🍻🍻🍻',
        done:true
    },{
        task:'Comprar pizza 🍕🍕🍕',
        done:true
    }    
]

let newTodo = {
    task:'',
    done:false
}


//functions

const showTodos=()=>{
    todosList.innerHTML = ''
    todosArray.forEach((el, idx)=>{
        const li = document.createElement('li')
        li.innerText = el.task
        //check if task is done
        if(el.done)li.style.textDecoration = 'line-through'
        // add click listener
        li.addEventListener('click', (e)=>handleStatus(e, idx))
        todosList.appendChild(li)    
    })
}
const handleStatus=(e, todoIdx)=>{    
    console.log(todosArray[todoIdx])
    if(todosArray[todoIdx].done===true){
        todosArray[todoIdx].done = false
        e.target.style.textDecoration = 'none'
    }else {
        todosArray[todoIdx].done = true
        e.target.style.textDecoration = 'line-through'
    }
    console.log(todosArray[todoIdx])   
}

const handleInput = (event) => {
    newTodo = Object.assign({}, newTodo)
    newTodo['task'] = event.target.value
    console.log(event.target.value)
}

const handleSubmit = (event) =>{
    event.preventDefault()
    todosArray.push(newTodo)
    console.log(todosArray)
    showTodos()
    taskInput.value = ''  
}
//events
taskInput.addEventListener('input', handleInput)
form.addEventListener('submit', handleSubmit)
showTodos()
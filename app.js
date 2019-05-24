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
        const text = document.createElement('span')
        const btn = document.createElement('button')
        text.innerText = el.task
        btn.innerText="X"
        //check if task is done
        if(el.done)text.style.textDecoration = 'line-through'
        // add click listener
        text.addEventListener('click', (e)=>handleStatus(e, idx))
        btn.addEventListener('click', (e)=>handleDelete(e, idx))
        li.appendChild(btn)
        li.appendChild(text)        
        todosList.appendChild(li)  
    })
}

const handleDelete =(e, idx)=>{
    todosArray.splice(idx, 1)
    // const lis = document.querySelectorAll('li')
    // todosList.removeChild(lis[idx])
    showTodos()
    
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
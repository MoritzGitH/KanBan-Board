import { generateLists, findHighestId } from "./script.js";
import { todo, doing, done} from "./dragDrop.js"

removeListener()

export function removeListener () {
document.querySelectorAll('.trashcan-img').forEach((e) => {
  e.addEventListener('click', () => {
    let id = e.dataset.id

    todo.forEach((item, i) => {
      if (todo[i].id == id) {
        todo.splice(i, 1)
      }
    })
    doing.forEach((item, i) => {
      if (doing[i].id == id) {
        doing.splice(i, 1)
        console.log(i)
      }
    })
    done.forEach((item, i) => {
      if (done[i].id == id) {
        done.splice(i, 1)
      }
    })
    
    localStorage.setItem('todo', JSON.stringify(todo))
    localStorage.setItem('doing', JSON.stringify(doing))
    localStorage.setItem('done', JSON.stringify(done))
    generateLists()
  })
})
}

export function changeName () {

document.querySelectorAll('.js-name').forEach((name) => {
  name.addEventListener('click', () => {
    document.querySelector('.js-name-container').classList.add('name-container-visible')
    document.querySelector('.js-old-name').innerHTML = name.innerHTML
    
  })
})


document.querySelector('.js-rename-submit').addEventListener('click', () => {
   const newName = document.querySelector('.js-new-name-input').value
   document.querySelector('.js-new-name-input').value = ''
  

  const button = document.querySelector('.js-rename-submit')
  const oldNameElement = button.parentElement.childNodes[1]
  const oldName = oldNameElement.innerHTML

  
  todo.forEach((e, i) => {
    if (todo[i].name == oldName) {
      todo[i].name = newName
      localStorage.setItem('todo', JSON.stringify(todo))
      generateLists()
    }
  })

  doing.forEach((e, i) => {
    if (doing[i].name == oldName) {
      doing[i].name = newName
      localStorage.setItem('doing', JSON.stringify(doing))
      generateLists()
    }
  })

  done.forEach((e, i) => {
    if (done[i].name == oldName) {
      done[i].name = newName
      localStorage.setItem('done', JSON.stringify(done))
      generateLists()
    }
  })

  document.querySelector('.js-name-container').classList.remove('name-container-visible')
  changeName()
})

document.querySelector('.js-close-rename').addEventListener('click', () => {
  document.querySelector('.js-name-container').classList.remove('name-container-visible')
})
}

let isAdding = false

document.querySelector('.js-add-todo-icon').addEventListener('click', () => {
  if (!isAdding) {
    document.querySelector('.js-new-todo-input').classList.add('new-todo-input-visible')

    
  document.querySelector('body').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      if (todo.length == 6) {
        document.querySelector('.js-new-todo-input').value = 'Maximum erreicht';
        setTimeout(() => {
          document.querySelector('.js-new-todo-input').value = ``
        }, 1750)
      } else {
      addNewTodo() }
  }
})

    isAdding = true
} 
  else {
    document.querySelector('.js-new-todo-input').classList.remove('new-todo-input-visible')

    isAdding = false
  }
})

export function addNewTodo () {
  if (isAdding) {
  const newTodoName = document.querySelector('.js-new-todo-input').value
  document.querySelector('.js-new-todo-input').value = ''
  
  let id = findHighestId ()
  id ++;
  console.log(id + ' 2')
  
  todo.push({name: newTodoName, id: id})
  localStorage.setItem('todo', JSON.stringify(todo))
  generateLists()

  document.querySelector('.js-new-todo-input').classList.remove('new-todo-input-visible')
  isAdding = false
  }
}
import { removeListener, changeName } from "./editItem.js"
import { dragDrop, todo, doing, done, getLists } from "./dragDrop.js"


let id = -1


generateLists()

export function generateLists () {
  getLists()
  let todoHTML
  if (!todo[0]) {
    document.querySelector('.js-left').innerHTML = ''} else {
  todo.forEach((e, i) => {
   todoHTML += `
   <div class="list list-todo" draggable="true">
      <img class="list-img" src="images/icon.png"><div class="name js-name" data-id="${todo[i].id}">${todo[i].name}</div> 
      <img class="trashcan-img" id="trashcan" src="images/trashcan-icon.png" data-id="${todo[i].id}">
    </div>`
 
    document.querySelector('.js-left').innerHTML = todoHTML
  })
}

  let doingHTML
  
  if (!doing[0]) {
    document.querySelector('.js-middle').innerHTML = ''} else {

  doing.forEach((e, i) => {
   doingHTML +=`
   <div class="list list-doing" draggable="true">
      <img class="list-img" src="images/icon.png"><div class="name js-name" data-id="${doing[i].id}">${doing[i].name}</div>
      <img class="trashcan-img" id="trashcan" src="images/trashcan-icon.png" data-id="${doing[i].id}">
    </div>`
 
    document.querySelector('.js-middle').innerHTML = doingHTML
  })
}

  
  let doneHTML

  if (!done[0]) {
    document.querySelector('.js-right').innerHTML = ''} else {

  done.forEach((e, i) => {
    
   doneHTML += `
   <div class="list list-done" draggable="true">
      <img class="list-img" src="images/icon.png"><div class="name js-name" data-id="${done[i].id}">${done[i].name}</div>
      <img class="trashcan-img" id="trashcan" src="images/trashcan-icon.png" data-id="${done[i].id}">
    </div>`
 
    document.querySelector('.js-right').innerHTML = doneHTML
  })
}
  
  localStorage.setItem('todo', JSON.stringify(todo))
  localStorage.setItem('doing', JSON.stringify(doing))
  localStorage.setItem('done', JSON.stringify(done))
  removeListener()
  dragDrop();
  changeName();
}




export function findHighestId () {
  id = -1;
  todo.forEach(() => {
    id ++;
  })
  doing.forEach(() => {
    id ++;
  })
  done.forEach(() => {
    id ++;
  })
  console.log(id + ' 1')
  return id;
}
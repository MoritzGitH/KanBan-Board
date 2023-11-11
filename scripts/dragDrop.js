import { changeName, removeListener } from "./editItem.js"
import { generateLists } from "./script.js"


  export let todo = JSON.parse(localStorage.getItem('todo'))
  export let doing = JSON.parse(localStorage.getItem('doing'))
  export let done = JSON.parse(localStorage.getItem('done'))

if (!todo) {todo = [
  {name: 'List Item 1', id: 0}, {name:'List Item 4', id: 3}]}

if (!doing) {doing = [{name:'List Item 2', id: 1}]}

if (!done) {done = [{name:'List Item 3', id: 2}]}

saveLists ()

dragDrop();

export function dragDrop () {

let lists = document.getElementsByClassName("list");
let leftBox = document.getElementById("left")
let middleBox = document.getElementById("middle")
let rightBox = document.getElementById("right")

for (const list of lists) {
  list.addEventListener("dragstart", function(e){
    let selected = e.target;

    middleBox.addEventListener("dragover", function(e){
      if (doing.length == 6) {} else {
      e.preventDefault(); }
    });
    middleBox.addEventListener("drop", function(e) {
      middleBox.appendChild(selected);
      let id
      todo.forEach((item, i) => {
        if (selected.innerText == todo[i].name) {
          id = todo[i].id 
          const index = todo.indexOf(todo[i])
          todo.splice(index, 1)
        }
      });
      
      done.forEach((item, i) => {
        if (selected.innerText == done[i].name) { 
          id = done[i].id 
          const index = done.indexOf(done[i])
          done.splice(index, 1)
        }
      });
      selected = null;
      let middleHTML = document.getElementById("middle")
      doing = []
      for (const child of middleHTML.children) {

        const childName = child.innerText
        const childId = child.childNodes[4].dataset.id

        doing.push({name: childName, id: childId}) 
      }
      saveLists()
      generateLists()
    })

    leftBox.addEventListener("dragover", function(e){
      if (todo.length == 6) {} else {
      e.preventDefault(); }
    });

    leftBox.addEventListener("drop", function(e) {
      leftBox.appendChild(selected);
      let id
      doing.forEach((item, i) => {
        if (selected.innerText == doing[i].name) { 
          id = doing[i].id
          const index = doing.indexOf(doing[i])
          doing.splice(index, 1)
        }
      });
      
      done.forEach((item, i) => {
        if (selected.innerText == done[i].name) {
          id = done[i].id 
          const index = done.indexOf(done[i])
          done.splice(index, 1)
        }
      });
      selected = null;

      let leftHTML = document.getElementById("left")
      todo = []
      for (const child of leftHTML.children) {
        const childName = child.innerText
        const childId = child.childNodes[4].dataset.id
        todo.push({name: childName, id: childId}) 
      }
      saveLists()
      generateLists()
    })

    rightBox.addEventListener("dragover", function(e){
      if (done.length == 6) {} else {
      e.preventDefault(); }
    });

    rightBox.addEventListener("drop", function(e) {
      rightBox.appendChild(selected);
      let id
      todo.forEach((item, i) => {
        if (selected.innerText == todo[i].name) {
          id = todo[i].id 
          let index = todo.indexOf(todo[i])
          todo.splice(index, 1)
        }
      });
      
      doing.forEach((item, i) => {
        if (selected.innerText == doing[i].name) { 
          id = doing[i].id
          let index = doing.indexOf(doing[i])
          doing.splice(index, 1)
        }
      });
      selected = null;

      let rightHTML = document.getElementById("right")
      done = []
      for (const child of rightHTML.children) {
        const childName = child.innerText
        const childId = child.childNodes[4].dataset.id
        done.push({name: childName, id: childId})
      }
      saveLists()
      generateLists()
    })


  })
}
}

export function getLists () {
  todo = JSON.parse(localStorage.getItem('todo'))
  doing = JSON.parse(localStorage.getItem('doing'))
  done = JSON.parse(localStorage.getItem('done'))
}

export function saveLists () {
      localStorage.setItem('todo', JSON.stringify(todo))
      localStorage.setItem('doing', JSON.stringify(doing))
      localStorage.setItem('done', JSON.stringify(done))
}






// const todoInput = document.querySelector(".todo-input"); //class
// console.log(todoInput);


// const todoInputBtn = document.querySelector(".todo-input-button");
// console.log(todoInputBtn);

// const todoList = document.querySelector(".todo-list");
// console.log(todoList); 

// todoInputBtn.addEventListener("click", function( ){

    

//     //인풋에 있는 투두 내용 가져오기
//     const todo = todoInput.value;
//     console.log(todo);
//     //할일 요소 만들기
//     const span =document.createElement("span");

//     //할일 요소에 할일 값 넣기
//     span.textContent = todo;

//     //할일 리스트 추가하기  //   ul에다가 추가해야한다
//     todoList.appendChild(span);
// });

const addButton = document.querySelector(".todo-input-button");
const putTodo = document.querySelector(".todo-input");
const createList = document.querySelector(".todo-list");

addButton.addEventListener("click", function(){
 const putText = putTodo.value 
 if(putText === "") {
    alert("할일을 입력해주세요")
    return;
}

 const listItem = document.createElement("li")
 listItem.className= "todo-item";

 const label = document.createElement("label")


 const checkbox = document.createElement("input") 
 checkbox.type = "checkbox"

const span = document.createElement("span")
span.textContent = putText;

const delButton = document.createElement("button");
delButton.className= "delButton";
delButton.textContent= "X";

label.appendChild(checkbox);
label.appendChild(span);

listItem.appendChild(label);

listItem.appendChild(delButton);

createList.appendChild(listItem);

putTodo.value = "";

  

delButton.addEventListener("click", function ( ){
  createList.removeChild(listItem);
});





});
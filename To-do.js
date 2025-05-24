    let add = document.getElementById("add");
    let error= document.getElementById("Perror")
    let taskbeingEdited=null;

    //for local storage 
let unfinishedTask =[]

window.onload = function(){
unfinishedTask = JSON.parse(localStorage.getItem("unfinished")) || [];
 loadunfinishedTask();
};
 
// for validation 
   let formValidation=()=>{
     if (add.value.trim()===""){
     error.style.display="block"  
   } else{
     error.style.display="none"
     addTask();
   }
  }

  function loadunfinishedTask(){
    unfinishedTask.forEach(taskText=>{
      createTaskElement(taskText)
    });
  }

  //  Function for UNfinshied Tasks
  //  Editing of Task  is also include 
  
   function addTask (){
    let inputValue = add.value;
       if (taskbeingEdited !==null){
           let oldText = taskbeingEdited.textContent;
    let index = unfinishedTask.indexOf(oldText);
    if (index !== -1) {
      unfinishedTask[index] = inputValue; 
    }
      taskbeingEdited.textContent=inputValue
      taskbeingEdited=null;
       document.getElementById("add").value="";
       localStorage.setItem("unfinished", JSON.stringify(unfinishedTask));
       }
       else{
     createTaskElement(inputValue);
    unfinishedTask.push(inputValue);
    localStorage.setItem("unfinished", JSON.stringify(unfinishedTask)); 
    add.value = "";
       }
      } 
      function createTaskElement(taskText) { 
     let div=document.createElement("div");

     let checkbox=document.createElement("input");
     checkbox.type="checkbox";
     checkbox.addEventListener("click",completeTask)

     let label= document.createElement("label");
     label.textContent= taskText

     let span = document.createElement("span");
     span.className = "options";
     
     let editIcon = document.createElement("i");
     editIcon.className ="fa-solid fa-pen-to-square";
     editIcon.addEventListener("click", editTask);

     let deleteIcon = document.createElement("i");
     deleteIcon.className ="fa-solid fa-trash";
     deleteIcon.addEventListener("click",DeleteTask)

    
     div.appendChild(checkbox);
      div.appendChild(label);
      span.appendChild(editIcon);
      span.appendChild(deleteIcon);
      div.appendChild(span);

    document.getElementById("Tasks").appendChild(div);

    document.getElementById("add").value = "";
     }
  
  // Task Edit 
 function editTask(e){
       let parentElement = e.target.parentElement.parentElement;
       let label = parentElement.querySelector("label");
       let currentText = label.textContent;
       document.getElementById("add").value=currentText
       taskbeingEdited = label;
 }

 // Task delete 
  function DeleteTask (e){
    let parentElement = e.target.parentElement.parentElement;
   let label = parentElement.querySelector("label");
    let taskText = label.textContent;
    parentElement.remove()
    unfinishedTask = unfinishedTask.filter(task => task !== taskText);
     localStorage.setItem("unfinished", JSON.stringify(unfinishedTask));
  }

// if Task complete Remove Task from Unfished Task
     function completeTask(e){
     let parentElement = e.target.parentElement;
     let label = parentElement.querySelector("label")
     let taskText = label.textContent

     parentElement.remove();
    unfinishedTask = unfinishedTask.filter(task => task !== taskText);
     localStorage.setItem("unfinished", JSON.stringify(unfinishedTask));
       finshedTask(taskText);
     }
//  Add to finshed task // set to local storage in last line but i not useing relode function  this finished task 
  function finshedTask(text){
     let div=document.createElement("div");
      div.textContent=text;
      document.getElementById("ResultBoxs").appendChild(div) 
    taskFinished.push(text); 
  }
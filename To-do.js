    let add = document.getElementById("add");
    let error= document.getElementById("Perror")
    let taskbeingEdited=null;

   let formValidation=()=>{
     if (add.value.trim()===""){
     error.style.display="block"
   } else{
     error.style.display="none"
     addTask();
   }
  }

  //  Function for UNfinshied Tasks
  //  Editing of Task  is also include 
  
   function addTask (){
let inputValue = add.value;
       if (taskbeingEdited !==null){
        taskbeingEdited.textContent=inputValue
        taskbeingEdited=null;
        document.getElementById("add").value="";
       }
       else{
     let div=document.createElement("div");

     let checkbox=document.createElement("input");
     checkbox.type="checkbox";

     let label= document.createElement("label");
     label.textContent= inputValue

     let span = document.createElement("span");
     span.className = "options";
     
     let editIcon = document.createElement("i");
     editIcon.className ="fa-solid fa-pen-to-square";
     editIcon.addEventListener("click", editTask);

     let deleteIcon = document.createElement("i");
     deleteIcon.className ="fa-solid fa-trash";

      div.appendChild(checkbox);
      div.appendChild(label);
      span.appendChild(editIcon);
      span.appendChild(deleteIcon);
      div.appendChild(span);
      
    document.getElementById("Tasks").appendChild(div);
    document.getElementById("add").value = "";
       }
     
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
 

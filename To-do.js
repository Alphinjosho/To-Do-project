    let add = document.getElementById("add");
    let error= document.getElementById("Perror")

   let formValidation=()=>{
     if (add.value.trim()===""){
     error.style.display="block"
   } else{
     error.style.display="none"
     addTask();
   }
  }

  //  Function for UNfinshied Tasks
   function addTask (){
     let div=document.createElement("div");
     let checkbox=document.createElement("input");
     checkbox.type="checkbox";
     let label= document.createElement("label");
     label.textContent= document.getElementById("add").value;
     let span = document.createElement("span");
     span.className = "options";
     let editIcon = document.createElement("i");
     editIcon.className ="fa-solid fa-pen-to-square";
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
      
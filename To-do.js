    let add = document.getElementById("add");
    let error= document.getElementById("Perror")



    // add.addEventListener("",(e)=>{
    //     e.preventDefault();
    //     formValidation();
    // })

   let formValidation=()=>{
     if (add.value.trim()===""){
     error.style.display="block"
   } else{
     error.style.display="none"
   }
  }

  //  Function for UNfinshied Tasks
  
    
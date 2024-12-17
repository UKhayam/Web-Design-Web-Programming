
function handleSubmit(){
   let number =  document.getElementById("number").value;

   if (number === ""){
    alert("Please Enter a Number...!");
   }else{
    if(number % 2 === 0){
        if( number > 0){
            alert("Even and Positive");
        }
        else{
            alert("Even & Negative");
        }
    }
    else{
        if(number > 0){
            alert("Postive Odd");
        }
        else{
            alert("Negative Odd");
        }
    }
   }
}


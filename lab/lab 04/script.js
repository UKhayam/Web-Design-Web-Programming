
function validate(event){

    event.preventDefault();

    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const errorMessage = document.getElementById("error");

    if(!email.includes("@")){
        errorMessage.textContent = "Invalid Email Address";
        return false;
    }
    if(name === ""){
        errorMessage.textContent = "Enter A Name Please...";
        return false;
    }

    errorMessage.textContent = "";
    alert("Form Submited Successfully...");
    return true;
}


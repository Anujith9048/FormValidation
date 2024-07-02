function addnums(){ 
    var firstName =document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var adress =document.getElementById("adress").value;
    var mobNo =document.getElementById("mobNo").value;
    var email =document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirmPass = document.getElementById("conformPass").value;
   
    if(firstName ===""){
        document.getElementById("firstError").innerText = "Enter first name";
    }
    else{
        document.getElementById("firstError").innerText = "";
    } 

    if(lastName ===""){
        document.getElementById("lastError").innerText = "Enter last name";
    }
    else{
        document.getElementById("lastError").innerText = "";
    }

    if(adress ===""){
        document.getElementById("adressError").innerText = "Enter address ";
    }
    else{
        document.getElementById("adressError").innerText = "";
    }

    if(mobNo ===""){
        document.getElementById("mobError").innerText = "Enter mobile number";
    }
    else{
        document.getElementById("mobError").innerText = "";
    }

    if(email ===""){
        document.getElementById("emailError").innerText = "Enter email id";
    }
    else{
        document.getElementById("emailError").innerText = "";
    }

    if(pass ===""){
        document.getElementById("passError").innerText = "Enter password";
    }
    else{
        document.getElementById("passError").innerText = "";
    }

    if(confirmPass ===""){
        document.getElementById("confirmError").innerText = "confirm password";
    }
    else{
        document.getElementById("confirmError").innerText = "";
    }
       

    if(pass === confirmPass){
       document.getElementById("confirmError").innerText = "";
    }
    else{
       document.getElementById("confirmError").innerText = "Password incorrect!!!";
    }
}
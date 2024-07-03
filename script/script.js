document.addEventListener('DOMContentLoaded', function() {
        document.getElementById("mobNo").addEventListener('input', function(e) {
            let value = e.target.value;
            e.target.value = value.replace(/[^0-9]/g, '');
        });
});

function addnums(){ 
    var firstName =document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var adress =document.getElementById("adress").value;
    var email =document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirmPass = document.getElementById("conformPass").value;
    var mobNo =document.getElementById("mobNo").value;
    var isValid = 0;

    if(firstName ===""){
        document.getElementById("firstError").innerText = "Enter first name";
    }
    else{
        document.getElementById("firstError").innerText = "";
	isValid++;
    } 

    if(lastName ===""){
        document.getElementById("lastError").innerText = "Enter last name";
    }
    else{
        document.getElementById("lastError").innerText = "";
	isValid++;
    }

    if(adress ===""){
        document.getElementById("adressError").innerText = "Enter address ";
    }
    else{
        document.getElementById("adressError").innerText = "";
	isValid++;
    }

    if(mobNo ===""){
        document.getElementById("mobError").innerText = "Enter mobile number";
    }
    else{
        document.getElementById("mobError").innerText = "";
	isValid++;
    }

    if(email ===""){
        document.getElementById("emailError").innerText = "Enter email id";
    }
    else if(!email.endsWith("@gmail.com")){
        document.getElementById("emailError").innerText = "Email must end with @gmail.com";
    }
    else{
        document.getElementById("emailError").innerText = "";
	isValid++;
    }

    if(pass ===""){
        document.getElementById("passError").innerText = "Enter password";
    }
    else{
        document.getElementById("passError").innerText = "";
	isValid++;
    }

    if(confirmPass ===""){
        document.getElementById("confirmError").innerText = "confirm password";
    }
    else{
        document.getElementById("confirmError").innerText = "";
	isValid++;
    }
    if(pass === confirmPass){
        let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/; 
	if(pattern.test(pass)){
	    document.getElementById("confirmError").innerText = "";
	    isValid++;
	}
	else{
	    document.getElementById("confirmError").innerText = "Your password is not strong!";
	}
    }
    else{
       document.getElementById("confirmError").innerText = "Password incorrect!!!";
    }
    
    if(isValid === 8){
	alert("Login Successfull !");
    }
}
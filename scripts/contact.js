var submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function(event){
    var subjectField = document.getElementById("subject").value;
    var emailField = document.getElementById("email").value;
    var messageField = document.getElementById("message").value;

    var subjectValidated = false;
    var emailValidated = false;
    var messageValidated = false;

    if(subjectField === ""){
        document.getElementById("subjectError").style.display = "block";
    }
    else{
        document.getElementById("subjectError").style.display = "none";
        var subjectValidated = true;
    }

    if(messageField === ""){
        document.getElementById("messageError").style.display = "block";
    }
    else{
        document.getElementById("messageError").style.display = "none";
        var messageValidated = true;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9._-]{2,24}$/;
    var emailTest = emailPattern.test(emailField);
    if(emailTest === false){
        document.getElementById("emailError").style.display = "block";
    }
    else{
        document.getElementById("emailError").style.display = "none";
        var emailValidated = true;
    }

    if (subjectValidated && emailValidated && messageValidated){
        window.location.href = 'contact_success.html';
    }
});

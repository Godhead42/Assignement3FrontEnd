function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;

    if (username.trim() === "" || email.trim() === "") {
        alert("Please fill in all fields.");
        return false; 
    }

    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*[@][a-zA-Z0-9]*[\.][a-z]{2,4}$/;
    if (!email.match(emailRegex)) {
        alert("Invalid email address.");
        return false; 
    }

    alert("Success: You have successfully registered");
    return true;
}

var Godhead = JSON.parse(localStorage.getItem("Godhead"))
if (Godhead == null) {
    Godhead = {
        nickname: "Godhead",
        firstName: "Temirlan",
        lastName: "Smailov",
        birthdate: "26-08-2005",
        email: "Grid2000@gmail.com",
        password: "Godhead3638",
    };
    localStorage.setItem("Godhead", JSON.stringify(Godhead))
    var Godhead = localStorage.getItem("Godhead")
}

var Mze45 = JSON.parse(localStorage.getItem("Mze45"))
if (Mze45 == null) {
    Mze45 = {
        nickname: "Mze45",
        firstName: "Liza",
        lastName: "Ermolaeva",
        birthdate: "04-11-2002",
        email: "mcmatrix88@gmail.com",
        password: "Albedo80",
    };
    localStorage.setItem("Mze45", JSON.stringify(Mze45))
    var Mze45 = localStorage.getItem("Mze45")
}
window.onload = function() {
    var isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
        var currentLogin = localStorage.getItem("currentLogin")
        if (currentLogin == "user") {
            var userInformation = JSON.parse(localStorage.getItem("account"));
            usersLogin(userInformation);
        } else if (currentLogin == "Godhead") {
            var userInformation = JSON.parse(localStorage.getItem("Godhead"));
            usersLogin(userInformation);
        } else if (currentLogin == "Mze45") {
            var userInformation = JSON.parse(localStorage.getItem("Mze45"));
            usersLogin(userInformation);
        } else {
            adminLogin()
        }
    }
}

function adminLogin() {
    var reg = document.getElementById("reg");
    var toggleButton = document.getElementById("toggleButton");
    var accountInfo = document.getElementById("accountInfo");
    var adminPanel = document.getElementById("adminPanel");
    reg.style.display = "none";
    toggleButton.style.display = "none";
    accountInfo.style.display = "none";
    adminPanel.style.display = "block";

    var Godhead = JSON.parse(localStorage.getItem("Godhead"));
    var Mze45 = JSON.parse(localStorage.getItem("Mze45"));

    document.getElementById("nickName1").textContent = Godhead.nickname;
    document.getElementById("firstName1").textContent = Godhead.firstName;
    document.getElementById("lastName1").textContent = Godhead.lastName;
    document.getElementById("birthdate1").textContent = Godhead.birthdate;
    document.getElementById("email1").textContent = Godhead.email;
    document.getElementById("password1").textContent = Godhead.password;
    

    document.getElementById("nickName2").textContent = Mze45.nickname;
    document.getElementById("firstName2").textContent = Mze45.firstName;
    document.getElementById("lastName2").textContent = Mze45.lastName;
    document.getElementById("birthdate2").textContent = Mze45.birthdate;
    document.getElementById("email2").textContent = Mze45.email;
    document.getElementById("password2").textContent = Mze45.password;
    
    var User = JSON.parse(localStorage.getItem("account"));

    document.getElementById("nickName3").textContent = User.nickname;
    document.getElementById("firstName3").textContent = User.firstName;
    document.getElementById("lastName3").textContent = User.lastName;
    document.getElementById("birthdate3").textContent = User.birthdate;
    document.getElementById("email3").textContent = User.email;
    document.getElementById("password3").textContent = User.password;

    var saveButton1 = document.createElement("button");
    saveButton1.innerHTML = "Save";
    saveButton1.id = "save1";
    saveButton1.addEventListener("click", function() {
        save(1);
    });

    var saveButton2 = document.createElement("button");
    saveButton2.innerHTML = "Save";
    saveButton2.id = "save2";
    saveButton2.addEventListener("click", function() {
        save(2);
    });

    var saveButton3 = document.createElement("button");
    saveButton3.innerHTML = "Save";
    saveButton3.id = "save3";
    saveButton3.addEventListener("click", function() {
        save(3);
    });

    document.getElementById("nickName1").appendChild(saveButton1);
    document.getElementById("nickName2").appendChild(saveButton2);
    document.getElementById("nickName3").appendChild(saveButton3);

}

function usersLogin(userInformation) {
    var reg = document.getElementById("reg");
    var toggleButton = document.getElementById("toggleButton");
    var accountInfo = document.getElementById("accountInfo");

    reg.style.display = "none";
    toggleButton.style.display = "none";
    accountInfo.style.display = "block";

    document.getElementById("nicknameField").innerText = "Nickname: " + userInformation.nickname;
    document.getElementById("firstNameField").innerText = "First name: " + userInformation.firstName;
    document.getElementById("lastNameField").innerText = "Last name: " + userInformation.lastName;
    document.getElementById("birthdateField").innerText = "Date of Birth: " + userInformation.birthdate;
    document.getElementById("emailField").innerText = "Email: " + userInformation.email;
}

function toggleForm() {
    var loginForm = document.querySelector(".login-form");
    var registrationForm = document.querySelector(".registration-form");
    var toggleButton = document.getElementById("toggleButton")

    if (registrationForm.style.display == "none") {
        loginForm.style.display = "none";
        registrationForm.style.display = "block";
        toggleButton.innerText = "Already have an account?";
    } else {
        loginForm.style.display = "block";
        registrationForm.style.display = "none";
        toggleButton.innerText = "Don't have an account?";
    }
}

function save(userId) {
    var userInformation = {
        nickname: document.getElementById("nickName" + userId).textContent,
        firstName: document.getElementById("firstName" + userId).textContent,
        lastName: document.getElementById("lastName" + userId).textContent,
        birthdate: document.getElementById("birthdate" + userId).textContent,
        email: document.getElementById("email" + userId).textContent,
        password: document.getElementById("password" + userId).textContent,
    };

    if (userId === 1) {
        localStorage.setItem("Godhead", JSON.stringify(userInformation));
    } else if (userId === 2) {
        localStorage.setItem("Mze45", JSON.stringify(userInformation));
    } else if (userId === 3) {
        localStorage.setItem("account", JSON.stringify(userInformation));
    }

    alert("Данные успешно сохранены для пользователя " + userId);
}

function login() {
    var loginEmail = document.getElementById("exampleInputEmail1").value;
    var loginPassword = document.getElementById("exampleInputPassword1").value;

    var Godhead = JSON.parse(localStorage.getItem("Godhead"));
    var Mze45 = JSON.parse(localStorage.getItem("Mze45"));
    var accountJSON = localStorage.getItem("account");

    if (accountJSON) {
        var account = JSON.parse(accountJSON);

        if (loginEmail === account.email && loginPassword === account.password) {
            alert("Вход выполнен успешно!");
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("currentLogin", "user");
        } else if (loginEmail === Godhead.email && loginPassword === Godhead.password) {
            alert("Вход выполнен успешно!");
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("currentLogin", "Godhead");
        } else if (loginEmail === Mze45.email && loginPassword === Mze45.password) {
            alert("Вход выполнен успешно!");
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("currentLogin", "Mze45");
        } else if (loginEmail === "GodheadMze45gmail.com" && loginPassword === "weeb") {
            alert("Вход выполнен успешно!");
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("currentLogin", "admin");
        } else {
            alert("Ошибка входа. Пожалуйста, проверьте введенные данные.");
        }
    } else {
        alert("Аккаунт не найден. Пожалуйста, зарегистрируйтесь.");
    }
}


function logout() {
    localStorage.setItem("isLoggedIn", "false")
    location.reload();
}
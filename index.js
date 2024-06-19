var signUP = document.getElementById("signup");
var signIN = document.getElementById("signin");
var one = document.getElementById("one");
var two = document.getElementById("two");
var signupb = document.getElementById('signupb');
var nameup = document.getElementById("nameup");
var emailup = document.getElementById("emailup");
var passwordup = document.getElementById("passwordup");
var error2 = document.getElementById("error2");
var loginb = document.getElementById('loginb');
var home = document.getElementById('home');
var logout = document.getElementById('logout');
var welcome = document.getElementById("welcome");
regex = /^[\w]{1,}[\.]{1}[\w]{2,}/;
var container;

if (localStorage.getItem("container")) {
    container = JSON.parse(localStorage.getItem("container"))
}
else {
    container = [];
}

signupb.addEventListener('click', function (e) {
    adduser()
})


signUP.addEventListener('click', function (e) {
    signup()
})

signIN.addEventListener('click', function (e) {
    signin()
})

loginb.addEventListener("click", function (e) {
    login()
})
logout.addEventListener('click', function (e) {
    logout1()
})

function logout1(){
    one.classList.remove("d-none");
    home.classList.add("d-none");

}

function login() {
    if (emailin.value == "" || passwordin.value == "") {
        error1.classList.add("color-dc3545");
        error1.classList.remove("color-green");
        error1.innerHTML = "All input is required";

    }
    else if (container.find((user) => user.email === emailin.value) && container.find((user) => user.password === passwordin.value)) {
        welcome.innerHTML="Welcome"+" "+ container.find((user) => user.email===emailin.value).name
        home.classList.remove("d-none");
        one.classList.add("d-none");
        two.classList.add("d-none");
        error1.innerHTML = "";
        emailin.value = "";
        passwordin.value = "";
    }
    else {
        error1.classList.add("color-dc3545");
        error1.classList.remove("color-green");
        error1.innerHTML = "incorrect email or password";
    }
}



function signup() {

    two.classList.remove("d-none");
    one.classList.add("d-none");

}



function signin() {
    one.classList.remove("d-none");
    two.classList.add("d-none");
    error2.innerHTML = "";

}



function adduser() {
    if (nameup.value == "" || emailup.value == "" || passwordup.value == "") {
        error2.classList.add("color-dc3545")
        error2.classList.remove("color-green")
        error2.innerHTML = "All input is required"

    }
    else if (regex.test(emailup.value)) {
        var user = {
            name: nameup.value,
            email: emailup.value,
            password: passwordup.value
        }
        container.push(user);
        localStorage.setItem("container", JSON.stringify(container));
        error2.innerHTML = "success";
        error2.classList.remove("color-dc3545")
        error2.classList.add("color-green")
        nameup.value = "";
        emailup.value = "";
        passwordup.value = "";
    }
    else {
        error2.classList.add("color-dc3545")
        error2.classList.remove("color-green")
        error2.innerHTML = "Enter a valid email";
    }
}
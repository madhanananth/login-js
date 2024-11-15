
var userErrorElement = document.getElementById('error-username');
var passwordErrorElement = document.getElementById('error-password');
var resultElement = document.getElementById('result')

function login(){
    userErrorElement.innerHTML = "";
    passwordErrorElement.innerHTML = "";
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if ( username === "" || password === ""){
        if (username === "") {
            userErrorElement.innerHTML = "username is empty";
        }
        if ( password === "")  {
            passwordErrorElement.innerHTML = "password is empty";
        }
    }
    else{
        if (username != "" && password != "") {

            if (username === 'madhan' && password === '9345'){
                document.getElementById('login-wrapper').style.display = 'none';
                resultElement.innerHTML = "login success";

            }
            else{
                resultElement.innerHTML = " login un-success <br> and invalid username and password"
            
            }
        }
    }
}
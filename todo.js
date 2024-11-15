

var nameElement = document.getElementById('any-name');
var errorElement = document.getElementById('error');
var resultElement = document.getElementById('result');

function add() {
    errorElement.innerHTML = "";
    resultElement.innerHTML ="";
    if (nameElement.value === ""){
        errorElement.innerHTML = "name is empty";
    } else{
        var priority = document.getElementById('priority').value;
        if(priority === "low"){
            resultElement.innerHTML += "<h1 style='background-color: yellow'>" + nameElement.value + "</h1>";

        }
        else if(priority === "average"){
            resultElement.innerHTML += "<h1 style='background-color: green'>" + nameElement.value + "</h1>";
            
        }
        else{
            resultElement.innerHTML += "<h1 style='background-color: red'>" + nameElement.value + "</h1>";
            
        }
    }
};
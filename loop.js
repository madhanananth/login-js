var inputElement = document.getElementById('input');
var errorElement = document.getElementById('error');
var resultElement = document.getElementById('result')

    function add() {
    errorElement.innerHTML = "";

    var limit = parseInt(inputElement.value);
    if (isNaN(limit)) {
        errorElement.innerHTML = "enter the valid input !";
    } else{
        count = 1;
        while (limit >= count) {
            if (count % 3 === 0){

                resultElement.innerHTML += "<h4>" + count + "  It can be divided by 3 </h4>";
            }else{
                resultElement.innerHTML += "<h4>" + count + "</h4>" ;
                }

            count++;
        }
    }

    }
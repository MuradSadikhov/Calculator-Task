


let operationh = document.getElementById("operationh");
let resulth = document.getElementById("resulth");

// let number;
// let number2;
let result;
let count = 0;
function Digits(num) {
    operationh.innerHTML += num;
    //count++;

    // if (count == 1) {

    //     number = num;
    // }
    // else if (count == 2) {
    //     number2 = num;
    // }



    // if (oper == "+") {
    //     result = number + number2;

    // }
    // else if (oper == "-") {
    //     result = number - number2;

    // }
    // else if (oper == "*") {
    //     result = number * number2;

    // }
    // else if (oper == "/") {
    //     result = number / number2;

    // }

    // else if (oper == null) {
    //     result = 0;

    // }



    let number;
    result=number+number;

}

let oper;
function Operator(ope) {
    count++;
    oper = ope;
    operationh.innerHTML += ope;
}


function Clear() {
    operationh.innerHTML = null;
    resulth.innerHTML = null;
}


function Equal() {

    // if (oper == "+") {
    //     resulth.innerHTML = number + number2;
    // }
    // else if (oper == "-") {
    //     resulth.innerHTML = number - number2;

    // }
    // else if (oper == "*") {
    //     resulth.innerHTML = number * number2;

    // }
    // else if (oper == "/") {
    //     resulth.innerHTML = number / number2;

    // }

    // else if (oper == null) {
    //     resulth.innerHTML = 0;

    // }


    resulth.innerHTML = result;


    //count = null;
}
let num1 = 0;
let num2 = 0;
let result = 0;




function clicker(operator) {

    var Callccontent = document.getElementById("screen");
    var numBer2 = document.getElementById("number2");
    if (operator === 1) {
        if (Callccontent.innerHTML.includes("+") || Callccontent.innerHTML.includes("-") || Callccontent.innerHTML.includes("x") || Callccontent.innerHTML.includes("/")) {
            if (numBer2.innerHTML === "0") {
                numBer2.innerHTML = "1";
            }
            else {
                numBer2.innerHTML += "1";
            }
        }
        else {
            if (Callccontent.innerHTML === "0") {
                Callccontent.innerHTML = "1";
            }
            else {
                Callccontent.innerHTML += "1";
            }
        }

    }

    else if (operator === 2) {
        if (Callccontent.innerHTML.includes("+") || Callccontent.innerHTML.includes("-") || Callccontent.innerHTML.includes("x") || Callccontent.innerHTML.includes("/")) {
            if (numBer2.innerHTML === "0") {
                numBer2.innerHTML = "2";
            }
            else {
                numBer2.innerHTML += "2";
            }
        }
        else {
            if (Callccontent.innerHTML === "0") {
                Callccontent.innerHTML = "2";
            }
            else {
                Callccontent.innerHTML += "2";
            }
        }
    }

    else if (operator === 3) {
        if (Callccontent.innerHTML.includes("+") || Callccontent.innerHTML.includes("-") || Callccontent.innerHTML.includes("x") || Callccontent.innerHTML.includes("/")) {
            if (numBer2.innerHTML === "0") {
                numBer2.innerHTML = "3";
            }
            else {
                numBer2.innerHTML += "3";
            }
        }
        else {
            if (Callccontent.innerHTML === "0") {
                Callccontent.innerHTML = "3";
            }
            else {
                Callccontent.innerHTML += "3";
            }
        }
    }

    else if (operator === 4) {
        if (Callccontent.innerHTML.includes("+") || Callccontent.innerHTML.includes("-") || Callccontent.innerHTML.includes("x") || Callccontent.innerHTML.includes("/")) {
            if (numBer2.innerHTML === "0") {
                numBer2.innerHTML = "4";
            }
            else {
                numBer2.innerHTML += "4";
            }
        }
        else {
            if (Callccontent.innerHTML === "0") {
                Callccontent.innerHTML = "4";
            }
            else {
                Callccontent.innerHTML += "4";
            }
        }
    }

    else if (operator === 5) {
        if (Callccontent.innerHTML.includes("+") || Callccontent.innerHTML.includes("-") || Callccontent.innerHTML.includes("x") || Callccontent.innerHTML.includes("/")) {
            if (numBer2.innerHTML === "0") {
                numBer2.innerHTML = "5";
            }
            else {
                numBer2.innerHTML += "5";
            }
        }
        else {
            if (Callccontent.innerHTML === "0") {
                Callccontent.innerHTML = "5";
            }
            else {
                Callccontent.innerHTML += "5";
            }
        }
    }


    else if (operator === 6) {
        if (Callccontent.innerHTML.includes("+") || Callccontent.innerHTML.includes("-") || Callccontent.innerHTML.includes("x") || Callccontent.innerHTML.includes("/")) {
            if (numBer2.innerHTML === "0") {
                numBer2.innerHTML = "6";
            }
            else {
                numBer2.innerHTML += "6";
            }
        }
        else {
            if (Callccontent.innerHTML === "0") {
                Callccontent.innerHTML = "6";
            }
            else {
                Callccontent.innerHTML += "6";
            }
        }
    }


    else if (operator === 7) {
        if (Callccontent.innerHTML.includes("+") || Callccontent.innerHTML.includes("-") || Callccontent.innerHTML.includes("x") || Callccontent.innerHTML.includes("/")) {
            if (numBer2.innerHTML === "0") {
                numBer2.innerHTML = "7";
            }
            else {
                numBer2.innerHTML += "7";
            }
        }
        else {
            if (Callccontent.innerHTML === "0") {
                Callccontent.innerHTML = "7";
            }
            else {
                Callccontent.innerHTML += "7";
            }
        }
    }

    else if (operator === 8) {
        if (Callccontent.innerHTML.includes("+") || Callccontent.innerHTML.includes("-") || Callccontent.innerHTML.includes("x") || Callccontent.innerHTML.includes("/")) {
            if (numBer2.innerHTML === "0") {
                numBer2.innerHTML = "8";
            }
            else {
                numBer2.innerHTML += "8";
            }
        }
        else {
            if (Callccontent.innerHTML === "0") {
                Callccontent.innerHTML = "8";
            }
            else {
                Callccontent.innerHTML += "8";
            }
        }
    }

    else if (operator === 9) {
        if (Callccontent.innerHTML.includes("+") || Callccontent.innerHTML.includes("-") || Callccontent.innerHTML.includes("x") || Callccontent.innerHTML.includes("/")) {
            if (numBer2.innerHTML === "0") {
                numBer2.innerHTML = "9";
            }
            else {
                numBer2.innerHTML += "9";
            }
        }
        else {
            if (Callccontent.innerHTML === "0") {
                Callccontent.innerHTML = "9";
            }
            else {
                Callccontent.innerHTML += "9";
            }
        }
    }

    else if (operator === 0) {
        if (Callccontent.innerHTML.includes("+") || Callccontent.innerHTML.includes("-") || Callccontent.innerHTML.includes("x") || Callccontent.innerHTML.includes("/")) {
            if (numBer2.innerHTML = "") {

            }
            else {
                numBer2.innerHTML += "0";
            }
        }
        else if (Callccontent.innerHTML != "0") {
            Callccontent.innerHTML += "0";
        }
    }

    else if (operator === 777) {
        Callccontent.innerHTML = "0";
        numBer2.innerHTML = "";
    }

    else if (operator === 545) {

        if (Callccontent.innerHTML.includes("+") || Callccontent.innerHTML.includes("-") || Callccontent.innerHTML.includes("x") || Callccontent.innerHTML.includes("/")) {

        }

        else {
            num1 = Callccontent.innerHTML;
            Callccontent.innerHTML += "+";
        }
    }

    else if (operator === 136) {

        if (Callccontent.innerHTML.includes("+") || Callccontent.innerHTML.includes("-") || Callccontent.innerHTML.includes("x") || Callccontent.innerHTML.includes("/")) {

        }
        else {
            num1 = Callccontent.innerHTML;
            Callccontent.innerHTML += "-";
        }
    }

    else if (operator === 212) {
        if (Callccontent.innerHTML.includes("+") || Callccontent.innerHTML.includes("-") || Callccontent.innerHTML.includes("x") || Callccontent.innerHTML.includes("/")) {

        }
        else {
            num1 = Callccontent.innerHTML;
            Callccontent.innerHTML += "x";
        }
    }

    else if (operator === 12) {
        if (Callccontent.innerHTML.includes("+") || Callccontent.innerHTML.includes("-") || Callccontent.innerHTML.includes("x") || Callccontent.innerHTML.includes("/")) {

        }
        else {
            num1 = Callccontent.innerHTML;
            Callccontent.innerHTML += "/";
        }
    }

    else if (operator === 886) {
        if (Callccontent.innerHTML.includes("+") || Callccontent.innerHTML.includes("-") || Callccontent.innerHTML.includes("x") || Callccontent.innerHTML.includes("/")) {
            if (numBer2.innerHTML.includes(".")) {

            }
            else {
                numBer2.innerHTML += ".";
            }
        }
        else {
            if (Callccontent.innerHTML.includes(".")) {

            }
            else {
                Callccontent.innerHTML += ".";
            }
        }

    }

    else if (operator === 7878) {
        if (Callccontent.innerHTML.includes("+")) {
            num2 = numBer2.innerHTML;

            result = Number(num1) + Number(num2);
            Callccontent.innerHTML = result;
            numBer2.innerHTML = "";
        }
        if (Callccontent.innerHTML.includes("-")) {

            num2 = numBer2.innerHTML;

            result = Number(num1) - Number(num2);
            Callccontent.innerHTML = result;
            numBer2.innerHTML = "";

        }
        if (Callccontent.innerHTML.includes("x")) {

            num2 = numBer2.innerHTML;

            result = Number(num1) * Number(num2);
            Callccontent.innerHTML = result;
            numBer2.innerHTML = "";

        }
        if (Callccontent.innerHTML.includes("/")) {


            num2 = numBer2.innerHTML;

            result = Number(num1) / Number(num2);
            Callccontent.innerHTML = result;
            numBer2.innerHTML = "";

        }
    }

}




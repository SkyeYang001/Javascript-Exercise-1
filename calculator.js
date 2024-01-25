//function () {}

function calculator() {

    let = Num1 = Number(prompt(`Type A Number`, ``));

    let = Num2 = Number(prompt(`Type A Number`, ``));

    let = operator = Number(prompt(`Type A Operator`, ``));

    if (!Number.isNaN(Num1)) (!Number.isNaN(Num2)) ( + || - || * || / === operator){

        document.getElementById("Num1").innerHTML = Num1;

        document.getElementById("operator").innerHTML = operator;

        document.getElementById("Num2").innerHTML = Num2;

        document.write(`=` + Num1 + operator + Num2);

    }
    
}

/*prompt()

alert()*/
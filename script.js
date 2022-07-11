const sum = function(...arg) {
    return arg.reduce((total, args) => total + args, 0)
  };
  

const subtract = function(...arg) {
  let tractResult = arg[0]
  arg.forEach((element,index) => {
    if(index < 1) return; 
    tractResult -= element;
  });
  return tractResult;
};

const multiply = function(...numbers) {
    var total = 1;
    numbers.forEach(element => { 
        total *= element;
    });
    return total;
  };

const divide = function(...numbers) {
    var total = numbers[0] / numbers[1]
    numbers.forEach((element,index) => {
        if(index < 2) return; 
        total /= element;
    });
    return total;
  };

const operate = (operator, ...numbers) => {
    let result;
    if (operator == 1) {
        result = sum(...numbers);
    } else if (operator == 2) {
        result = subtract(...numbers);
    } else if (operator == 3) {
        result = divide(...numbers);
    } else if (operator == 4) {
        result = multiply(...numbers);
    }
    return result;
};

const updateText = (...objects) => {
    const display = document.querySelector('#display')
}

const manageValues = (e) => {
  if (e.keyCode > 0){
    operatorVar = e.dataset.operator;
    console.log("Set operator to ", e.dataset.operator);
  } else if (operatorVar == 0) {
    num0Var = parseInt(`"${num0Var}"` + `"${e.innerText}"`)
    console.log(num0Var)
  }
}

const insult = () => {

}

let operatorVar = 0;
let num0Var = 0;
let num1Var = 0;

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener('click', manageValues));
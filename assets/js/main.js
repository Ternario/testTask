let firstCounter = document.querySelector('.first');
let secondCounter = document.querySelector('.second');
let thirdCounter = document.querySelector('.third');

let firstNumber = document.querySelector('#firstNumber');
let secondNumber = document.querySelector('#secondNumber');
let thirdNumber = document.querySelector('#thirdNumber');

let number = 0;
let number1 = 0;
let number2 = 0;


let btnClick = (e) => {
    let target = e.target;

    if(target.classList.contains('first')) {
        firstNumber.innerHTML = `${++number}` ;
    } else if(target.classList.contains('second')) {
        secondNumber.innerHTML = `${++number1}` ;
    } else if(target.classList.contains('third')) {
        thirdNumber.innerHTML = `${++number2}` + '+' ;
    }
}

firstCounter.addEventListener('click', btnClick);
secondCounter.addEventListener('click', btnClick);
thirdCounter.addEventListener('click', btnClick);
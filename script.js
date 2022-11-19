'use strict';

const checkBTN = document.getElementById('btn');
const resetBTN = document.getElementById('reset');

const inputDate = document.getElementById('date');
const luckyNumber = document.getElementById('lucky');

const inputArea = document.querySelector('.input-area');
const resultArea = document.querySelector('.result-area');
const forMobile = document.querySelector('.mobile');

const resultText = document.getElementById('result-text');

const aniForLucky = document.querySelector('.container');


// Function for showing result
function showResult() {
     resultArea.classList.remove("hide");
     inputArea.classList.add("hide");
     forMobile.style.display = "none";
}

let date;
let lucky;
let sum = 0;

// function to set result and show result
function setAndShowResult(msg) {
     resultText.innerText = msg;
     showResult();
}

const getDate = () => {
     date = inputDate.value;
     if (date === "") {
          setAndShowResult("Please enter your birthdate");
     }
     return date;
}
const getLuckynumber = () => {
     lucky = luckyNumber.value;
     if (lucky === "" || lucky <= 0) {
          setAndShowResult("Please enter a valid lucky number");
     }
     return lucky;
}

const calculateSum = () => {
     let date = getDate();
     for (let i = 0; i < date.length; i++) {
          if (date[i] !== "-") {
               sum = sum + Number(date[i]);
          }
     }
     return sum;
}


function isLucky() {
     const lucky = getLuckynumber();
     const sum = calculateSum();

     if (sum % lucky === 0) {
          setAndShowResult("Your birthday is lucky 🥳");
          aniForLucky.classList.add("animation");
     }
     else {
          setAndShowResult("Your birthday is not lucky 😔");
          aniForLucky.classList.add("not-lucky");
     }
}

function clickHandler() {
     if (inputDate.value === "" || luckyNumber.value === "" || luckyNumber.value <= 0 || inputDate.value === null) {
          setAndShowResult("Please enter valid date and lucky number");
          // set reset button text to back
          resetBTN.innerText = "Back";
     }
     else {
          isLucky();
     }
}

checkBTN.addEventListener('click', clickHandler);
resetBTN.addEventListener('click', () => window.location.reload());
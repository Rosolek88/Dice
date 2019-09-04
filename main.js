let total1 = 0;
let sum = document.getElementById('sum');
const box = document.getElementById('box');
const diceImg = document.getElementById('dice-img') //grabbing an img elemnt from html (space for img)
let images = ["./img/dice1.png", "./img/dice2.png", "./img/dice3.png", "./img/dice4.png", "./img/dice5.png", "./img/dice6.png"]
const lost = document.getElementById('lost');
let total=0;

function diceRoll() {


    let randomNumber = Math.floor(Math.random() * 6 ); // randomises number between 1-6
    let total = randomNumber; // total to be random number

    //box.textContent = total; // shows number in the box
    total1 = total1 += total; // add all random numbers in total1
    sum.textContent = total1; // shows numbers in sum box
    if (total == 1) {
        lost.textContent = "You Lose!"
        total = 0;
    } // if total equals 1 than you lose 
    if (total1 >= 21) {
        sum.textContent = "You Won!"
        total1 = 0; // if total1 sum equals 21 or more you win
    }
    diceImg.src = images[total];
}
console.log();









document.getElementById('button').onclick = function () {

    diceRoll(); //button click executes dice roll funcitioooooooon

}

////////////////////////////////////////////////// P L A Y E R R T W O////////////////////////////////////////////////////////




let total11= 0;
let total2 = 0;
let sum1 = document.getElementById('sum1');
const box1 = document.getElementById('box1');
const diceImg1 = document.getElementById('dice-img1') //grabbing an img elemnt from html (space for img)
//let images1 = ["./img/dice1.png", "./img/dice2.png", "./img/dice3.png", "./img/dice4.png", "./img/dice5.png", "./img/dice6.png"]
const lost1 = document.getElementById('lost1');

function diceRoll1() {


    let randomNumber1 = Math.floor(Math.random() * 6); // randomises number between 1-6
    let total2 = randomNumber1; // total to be random number

    //box.textContent = total; // shows number in the box
    total2 = total11 += total2; // add all random numbers in total1
    sum1.textContent = total2; // shows numbers in sum box
    if (total2 == 1) {
        lost1.textContent = "You Lose!"
        total2 = 0;
    } // if total equals 1 than you lose 
    if (total11 >= 21) {
        sum1.textContent = "You Won!"
        total11 = 0; // if total1 sum equals 21 or more you win
    }
    diceImg1.src = images[total2];
}
console.log();









document.getElementById('button1').onclick = function () {

    diceRoll1(); //button click executes dice roll funcitioooooooon

}
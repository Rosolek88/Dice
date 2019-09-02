let total1 = 0;
let sum = document.getElementById('sum');
const box = document.getElementById('box');
const diceImg = document.getElementById('dice-img') //grabbing an img elemnt from html (space for img)
let images = ["./img/dice1.png", "./img/dice2.png", "./img/dice3.png", "./img/dice4.png", "./img/dice5.png", "./img/dice6.png"]
const lost = document.getElementById('lost');


function diceRoll() {


    let randomNumber = Math.floor(Math.random() * 6 + 1); // randomises number between 1-6
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
    diceImg.src = images[total - 1];
}
console.log();









document.getElementById('button').onclick = function () {

    diceRoll(); //button click executes dice roll funcitioooooooon

}
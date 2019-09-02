let total1 = 0;
let sum = document.getElementById('sum');
const box = document.getElementById('box');
//const images = [dice1.png, dice2.png, dice3.png, dice4.png, dice5.png, dice6.png]



function diceRoll() {


    let randomNumber = Math.floor(Math.random() * 6 + 1); // randomises number between 1-6
    let total = randomNumber; // total to be random number
    box.textContent = total; // shows number in the box
    total1 = total1 += total; // add all random numbers in total1
    sum.textContent = total1; // shows numbers in sum box
    if (total == 1) {
        box.textContent = "You Lose!"
        total=0;} // if total equals 1 than you lose 
        if (total1 >=  21) {
            sum.textContent = "You Won!"
            total1=0; // if total1 sum equals 21 or more you win
        }
       // image.scr = `./img $(images[random - 1])`;
    }
    console.log();








document.getElementById('button').onclick = function () {

    diceRoll();

}
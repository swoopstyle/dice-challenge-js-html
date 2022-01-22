//Generate a random number from 1 to 6
const FirstRandomNum = Math.floor(Math.random() * 6) + 1

//images/dice1.png upto images/dice6.png
const FirstDiceImage = 'assets/dice1' + FirstRandomNum + '.png';

document.querySelectorAll('img')[0].setAttribute('src', FirstDiceImage);

const SecondRandomNum = Math.floor(Math.random() * 6) + 1

const SecondDiceImage = 'assets/dice6' + SecondRandomNum + '.png';

document.querySelectorAll('img')[1].setAttribute('src', SecondDiceImage);

//Logic for winner
if (FirstRandomNum > SecondRandomNum) {
  document.querySelector('h1').innerHTML = 'The Winner is Player 1';
} {else if (FirstRandomNum < SecondRandomNum) 
  document.querySelector('h1').innerHTML = 'The Winner is Player 2';
    } { else document.querySelector('h1').innerHTML = 'It is a draw!';
}

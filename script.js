//Generate a random number from 1 to 6
const FirstRandomNum = Math.floor(Math.random() * 6) + 1

//images/dice1.png upto images/dice6.png
const firstDiceImage = 'assets/dice' + FirstRandomNum + '.png';

document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);

const secondRandumNum = Math.floor(Math.random() * 6) + 1

const secondDiceImage = 'assets/dice' + secondRandomNum + '.png';

document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

//Logic for winner
if (FirstRandomNum > secondRandomNum) {
  document.querySelector('h1').innerHTML = 'The Winner is Player 1';
  
  else if (FirstRandomNum < secondRandumNum) {
    document.querySelector('h1').innerHTML = 'The Winner is Player 2'
};
  else document.querySelector('h1').innerHTML = 'It is a draw!'
}


let you=0;
let comp=0;

const choices = document.querySelectorAll('.choice');

const computerChoice = () => { 
    const options = ['rock', 'paper', 'scissors'];
    const randomidx = Math.floor(Math.random()*3);
    return options[randomidx];
}
const draw = () => {
    const message = document.querySelector('.msg');
    message.innerHTML = 'Draw';
    message.style.backgroundColor = '#081b31';
}

const userWin = () => {
    const message = document.querySelector('.msg');
    message.innerHTML = 'You won and chitransh lost🥳!';
    message.style.backgroundColor = 'green';
    const userScore = document.querySelector('.user-score');
    userScore.innerHTML = you;
}
const compWin = () => {
    const message = document.querySelector('.msg');
    message.innerHTML = 'You lose and Chitransh wins';
    message.style.backgroundColor = 'red';
    const compScore = document.querySelector('.comp-score');
    compScore.innerHTML = comp;
}
const playGame = (userchoice) => {
    const compchoice = computerChoice();
    if (userchoice === compchoice) {
        console.log('Draw');
        draw();
    } 
    else if ((userchoice === 'rock' && compchoice === 'scissors') || (userchoice === 'paper' && compchoice === 'rock') ||(userchoice === 'scissors' && compchoice === 'paper')){
        you++;
        console.log('You win');
        userWin();
    } 
    else{
        comp++;
        console.log('Computer wins');
        compWin();
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener('click', ()=>{
        const userchoice = choice.getAttribute('id');
        playGame(userchoice);
    })
})
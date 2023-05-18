const theList = [];

const results = document.querySelector('#results');
const results2 = document.querySelector('#results2');
const results3 = document.querySelector('#results3');
const score = document.querySelector('#score');
const score2 = document.querySelector('#score2');
const divs = document.querySelectorAll('div');
const reset = document.querySelector('#reset');

let compWins = 0;
let humanWins = 0;
let ties = 0;

function tally(winner){
    if (winner == 'C') {
        compWins++;
    } else if (winner == 'H') {
        humanWins++;
    } else if (winner == 'T') {
        ties++;
    };

    score.textContent = `Human: ${humanWins} Computer: ${compWins} Ties: ${ties}`;
     
    if (compWins + humanWins + ties == 5) {
        if (compWins > humanWins){
            score2.textContent = 'Computer wins! The flesh is weak!';
        } else if (humanWins > compWins){
            score2.textContent = 'Human wins?! I shall have my revenge!';
        } else {
            score2.textContent = 'How boring, a tie.';
        }
        score2.textContent += ' Click a button above to play again.'
        compWins = 0;
        humanWins = 0;
        ties = 0;
    }
};
   
function playRound(num){
    score2.textContent = '';
    if (compWins + humanWins + ties >= 5) {
        divs.forEach(div => {
            div.textContent = '';
        })
        compWins = 0;
        humanWins = 0;
        ties = 0;
        console.log(compWins + humanWins + ties);
    }
    let cValue = Math.floor(Math.random() * 3 + 1);
    results.textContent = `Human selected ${playerSelection(num)}.`;
    results2.textContent = `Computer selected ${playerSelection(cValue)}.`;
    let winner = '';
    if (num == 1 && cValue == 2){
        results3.textContent = 'Computer is victorious! Paper cover rock!';
        winner = 'C';
    } else if (num == 1 && cValue == 3){
        results3.textContent = 'Human is fortunate. Rock smash scissors...for now.';
        winner = 'H';
    } else if (num == 2 && cValue == 1){
        results3.textContent = 'Paper cover rock? You will regret this!';
        winner = 'H';
    } else if (num == 2 && cValue == 3){
        results3.textContent = 'Foolish human, scissor cuts paper!';
        winner = 'C';
    } else if (num == 3 && cValue == 1){
        results3.textContent = 'I regret to inform you, human, rock smashes scissors!';
        winner = 'C';
    } else if (num == 3 && cValue == 2){
        results3.textContent = 'Scissors cuts paper? Clever...for a human.';
        winner = 'H';
    } else {
        results3.textContent = "Lucky human. It's a tie.";
        winner = 'T';
    }
    tally(winner);
};

const buttons = document.querySelectorAll('.button');

buttons.forEach((button => {
    button.addEventListener('click', function (e) {
        playRound(e.target.id);
    });
}));


function playerSelection(val){
    let value = '';
    if (val == 1){
        value = 'rock';
    } else if (val == 2){
        value = 'paper';
    } else if (val == 3) {
        value = 'scissors';
    }
    return value;
    };
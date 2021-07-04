function main(){
   const theList = [];
   let keepGoing = 1;
   let hValue = 0;
   //just testing something

   while (keepGoing < 4 && keepGoing > 0 ) {      
        hValue = parseInt(prompt('Enter 1 for Rock, 2 for Paper, or 3 for Scissors (enter any other number to end the game): '));
        theList.push(battle(hValue));
        keepGoing = hValue;
   }
      
   console.log ('Human is scared? Until next time...');      
   console.log ('\nGame History:', theList);
   
   let compWins = 0;
   let humanWins = 0;
   let ties = 0;

    for(let i = 0; i < theList.length; i++){
        if(theList[i] == 'C'){
            compWins++;
        } else if (theList[i] == 'H'){
            humanWins++;
        } else if (theList[i] == 'T') {
            ties++;
        }
    }
   
    if (compWins > humanWins){
       console.log('Too bad, human, Computer had',compWins, 'wins. Human only had',humanWins,'wins. Sad!');
    } else if (humanWins > compWins){
       console.log('Human had',humanWins,'wins. Computer had',compWins,'wins. I shall have my revenge!');
    } else {
       console.log('How boring, a tie. We both had',humanWins, 'wins. One more game?');
    }
    console.log('BTW, there were',ties,'ties.');
   
   
    function battle(num){
    let cValue = Math.floor(Math.random() * 3 + 1);
    console.log(cValue);
    let winner = '';

    function select(val){
        let value = '';
        if (val == 1){
            value = 'rock';
        } else if (val == 2){
            value = 'paper';
        } else if (val == 3) {
            value = 'scissors';
        } 
        return value;
    }

    let hSelect = select(num);
    let cSelect = select(cValue);

    console.log('Human selected', hSelect);
    console.log('Computer selected',cSelect);

    if (num == 1 && cValue == 2){
        console.log('Computer is victorious! Paper cover rock!');
        winner = 'C';
    } else if (num == 1 && cValue == 3){
        console.log('Human is fortunate. Rock smash scissors...for now.');
        winner = 'H';
    } else if (num == 2 && cValue == 1){
        console.log('Paper cover rock? You will regret this!');
        winner = 'H';
    } else if (num == 2 && cValue == 3){
        console.log('Foolish human, scissor cuts paper!');
        winner = 'C';
    } else if (num == 3 && cValue == 1){
        console.log('I regret to inform you, human, rock smashes scissors!');
        winner = 'C';
    } else if (num == 3 && cValue == 2){
        console.log('Scissors cuts paper? Clever...for a human.');
        winner = 'H';
    } else {
        console.log("Lucky human. It's a tie.");
        winner = 'T';
    }
    return winner;
    }
}

main()
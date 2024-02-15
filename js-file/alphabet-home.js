// Keyboard press
function handlerKeyboardButtonPress(event) {
    const userPress = event.key;

    // find key press
    const currentAlphabetPress = document.getElementById('random-alphabet-showing');
    const currentAlphabetText = currentAlphabetPress.innerText;
    const asExpectedAlphabet = currentAlphabetText.toLocaleLowerCase();
    console.log('User pressed :', userPress, '& Random number is :', asExpectedAlphabet);

    // match the user key
    if (userPress === asExpectedAlphabet) {
        console.log('You got a point');

        const currentScores = getTextElementById('score-board');
        const updatedscores = currentScores +1;
        setTextValueById('score-board', updatedscores);

        console.log('Rightly press :', asExpectedAlphabet);
        removeBackgroundById(asExpectedAlphabet);
        countinueGame();
    }
    else {
        const currentLife = getTextElementById('lifeline');
        const updateLifline = currentLife - 1;
        setTextValueById('lifeline',updateLifline);
        console.log('Try again.')
        if(updateLifline === 0){
            gameOver();
        }
    }
}
document.addEventListener('keyup', handlerKeyboardButtonPress);

// Gaming loop
function countinueGame(){
    const alphabet = randomAlphabe();
    // console.log(alphabet);

    // randomly alphabet generate
    const currentAlphabet =document.getElementById('random-alphabet-showing');
    currentAlphabet.innerText = alphabet ;

    // set background color
    setBackgroundById(alphabet);
}



// btn
function play(){
    // hide
    hideElementById('alphabet-home-section');
    hideElementById('final-score');
    // show
    showElementById('play-now-id');

    // reset score and life 
    setTextValueById('lifeline', 5)
    setTextValueById('score-board', 0)
    // random alphabet
    countinueGame()
}

// Game over
function gameOver(){
    // hide
    hideElementById('play-now-id');
    // show
    showElementById('final-score');
}
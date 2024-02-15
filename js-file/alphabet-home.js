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
        console.log('You lost.')
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
    // show
    showElementById('play-now-id');
    // random alphabet
    countinueGame()
}
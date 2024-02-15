// Keyboard press
function handlerKeyboardButtonPress(event){
    const userPress = event.key;

    // find key press
    const currentAlphabetPress = document.getElementById('random-alphabet-showing');
    const currentAlphabetText = currentAlphabetPress.innerText;
    const asExpectedAlphabet = currentAlphabetText.toLocaleLowerCase();
    console.log('User pressed :', userPress, '& Random number is :', asExpectedAlphabet);

    // match the user key
    if(userPress === asExpectedAlphabet){
        console.log('You got a point');
        console.log('Rightly press :', asExpectedAlphabet);
        removeBackgroundById(asExpectedAlphabet);
        countinueGame();
    }
    else{
        console.log('You lost.')
    }
}
document.addEventListener('keyup', handlerKeyboardButtonPress);




// hide elements
function hideElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden'); 
}

// // show element
function showElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

// find a random alphabets function
function randomAlphabe(){
    const allAlphabet ='abcdefghijklmnopqrstuvwxyz'; 
    const alphabets = allAlphabet.split('');

    // math
    const randomMath = Math.random()*25;
    const index = Math.round(randomMath);

    const findAlphabet =alphabets[index];
    // console.log(findAlphabet);
    return findAlphabet ;
}

// set bg
function setBackgroundById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
// remove bg
function removeBackgroundById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
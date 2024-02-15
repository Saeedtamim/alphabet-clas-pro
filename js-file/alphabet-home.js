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
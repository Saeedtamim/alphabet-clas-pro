// set score
function getTextElementById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const updateElement = parseInt(elementText);
    return updateElement;
}
function setTextValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}


// hide elements
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

// // show element
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

// find a random alphabets function
function randomAlphabe() {
    const allAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = allAlphabet.split('');

    // math
    const randomMath = Math.random() * 25;
    const index = Math.round(randomMath);

    const findAlphabet = alphabets[index];
    // console.log(findAlphabet);
    return findAlphabet;
}

// set bg
function setBackgroundById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
// remove bg
function removeBackgroundById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
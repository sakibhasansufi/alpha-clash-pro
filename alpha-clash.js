// function play (){
//     // hide the playground
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     // show the playground
//     const playgroundScetion = document.getElementById('play-ground');
//     playgroundScetion.classList.remove( 'hidden' );

// }

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}


function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId2) {
    const element2 = document.getElementById(elementId2);
    element2.classList.remove('hidden');
}


// function continueGame() {
//     const alphabet = getRandomAlphabet();
//     console.log('your random alphabet',alphabet);
// }


// function getRandomAlphabet() {
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     console.log(alphabets);
//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber);
//     const alphabet = alphabets[index];
//     // console.log(index, alphabet);
//     return alphabet;

// }
function continueGame() {
    const call = randomAlphabet();
    console.log('your random letter is', call);
    // randomly generated number
    const currentLetter = document.getElementById('current-alphabet');
    currentLetter.innerText = call;
    setBackgroundColor(call);
}

function randomAlphabet() {
    const randomAlphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = randomAlphabets.split('');
    const randomNumber = Math.random() * 25;
    const fixed = Math.round(randomNumber);
    const result = alphabets[fixed];
    return result;
}


function setBackgroundColor(elementId3) {
    const element = document.getElementById(elementId3);
    element.classList.add('bg-orange-400');
}


function removeColor (elementId4){
    const element = document.getElementById(elementId4);
    element.classList.remove('bg-orange-400');
}
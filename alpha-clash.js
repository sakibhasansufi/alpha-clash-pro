
function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    hideElementById('final-score');
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
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


function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    const lastScore = getTextElementById('current-score');
    setTextElementValueById('game-score', lastScore);
    // clear the last selected highlighted
    const currentAlphabet = getElementTextById('current-alphabet');
    hideElementById(currentAlphabet);

};


function continueGame() {
    const call = randomAlphabet();
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


function removeColor(elementId4) {
    const element = document.getElementById(elementId4);
    element.classList.remove('bg-orange-400');
}



function getTextElementById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;

}


function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);
    // stop game 
    if(playerPressed === 'Escape'){
        gameOver () ;
    }
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    console.log(playerPressed, expectedAlphabet);

    if (playerPressed === expectedAlphabet) {
        console.log('u win');
        const currentScore = getTextElementById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);
        //         console.log('u have pressed correctly ', expectedAlphabet);
        //         const currentScoreElemet = document.getElementById('current-score');
        //         const currentScoreText = currentScoreElemet.innerText;
        //         const currentScore = parseInt(currentScoreText);
        // const newScore = currentScore + 1;
        //         currentScoreElemet.innerText = newScore;
        removeColor(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('you lost a life');
        const currentLife = getTextElementById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);
        if (updatedLife === 0) {
            gameOver();

        }

        //         const currentLifeElement = document.getElementById('current-life');
        //         const currentLifeText = currentLifeElement.innerText;
        //         const currentLife = parseInt(currentLifeText);
        //         const newLife = currentLife - 1;
        //         currentLifeElement.innerText = newLife;

        //         if (newLife === 0) {
        //             gameOver();
        //         }

    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);




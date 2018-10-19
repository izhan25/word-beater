window.addEventListener('load', init);

const levels = {
    easy: 5,
    medium: 4,
    hard: 3
}

let currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

const currentWord = document.querySelector('#currentWord');
const seconds = document.querySelector('#seconds');
const wordInput = document.querySelector('#wordInput');
const message = document.querySelector('#message');
const timeDisplay = document.querySelector('#timeDisplay');
const scoreDisplay = document.querySelector('#scoreDisplay');


const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition',
    'Frog'
  ];

function init()
{
    message.innerHTML = '';
    seconds.innerHTML = currentLevel;
    
    showWord(words);

    wordInput.addEventListener('input', startMatch);

    setInterval(countdown, 1000);

    setInterval(checkStatus, 50);

}

function showWord(words)
{
    const randIndex = Math.floor(Math.random() * words.length);
  
    currentWord.innerHTML = words[randIndex];
} 

function startMatch()
{
    if(matchWords())
    {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    if(score === -1)
    {
        scoreDisplay.innerHTML = 0;
    }
    else
    {
        scoreDisplay.innerHTML = score;
    }
}

function matchWords()
{
    if(wordInput.value === currentWord.innerHTML)
    {
        message.innerHTML = 'correct..!';
        return true;
    }
    else
    {
        message.innerHTML = '';
        return false;
    }
}

function countdown()
{
    if(time > 0)
    {
        time--;
    }
    else if(time == 0)
    {
        isPlaying = false;
    }

    timeDisplay.innerHTML = time;
}

function checkStatus()
{
    if(!isPlaying && time === 0)
    {
        message.innerHTML = 'Game Over';
        score = -1;
    }
}


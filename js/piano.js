const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

// querySelectorAll chab tag, class, attribute, name it is easy to remember
const keys = document.querySelectorAll('.key'); 
const whiteKeys = document.querySelectorAll('.key.white'); // key white 
const blackKeys = document.querySelectorAll('.key.black'); // key blck

keys.forEach(key => {
   key.addEventListener('click', () => onPlaySound(key)); 
});

document.addEventListener('keydown', event => { // When click key all keyboard that we want to click it
    const keyboard = event.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(keyboard); // return index 
    if(!event.repeat){ // jea function
        if(whiteKeyIndex > -1){
            onPlaySound(whiteKeys[whiteKeyIndex]);
            console.log(whiteKeys);
        }
        const blackKeyIndex = BLACK_KEYS.indexOf(keyboard); // indexOf access the value from blackKeyIndex
        if(blackKeyIndex > -1) {
            onPlaySound(blackKeys[blackKeyIndex]);
            console.log(blackKeys);
        }
    }
});

// function playSound
function onPlaySound(key) { // store html div
    const audioKey = document.getElementById(key.dataset.note); // dataset vea rk keyword na del trov ng data
    audioKey.currentTime = 0;
    audioKey.play();
    key.classList.add('active'); // classList add
    audioKey.addEventListener('ended', () => { // ended: pel add sound job vea ng remove sound chenh
        key.classList.remove('active');
    });
}
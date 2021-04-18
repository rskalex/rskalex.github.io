const piano = document.querySelector('.piano');
const keys = document.querySelectorAll('.key');

//MouseEvent

function playAudio (e) {
    const note = e.target.dataset.note;
    const audio = document.querySelector(`audio[data-note='${note}']`);
    const key = document.querySelector(`.key[data-note='${note}']`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('active');  
}

function removeTransition(e) {
    if(e.target.classList.contains('active')) {
        e.target.classList.remove('active');
    }    
}

piano.addEventListener('mousedown', (e) => {
    if(e.target.classList.contains('key')) {
       playAudio(e);
    }
    keys.forEach(key => key.addEventListener('mouseover', playAudio));
    keys.forEach(key => key.addEventListener('mouseout', removeTransition));

});

piano.addEventListener('mouseup', (e) => {
    keys.forEach(key => key.removeEventListener('mouseover', playAudio));
});
window.addEventListener('mouseup', (e) => {
    keys.forEach(key => key.removeEventListener('mouseover', playAudio));
    e.target.classList.remove('active'); 
});


//KeydordEvent

const btnLetters = document.querySelector('.letters-btn'),
      btnNotes = document.querySelector('.note-btn'),
      whitekyes = document.querySelectorAll('.key-white'),
      blackkyes = document.querySelectorAll('.key-black'),
      btnNote = document.querySelector('.note-btn');

const WHITE_KEYS = ['d', 'f', 'g', 'h', 'j', 'k', 'l'],
      BLACK_KEYS = ['r', 't', 'u', 'i', 'o'];

// btnNote.classList.add('btn-active');

btnLetters.addEventListener('click', (e) => {    
    if (e.target) {
        keys.forEach(key => {
            key.classList.add('note-hide');
            key.classList.add('letter');
            key.classList.add('letter-show');
        });
    }    
});

btnNote.classList.add('btn-active');

btnLetters.addEventListener('click', (e) => {
    if(e.target.classList.contains('letters-btn')) {
        btnNote.classList.remove('btn-active');
        btnLetters.classList.add('btn-active');
    }
});

btnNote.addEventListener('click', (e) => {
    if(e.target.classList.contains('note-btn')) {
        btnNote.classList.add('btn-active');
        btnLetters.classList.remove('btn-active');
    }
});

btnNotes.addEventListener('click', (e) => {
    e.target.classList.remove('active-btn');
    if (e.target) {
        keys.forEach(key => {
            key.classList.remove('letter');
            key.classList.remove('letter-show');
            key.classList.remove('note-hide');
        });
    }
});

window.addEventListener('keydown', (e) => {
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);
    if(e.repeat) return;
    if(whiteKeyIndex > -1) playNote(whitekyes[whiteKeyIndex]);
    if(blackKeyIndex > -1) playNote(blackkyes[blackKeyIndex]);
});    

function removeLetterClass(key) {
    key.classList.remove('active'); 
}

function playNote(key) {
    const note = key.dataset.note;
    const audio = document.querySelector(`audio[data-note='${note}']`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('active');  
    window.addEventListener('keyup', () => {
        key.classList.remove('active')});
}


//Fullscreen

const btnFullscreen = document.querySelector('.btn-fullscreen');

window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
        if (document.fullscreenElement) {
            
            console.log(e.key);
            btnFullscreen.classList.remove('btn-fullscreen-exit');
            document.exitFullscreen();
        }
    }
});

function toggleFullScreen() {   
    
    if (document.fullscreenElement === null) {
        document.documentElement.requestFullscreen();
        btnFullscreen.classList.add('btn-fullscreen-exit');
    } 
    else {
        document.exitFullscreen();
        btnFullscreen.classList.remove('btn-fullscreen-exit');
    }
}
    
btnFullscreen.addEventListener("click", function(e) {
    if (e.target) {
        toggleFullScreen();
    }
});





function calc(x){
    let newStr = '';
    for(let i = 0; i < x.length; i++){
        newStr += x.charCodeAt(i);
    }
    let arr = newStr.split('');
    let total = arr.splice(arr.length - 1, 1, '1');
    console.log(newStr);
    console.log(arr.join(''));
    console.log(BigInt(newStr) - BigInt(arr.join('')))
}

  calc('abcdef')
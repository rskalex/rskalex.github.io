"use strict";

var piano = document.querySelector('.piano');
var keys = document.querySelectorAll('.key'); //MouseEvent

function playAudio(e) {
  var note = e.target.dataset.note;
  var audio = document.querySelector("audio[data-note='".concat(note, "']"));
  var key = document.querySelector(".key[data-note='".concat(note, "']"));
  audio.currentTime = 0;
  audio.play();
  key.classList.add('active');
}

function removeTransition(e) {
  if (e.target.classList.contains('active')) {
    e.target.classList.remove('active');
  }
}

piano.addEventListener('mousedown', function (e) {
  if (e.target.classList.contains('key')) {
    playAudio(e);
  }

  keys.forEach(function (key) {
    return key.addEventListener('mouseover', playAudio);
  });
  keys.forEach(function (key) {
    return key.addEventListener('mouseout', removeTransition);
  });
});
piano.addEventListener('mouseup', function (e) {
  keys.forEach(function (key) {
    return key.removeEventListener('mouseover', playAudio);
  });
});
window.addEventListener('mouseup', function (e) {
  keys.forEach(function (key) {
    return key.removeEventListener('mouseover', playAudio);
  });
  e.target.classList.remove('active');
}); //KeydordEvent

var btnLetters = document.querySelector('.letters-btn'),
    btnNotes = document.querySelector('.note-btn'),
    whitekyes = document.querySelectorAll('.key-white'),
    blackkyes = document.querySelectorAll('.key-black'),
    btnNote = document.querySelector('.note-btn');
var WHITE_KEYS = ['d', 'f', 'g', 'h', 'j', 'k', 'l'],
    BLACK_KEYS = ['r', 't', 'u', 'i', 'o']; // btnNote.classList.add('btn-active');

btnLetters.addEventListener('click', function (e) {
  if (e.target) {
    keys.forEach(function (key) {
      key.classList.add('note-hide');
      key.classList.add('letter');
      key.classList.add('letter-show');
    });
  }
});
btnNote.classList.add('btn-active');
btnLetters.addEventListener('click', function (e) {
  if (e.target.classList.contains('letters-btn')) {
    btnNote.classList.remove('btn-active');
    btnLetters.classList.add('btn-active');
  }
});
btnNote.addEventListener('click', function (e) {
  if (e.target.classList.contains('note-btn')) {
    btnNote.classList.add('btn-active');
    btnLetters.classList.remove('btn-active');
  }
});
btnNotes.addEventListener('click', function (e) {
  e.target.classList.remove('active-btn');

  if (e.target) {
    keys.forEach(function (key) {
      key.classList.remove('letter');
      key.classList.remove('letter-show');
      key.classList.remove('note-hide');
    });
  }
});
window.addEventListener('keydown', function (e) {
  var key = e.key;
  var whiteKeyIndex = WHITE_KEYS.indexOf(key);
  var blackKeyIndex = BLACK_KEYS.indexOf(key);
  if (e.repeat) return;
  if (whiteKeyIndex > -1) playNote(whitekyes[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackkyes[blackKeyIndex]);
});

function removeLetterClass(key) {
  key.classList.remove('active');
}

function playNote(key) {
  var note = key.dataset.note;
  var audio = document.querySelector("audio[data-note='".concat(note, "']"));
  audio.currentTime = 0;
  audio.play();
  key.classList.add('active');
  window.addEventListener('keyup', function () {
    key.classList.remove('active');
  });
} //Fullscreen


var btnFullscreen = document.querySelector('.btn-fullscreen');
window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
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
  } else {
    document.exitFullscreen();
    btnFullscreen.classList.remove('btn-fullscreen-exit');
  }
}

btnFullscreen.addEventListener("click", function (e) {
  if (e.target) {
    toggleFullScreen();
  }
});

var FilterString = function FilterString(value) {
  var arr = value.split('');
  var newArr = arr.filter(function (elem) {
    elem.toNumber();
    typeof elem === 'number';
    console.log(elem);
  });
  console.log(newArr);
  console.log(arr);
};

FilterString('a1b2c3');
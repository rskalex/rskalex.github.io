"use strict";

function getSomeigits(n) {
  var res = 0;

  sum = function sum() {
    n = n.toString().split('').reduce(function (a, b) {
      return +a + +b;
    }, 0);
    console.log(n);
  };

  sum();
}

console.log(getSomeigits(91));
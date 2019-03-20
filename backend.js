// mrvivacious
// backend.js
//
// This file handles various operations
//
// @author Vivek Bhookya

let devLog = document.getElementById("devLog");


function recolor() {
  // Thank you,
  // https://en.wikipedia.org/wiki/Web_colors
  let colors = [
    'red','orange','yellow','blue','indigo','violet','pink','green',
    'maroon','lime','teal','navy','fuchsia','aqua','darkOrange',
    'mediumAquamarine','PaleTurquoise','darkMagenta'
  ];

  let randomIdx = Math.floor(Math.random() * colors.length);
  let randomColor = colors[randomIdx];

  devLog.style.color = randomColor;
}


setInterval(recolor, 400);

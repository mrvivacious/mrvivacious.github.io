// mrvivacious
// backend.js
//
// This file handles various operations
//
// @author Vivek Bhookya

// Function recolor
// Randomly selects a color from the list and sets
//  the "Dev log" text on the homepage (index.html) color
//  to this random color
function recolor() {
  // The element we want to change the color of
  let devLog = document.getElementById("devLog");

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

// Rotate the colors every 400 milliseconds to give a
//  "rainbow" effect
setInterval(recolor, 400);

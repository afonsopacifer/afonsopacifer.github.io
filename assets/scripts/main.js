'use strict';

document.body.addEventListener("mousemove", function (evt) {
  document.body.style.setProperty('--highlight-R', evt.clientX);
  document.body.style.setProperty('--highlight-G', evt.clientY);
});

window.addEventListener('devicelight', function (event) {
  if (event.value < 20) {
    document.body.style.setProperty('--background-default', '#161616');
    document.body.style.setProperty('--text-deafult', '#ffffff');
  } else {
    document.body.style.setProperty('--background-default', '#ffffff');
    document.body.style.setProperty('--text-deafult', '#161616');
  }
});
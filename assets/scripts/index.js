/* jshint esversion: 6 */

"use strict";

(function () {

  var btnOpen = document.getElementById("btnOpen");
  var menu = document.getElementById("menu");

  var toggleMenu = function toggleMenu() {
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  };

  btnOpen.addEventListener("click", toggleMenu);

  var mediaQuery = window.matchMedia("(min-width: 888px)");

  if (mediaQuery.matches) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }

  mediaQuery.addListener(function (changed) {
    if (changed.matches) {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });
})();
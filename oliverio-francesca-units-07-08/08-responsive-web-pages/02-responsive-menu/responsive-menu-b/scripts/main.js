/* main.js
 *
 * When burger icon is clicked, menu opens.
 * When closing icon is clicked, menu closes.
 * When a nav link is clicked, menu closes.
 * 
 */

var burger = document.querySelector(".burger");
var menu = document.querySelector(".menu");
var menuLinks = document.querySelectorAll(".menu li");

// --- Toggle nav on click of burger menu ---
burger.addEventListener("click", () => {
  menu.classList.toggle("nav-active"); // to show/hide menu
  burger.classList.toggle("toggle"); // to animate burger/closing icon
});

// --- Close nav by clicking on list items ---
Array.from(menuLinks).forEach((li) =>
  li.addEventListener("click", () => {
    if (burger.classList.contains("toggle")) {
      burger.classList.remove("toggle");
    }
    if (menu.classList.contains("nav-active")) {
      menu.classList.remove("nav-active");
    }
  })
);
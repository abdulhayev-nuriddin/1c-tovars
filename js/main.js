"use strict";

// -----------------------------------------------------------------------------
function hideLoader() {
  const loader = document.getElementById("loader");
  const contents = document.querySelectorAll(".hidden-content");

  setTimeout(() => {
    loader.classList.add("hidden");
    contents.forEach((el) => el.classList.add("show"));
  }, 1500);
}

// -----------------------------------------------------------------------------

function updateScrollProgressBar() {
  const scrollProgressBar = document.getElementById("scrollProgressBar");

  window.addEventListener("scroll", () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;

    scrollProgressBar.style.width = `${scrollPercent}%`;
  });
}

// -----------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  hideLoader();
  updateScrollProgressBar();
});

// -----------------------------------------------------------------------------
document.querySelector(".hamburger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".header__list").classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

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

// -----------------------------------------------------------------------------

const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".nav.prev");
const nextBtn = document.querySelector(".nav.next");
const cards = document.querySelectorAll(".card");
let index = 0;

function getSlidesPerPage() {
  if (window.innerWidth <= 480) return 1;
  return 3;
}

function updateSlider() {
  const slidesPerPage = getSlidesPerPage();
  const cardWidth = cards[0].offsetWidth + 20;
  const maxIndex = Math.ceil(cards.length / slidesPerPage) - 1;
  if (index > maxIndex) index = 0;
  if (index < 0) index = maxIndex;
  track.style.transform = `translateX(-${index * cardWidth * slidesPerPage}px)`;
}

nextBtn.addEventListener("click", () => {
  index++;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  index--;
  updateSlider();
});

window.addEventListener("resize", updateSlider);
updateSlider();

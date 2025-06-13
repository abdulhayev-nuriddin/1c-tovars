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

const track1 = document.querySelector(".carousel-track");
const prevBtn1 = document.querySelector(".nav.prev");
const nextBtn1 = document.querySelector(".nav.next");
const cards1 = document.querySelectorAll(".card");
let index1 = 0;

function getSlidesPerPage1() {
  if (window.innerWidth <= 480) return 1;
  return 3;
}

function updateSlider1() {
  const slidesPerPage = getSlidesPerPage1();
  const cardWidth = cards1[0].offsetWidth + 20;
  const maxIndex = Math.ceil(cards1.length / slidesPerPage) - 1;
  if (index1 > maxIndex) index1 = 0;
  if (index1 < 0) index1 = maxIndex;
  track1.style.transform = `translateX(-${
    index1 * cardWidth * slidesPerPage
  }px)`;
}

nextBtn1.addEventListener("click", () => {
  index1++;
  updateSlider1();
});

prevBtn1.addEventListener("click", () => {
  index1--;
  updateSlider1();
});

window.addEventListener("resize", updateSlider1);
updateSlider1();

// -----------------------------------------------------------------------------

const track2 = document.querySelector(".base__carousel-track");
const prevBtn2 = document.querySelector(".base__nav.base__prev");
const nextBtn2 = document.querySelector(".base__nav.base__next");
const cards2 = document.querySelectorAll(".base__card");
let index2 = 0;

function getSlidesPerPage2() {
  if (window.innerWidth <= 480) return 1;
  return 3;
}

function updateSlider2() {
  const slidesPerPage = getSlidesPerPage2();
  const cardWidth = cards2[0].offsetWidth + 20;
  const maxIndex = Math.ceil(cards2.length / slidesPerPage) - 1;
  if (index2 > maxIndex) index2 = 0;
  if (index2 < 0) index2 = maxIndex;
  track2.style.transform = `translateX(-${
    index2 * cardWidth * slidesPerPage
  }px)`;
}

nextBtn2.addEventListener("click", () => {
  index2++;
  updateSlider2();
});

prevBtn2.addEventListener("click", () => {
  index2--;
  updateSlider2();
});

window.addEventListener("resize", updateSlider2);
updateSlider2();

setInterval(() => {
  index2++;
  updateSlider2();
}, 3500);

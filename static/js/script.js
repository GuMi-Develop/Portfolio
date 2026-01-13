const swiper = new Swiper(".swiper", {
  speed: 500,
  spaceBetween: 47,
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  slidesOffsetAfter: 45,
  slidesOffsetBefore: 45,
  keyboard: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      centeredSlides: false,
      slidesOffsetAfter: 0,
      slidesOffsetBefore: 0,
      navigation: { nextEl: 0, prevEl: 0 },
    },
    700: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const leftArrow = document.querySelector(".left-stack");
  const rightArrow = document.querySelector(".right-stack");

  const frontDisplay = document.querySelector(".stack-display.a");
  const backDisplay = document.querySelector(".stack-display.b");
  const anotherDisplay = document.querySelector(".stack-display.c");

  const frontName = document.querySelector(".name-stack.a");
  const backName = document.querySelector(".name-stack.b");
  const anotherName = document.querySelector(".name-stack.c");

  rightArrow.addEventListener("click", function () {
    if (window.getComputedStyle(frontDisplay).display === "flex") {
      frontDisplay.style.display = "none";
      backDisplay.style.display = "flex";
      frontName.style.display = "none";
      backName.style.display = "flex";
    } else if (window.getComputedStyle(backDisplay).display === "flex") {
      backDisplay.style.display = "none";
      anotherDisplay.style.display = "flex";
      backName.style.display = "none";
      anotherName.style.display = "flex";
    } else {
      anotherDisplay.style.display = "none";
      anotherName.style.display = "none";
      frontDisplay.style.display = "flex";
      frontName.style.display = "flex";
    }
  });
  leftArrow.addEventListener("click", function () {
    if (window.getComputedStyle(frontDisplay).display === "flex") {
      frontDisplay.style.display = "none";
      anotherDisplay.style.display = "flex";
      frontName.style.display = "none";
      anotherName.style.display = "flex";
    } else if (window.getComputedStyle(backDisplay).display === "flex") {
      backDisplay.style.display = "none";
      backName.style.display = "none";
      frontDisplay.style.display = "flex";
      frontName.style.display = "flex";
    } else {
      anotherDisplay.style.display = "none";
      anotherName.style.display = "none";
      backDisplay.style.display = "flex";
      backName.style.display = "flex";
    }
  });
});

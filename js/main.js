const toggleButton = document.querySelector(".toggle-menu");
const navBarList = document.querySelector(".nav__list");
const navBarLink1 = document.querySelector(".link1");
const navBarLink2 = document.querySelector(".link2");
const navBarLink3 = document.querySelector(".link3");
const navBarLink4 = document.querySelector(".link4");
const prevBtn = document.querySelector(".btn--prev");
const nextBtn = document.querySelector(".btn--next");

toggleButton.addEventListener("click", () => {
  navBarList.classList.toggle("active");
});

navBarLink1.addEventListener("click", () => {
  if (navBarList.classList.contains("active")) {
    navBarList.classList.remove("active");
  }
});

navBarLink2.addEventListener("click", () => {
  if (navBarList.classList.contains("active")) {
    navBarList.classList.remove("active");
  }
});

navBarLink3.addEventListener("click", () => {
  if (navBarList.classList.contains("active")) {
    navBarList.classList.remove("active");
  }
});

navBarLink4.addEventListener("click", () => {
  if (navBarList.classList.contains("active")) {
    navBarList.classList.remove("active");
  }
});

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");

  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };
  const init = function () {
    goToSlide(0);
  };

  init();

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });
};

slider();

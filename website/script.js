const burger = document.querySelector(".burger__btn");
const headerInfo = document.querySelector(".header__info");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger__btn_active");
  headerInfo.classList.toggle("header__info_active");
});

const katalogBurger = document.querySelector(".katalog__burger");
const burgerMenu = document.querySelector(".burger__menu");

katalogBurger.addEventListener("click", () => {
  katalogBurger.classList.toggle("katalog__burger_active");
  burgerMenu.classList.toggle("burger__menu_active");
});

new Swiper('.kategories-slider',{
  spaceBetween: 30,
  breakpoints:{
    1520:{
      slidesPerView: 4.3,
    },
    1000:{
      slidesPerView: 4,
    },
    100:{
      slidesPerView: 3,
    },
  }
})

new Swiper('.guns-slider',{
    spaceBetween: 30,
    scrollbar:{
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints:{
      1050:{
        slidesPerView: 4,
      },
      769:{
        slidesPerView: 3,
      },
      350:{
        slidesPerView: 2,
      },
      100:{
        slidesPerView: 1.5,
      }
    }
  });

  var delay_popup = 1000;
setTimeout("document.getElementById('cookie').style.display='block'", delay_popup);
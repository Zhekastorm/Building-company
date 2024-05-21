const bodyHTML = document.querySelector('body');
const header = document.querySelector('header');

const burgerBtn = document.getElementById('check__menu');
const mainMenu = document.getElementById('menuNav');
const main = document.querySelector('.main');


// Header Fixed



// Nav Menu
burgerBtn.addEventListener("click", function(){
  mainMenu.classList.toggle('active')
  bodyHTML.classList.toggle('hidden')
  main.classList.toggle('shading')
})


// Slider
$('.reviews__inner').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 2000,
});

$('.reviews__inner--mobile').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 2000,
});

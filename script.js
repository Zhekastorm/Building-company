const bodyHTML = document.querySelector('body');
const header = document.querySelector('header');
let scrollPrev = 0
const burgerBtn = document.getElementById('check__menu');
const mainMenu = document.getElementById('menuNav');
const main = document.querySelector('.main');
const modalBtnOpen = document.querySelectorAll("[data-modal-button]")
const modalBtnClose = document.querySelectorAll('.modal__close-btn')
const modalWindowAll = document.querySelectorAll('[data-modal]')
const form = document.querySelectorAll('#form-Contact')
const formBtn = document.querySelectorAll('.formBtn')


// Header Fixed
$(window).scroll(function (){
  const scrolled = $(window).scrollTop()

  if (scrolled > 80 && scrolled > scrollPrev){
    header.classList.add('hidden')
  } else {
    header.classList.remove('hidden')
  }
  scrollPrev = scrolled;
})


// Nav Menu
burgerBtn.addEventListener("click", function(){
  mainMenu.classList.toggle('active');
  bodyHTML.classList.toggle('hidden');
  main.classList.toggle('shading');
})
main.addEventListener('click', function (){
  mainMenu.classList.remove('active');
  burgerBtn.checked = false;
  bodyHTML.classList.remove('hidden');
  this.classList.remove('shading');
})


//Popup
modalBtnOpen.forEach(function (item){
  item.addEventListener('click', function(){
    const modalID = this.dataset.modalButton;
    console.log(modalID)

    const modalCorrect = document.querySelector('#' + modalID)
    modalCorrect.classList.remove('hidden')
    bodyHTML.classList.add('hidden')

    modalCorrect.querySelector('.modal__window').addEventListener('click', function (event){
      event.stopPropagation()
    })
  })
})

modalBtnClose.forEach(function (item){
  item.addEventListener('click', function (){
    const modalCorrect = this.closest('[data-modal]')
    modalCorrect.classList.add('hidden')
    bodyHTML.classList.remove('hidden')
  })
})
modalWindowAll.forEach(function(item){
  item.addEventListener('click', function (){
    this.classList.add('hidden')
    bodyHTML.classList.remove('hidden')
  })
})


// Form
form.forEach(function (item){
  item.addEventListener('submit', getFormValue)
})

function getFormValue(event) {
  event.preventDefault()
  const user_name = form.querySelectorAll('[name="name"]').value,
      user_email = form.querySelectorAll('[name="email"]').value,
      user_text = form.querySelectorAll('[name="text"]').value
  const userContact = (user_name + " " + user_email + " " + user_text)

  alert(userContact)
}


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



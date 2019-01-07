let winHeight;
let footerHeight;
let sectionId;
let sectionPosition;
let fromTop;

//ZADAVANJE VISINE SEKCIJAMA
function sectionHeight() {
  winHeight = $(window).height();
  footerHeight = $('.main-footer').outerHeight();
  $('#home, #about, #gallery').css('min-height', winHeight);
  $('#contact').css('min-height', winHeight - footerHeight);
}
sectionHeight();


//DA SE I KADA SE RESIZE PROZOR PRILAGOĐAVA VISINA
$(window).on('resize', function () {
  sectionHeight()
})

//NAVIGACIJA
$('nav, .nav-button').on('click', function () {
  $('nav').fadeToggle(300);
  $('.nav-button').toggleClass('white')
})

//SMOOTH SCROLL
$('nav a').on('click', function () {
  event.preventDefault()
  //preuzimanje id sekcije
  sectionId = $(this).attr('href')
  sectionPosition = $(sectionId).offset().top;
  //animacija za scroll
  $('html, body').animate({
    scrollTop: sectionPosition
  }, 1000);
})

//SKUPLJANJE HEADERA NA SCROLL
$(window).on('scroll', function () {
  fromTop = $(window).scrollTop()
  console.log(fromTop);
  if (fromTop > 100) {
    $('.main-header').addClass('change-header')
  } else {
    $('.main-header').removeClass('change-header')
  }
})
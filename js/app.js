$(function () {
  $('.nav').removeClass('nav--no-js');

  $('.form input[type="submit"]').on('click', function (e) {
    e.preventDefault();

    var result = true;
    $('.form input[type="text"][required]').each(function(){
      if($(this).val().length == 0){
        result = false;
        return false;
      }
    });

    $(result ? '.popup--success' : '.popup--error').show();
  });

  $('.js-popup-close').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.popup').hide();
  });

  $('.nav__hamburger').on('click', function () {
    $('.nav__list').slideDown();
  });

  $('.nav__close').on('click', function () {
    $('.nav__list').slideUp();
  })
})

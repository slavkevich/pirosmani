// Tabs
$(document).ready(function () {
  $('.tabs__triggers-item').click(function (e) {
    e.preventDefault();
    $('.tabs__triggers-item').removeClass('tabs__triggers-item--active');
    $('.tabs__content-item').removeClass('tabs__content-item--active');

    $(this).addClass('tabs__triggers-item--active');
    $($(this).attr('href')).addClass('tabs__content-item--active');
  });

  $('.tabs__triggers-item:first').click();
});

$(document).ready(function () {
  $('.card-tabs__triggers-item').click(function (e) {
    e.preventDefault();
    $('.card-tabs__triggers-item').removeClass('card-tabs__triggers-item--active');
    $('.card-tabs__content-item').removeClass('card-tabs__content-item--active');

    $(this).addClass('card-tabs__triggers-item--active');
    $($(this).attr('href')).addClass('card-tabs__content-item--active');
  });

  $('.card-tabs__triggers-item:first').click();
});

$(document).ready(function () {
  $('.basket__triggers-item').click(function (e) {
    e.preventDefault();
    $('.basket__triggers-item').removeClass('active');
    $('.basket__content-item').removeClass('active');

    $(this).addClass('active');
    $($(this).attr('href')).addClass('active');
  });

  $('.basket__triggers-item:first').click();
});



// Slider js
$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'ease-in'
  });
});

// Burger
$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__fullscreen,.header__menu-mob').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.header__fullscreen').click(function (event) {
    $('.header__burger,.header__fullscreen,.header__menu-mob').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

// Popup
$(document).ready(function () {
  $('.popup-open').click(function (event) {
    $('.popup,.popup__body').addClass('active');
    $('body').addClass('lock');
  });
  $('.popup__close,.popup__close-reg,.popup').click(function (event) {
    $('.popup,.popup__body,.popup__body-reg').removeClass('active');
    $('body').removeClass('lock');
  });
  $('.form__reg-link').click(function (event) {
    $('.popup__body').removeClass('active');
    $('.popup__body-reg').addClass('active');
  });
});


// Accordeon

$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
    var dropdownlink = this.el.find('.header__item-link-mob-1');
    dropdownlink.on('click', {
        el: this.el,
        multiple: this.multiple
      },
      this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el,
      $this = $(this),
      $next = $this.next();
    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.sub__items-mob').not($next).slideUp().parent().removeClass('open');
    }
  }

  var accordion = new Accordion($('.navigation-list'), false);
});

// Rating 

const ratingItemsList = document.querySelectorAll('.tabs__card-rating-items');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item =>
  item.addEventListener('click', () => {
    const { itemValue } = item.dataset;
    item.parentNode.dataset.totalValue = itemValue;
  })
);

// quantity

let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
  for (let index = 0; index < quantityButtons.length; index++) {
    const quantityButton = quantityButtons[index];
    quantityButton.addEventListener("click", function (e) {
      let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
      if (quantityButton.classList.contains('quantity__button-plus')) {
        value++;
      } else {
        value = value - 1;
        if (value < 1) {
          value = 1;
        }
      }
      quantityButton.closest('.quantity').querySelector('input').value = value;
    });
  };
};


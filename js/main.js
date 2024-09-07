$(function () {
  //HEADER SLIDER START
  $('.header__main-slider').slick({
    arrows: false,
    slidesToShow: 5,
    infinite: true,
    draggable: true,
    // autoplay: true,
    responsive:
    [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToScroll: 1, 
          infinite: true, 
          centerMode: false,
          variableWidth: true,
        },
      },
    ]
  })

  $('.header__slider-arrow--left').on('click', function (e) {
    e.preventDefault()
    $('.header__main-slider').slick('slickPrev')
  })

  $('.header__slider-arrow--right').on('click', function (e) {
    e.preventDefault()
    $('.header__main-slider').slick('slickNext')
  })
  //HEADER SLIDER END

  //SERVICE SLIDER START

  $('.service__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: true,
    // autoplay: true,
    responsive:
    [
      {
        breakpoint: 920,
        settings: {
          slidesToScroll: 1, 
          infinite: true, 
          centerMode: false,
          variableWidth: true,
        },
      },
    ]
  })

  $('.service__slider-arrow--left').on('click', function (e) {
    e.preventDefault()
    $('.service__slider').slick('slickPrev')
  })

  $('.service__slider-arrow--right').on('click', function (e) {
    e.preventDefault()
    $('.service__slider').slick('slickNext')
  })

  //SERVICE SLIDER END

  //EXAMPLES SLIDER START

  $('.examples__slider').slick({
    arrows: false,
    slidesToShow: 1,
    infinite: true,
    draggable: true,
    // autoplay: true,
    dots: true,
    appendDots: ('.examples__slider-dots'),

  })

  $('.examples__slider-arrow--left').on('click', function (e) {
    e.preventDefault()
    $('.examples__slider').slick('slickPrev')
  })

  $('.examples__slider-arrow--right').on('click', function (e) {
    e.preventDefault()
    $('.examples__slider').slick('slickNext')
  })

  //EXAMPLES SLIDER END
  //COMPLEX SLIDER START

  $('.complex__slider').slick({
    arrows: false,
    slidesToShow: 2,
    infinite: true,
    draggable: true,
    // autoplay: true,
    dots: true,
    appendDots: ('.complex__slider-dots'),
    responsive:
    [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 1,
        },
      },

    ]
  })

  $('.complex__slider-arrow--left').on('click', function (e) {
    e.preventDefault()
    $('.complex__slider').slick('slickPrev')
  })

  $('.complex__slider-arrow--right').on('click', function (e) {
    e.preventDefault()
    $('.complex__slider').slick('slickNext')
  })

  //COMPLEX SLIDER END
  //professionals SLIDER START

  $('.professionals__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: true,
    // autoplay: true,

    responsive:
    [
      {
        breakpoint: 1000,
        settings: {
          centerMode: false,
          variableWidth: true,
        },
      },
    ]
  })

  $('.professionals__slider-arrow--left').on('click', function (e) {
    e.preventDefault()
    $('.professionals__slider').slick('slickPrev')
  })

  $('.professionals__slider-arrow--right').on('click', function (e) {
    e.preventDefault()
    $('.professionals__slider').slick('slickNext')
  })

  $('.professionals__btn').on('click', function (e) {
    e.preventDefault();
    var $context = $(this).closest('.professionals__slide-wrapper');

    // Удаление модификаторов --active у всех целевых элементов в текущем контексте
    $context.find('.professionals__slide-wrapper--active, .professionals__btn-label--active, .professionals__btn--active')
      .removeClass('professionals__slide-wrapper--active professionals__btn-label--active professionals__btn--active');

    // Добавление модификаторов --active к текущим элементам
    $context.addClass('professionals__slide-wrapper--active');
    $context.find('.professionals__btn-label').addClass('professionals__btn-label--active');
    $context.find('.professionals__btn').addClass('professionals__btn--active');

  })

  //COMPLEX SLIDER END

  //ACCORDEON START

  $(document).ready(function () {
    // Прикрепляем клик по заголовкам acc-head
    $('#accordeon .acc-head').on('click', f_acc);
  });

  function f_acc() {
    var $item = $(this).closest('.accordeon__item');

    // Скрываем все кроме того, что должны открыть и удаляем модификаторы --active
    $('#accordeon .acc-body').not($(this).next()).slideUp(500);
    $('#accordeon .accordeon__item').not($item).removeClass('accordeon__item--active');
    $('#accordeon .acc-head').not($(this)).removeClass('acc-head--active');

    // Открываем или скрываем блок под заголовком, по которому кликнули
    $(this).next().slideToggle(500);

    // Добавляем/удаляем модификатор --active для текущего элемента
    $item.toggleClass('accordeon__item--active');
    $(this).toggleClass('acc-head--active');
  }


  //ACCORDEON END  
  //COMPLEX SLIDER START

  $('.trust__slider').slick({
    arrows: false,
    slidesToShow: 8,
    infinite: true,
    draggable: true,
    variableWidth: true,
    // autoplay: true,

  })

  $('.trust__slider-arrow--left').on('click', function (e) {
    e.preventDefault()
    $('.trust__slider').slick('slickPrev')
  })

  $('.trust__slider-arrow--right').on('click', function (e) {
    e.preventDefault()
    $('.trust__slider').slick('slickNext')
  })

  //COMPLEX SLIDER END
  //REVIEWS SLIDER START

  $('.reviews__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: true,
    // autoplay: true,
    dots: true,
    appendDots: ('.reviews__slider-dots'),

    responsive:
    [
      {
        breakpoint: 1170,
        settings: {
          centerMode: false,
          variableWidth: true,
        },
      },
    ]
  })

  $('.reviews__slider-arrow--left').on('click', function (e) {
    e.preventDefault()
    $('.reviews__slider').slick('slickPrev')
  })

  $('.reviews__slider-arrow--right').on('click', function (e) {
    e.preventDefault()
    $('.reviews__slider').slick('slickNext')
  })

  //REVIEWS SLIDER END
  //STICKY MENU START

  $(document).ready(function() {
    var $header = $('.header__row'); // Основной заголовок
    var $formWrapper = $('.header__form-wrapper'); // Обёртка формы
    var headerHeight = $header.outerHeight();
    var formWrapperHeight = $formWrapper.outerHeight();
  
    // Функция для проверки и применения класса фиксированного позиционирования
    function checkSticky() {
      var scrollTop = $(window).scrollTop();
      var windowWidth = $(window).width();
  
      if (windowWidth >= 1000) {
        // При ширине 1000px и более заголовок прилипает
        if (scrollTop > headerHeight) {
          $header.addClass('header__row--sticky');
        } else {
          $header.removeClass('header__row--sticky');
        }
        $formWrapper.removeClass('header__form-wrapper--sticky');
      } else {
        // При ширине менее 1000px только обёртка формы прилипает
        if (scrollTop > formWrapperHeight) {
          $formWrapper.addClass('header__form-wrapper--sticky');
        } else {
          $formWrapper.removeClass('header__form-wrapper--sticky');
        }
        $header.removeClass('header__row--sticky');
      }
    }
  
    // Проверка при прокрутке и изменении размера окна
    $(window).on('scroll resize', function() {
      checkSticky();
    });
  
    // Проверка при загрузке страницы
    checkSticky();
  });
  
  //STICKY MENU END
})
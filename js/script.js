$(document).ready(function () {
  $("#slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true,
    autoplay: true,
    prevArrow:
      '<div class="slick-arrow-wrp slick-prev slick-arrow"><svg class="custom-arrow" width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.55835 14L16.8708 24.3125L13.925 27.2584L0.666687 14L13.925 0.741699L16.8708 3.68753L6.55835 14Z" fill="#FF9600"/></svg></div>',
    nextArrow:
      '<div class="slick-arrow-wrp slick-next slick-arrow"><svg class="custom-arrow" width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.55835 14L16.8708 24.3125L13.925 27.2584L0.666687 14L13.925 0.741699L16.8708 3.68753L6.55835 14Z" fill="#FF9600"/></svg></div>',
    customPaging: function (slider, i) {
      return '<svg class="my-dot" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" fill="white"/></svg>';
    },
  });
});

$(function () {

  // 공지사항 슬라이더(세로)
  var swiper = new Swiper('.notice_sc', {
    direction: 'vertical',
    autoplay: {
      delay: 5000,
    },
    loop: true,
  });

  // 타일러 패럴랙스
  $(window).scroll(function () {
    const scrollTop = $(window).scrollTop() + $(window).height() * 6 / 10;
    if (scrollTop > $(".tyler").offset().top) {
      $(".tyler").addClass("show");
    } else {
      $(".tyler").removeClass("show");
    }
  });

  // 대표강사 탭메뉴
  const indicator = document.querySelector('.indicator');
  const items = document.querySelectorAll('.nav-item');
  indicator.style.width = $(".active>a").width() - 5 + 'px';
  indicator.style.left = $(".active>a").offset().left + 10 + 'px';
  indicator.style.backgroundColor = $(".active").attr('active-color');
  $(".class_menu>ul").hide();
  $(".active>ul").show();
  $(".class_menu").click(function (e) {
    e.preventDefault();
    $(".class_menu").removeClass("active");
    $(this).addClass("active");
    $(".class_menu>ul").stop().fadeOut();
    $(".active>ul").stop().fadeIn();
    indicator.style.width = $(".active>a").width() + 'px';
    indicator.style.left = $(".active>a").offset().left + 'px';
    indicator.style.backgroundColor = $(".active").attr('active-color');
  });

  // 수강후기 슬라이더
  var swiper = new Swiper('.after_sc', {
    slidesPerView: 5,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 5000,
    },
  });

  // 체험신청 패럴랙스
  $(window).scroll(function () {
    const scrollTop = $(window).scrollTop() + $(window).height() * 6 / 10;
    if (scrollTop > $(".find").offset().top) {
      $(".find").addClass("show");
    } else {
      $(".find").removeClass("show");
    }
  });

  // 본부찾기 패럴랙스
  $(window).scroll(function () {
    const scrollTop = $(window).scrollTop() + $(window).height() * 8 / 10;
    if (scrollTop > $(".find_find").offset().top) {
      $(".find_find").addClass("show");
    } else {
      $(".find_find").removeClass("show");
    }
  });
});
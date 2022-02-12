const main = document.querySelectorAll('main'),
  main_page = document.querySelectorAll('.main-page'),
  hamburger_controls = document.querySelectorAll('.hamburger'),
  ham = document.querySelectorAll('.ham'),
  cross = document.querySelectorAll('.cross'),
  menu = document.querySelectorAll('.menus');

ham[0].addEventListener('click', function () {
  hamburger_controls[0].style.transform = "rotate(-90deg)";
  main_page[0].style.transform = "rotate(-20deg)";
  main[0].style.backgroundColor = "#333333";
  menu[0].style.transform = "translateX(0)";
});

cross[0].addEventListener('click', function () {
  hamburger_controls[0].style.transform = "rotate(0)";
  main_page[0].style.transform = "rotate(0deg)";
  main[0].style.backgroundColor = "#fff";
  menu[0].style.transform = "translateX(-300px)";
});


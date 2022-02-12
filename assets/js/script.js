const main = document.getElementsByTagName('main');
const ham = document.querySelectorAll('.hamburger');
const right = document.querySelectorAll('.right');
const menus = document.querySelectorAll('.menus');
const cross = document.querySelectorAll('.cross');
ham[0].addEventListener('click', function () {

  this.classList.toggle('cross');
   // main[0].style.backgroundColor = "#000";
   // right[0].style.transform = 'rotate(-20deg)';
   // right[0].style.transformOrigin = '0 0';
   // menus[0].style.left = "10%";
   // menus[0].style.paddingTop = "35%";
   // this.classList.add('cross');
   // this.classList.remove('hamburger');
   
   // console.log(cross);
   // console.log(cross[0]);
});


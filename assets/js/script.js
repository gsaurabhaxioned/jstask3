const main=document.querySelectorAll('main');
const main_page = document.querySelectorAll('.main-page');
const hamburger_controls= document.querySelectorAll('.hamburger');
const ham = document.querySelectorAll('.ham');
const cross = document.querySelectorAll('.cross');
ham[0].addEventListener('click', function () {
  hamburger_controls[0].style.transform="rotate(-90deg)";
  main_page[0].style.transform="rotate(-30deg)";
  main[0].style.backgroundColor="#333333";
  });

cross[0].addEventListener('click',function(){
  hamburger_controls[0].style.transform="rotate(0)";
  main_page[0].style.transform="rotate(0deg)";
  main[0].style.backgroundColor="#fff";
})

  // this.classList.toggle('cross');
  // right[0].classList.toggle('right-after-click');
  // main[0].classList.toggle('main-after-click');
   // main[0].style.backgroundColor = "#000";
   // right[0].style.transform = 'rotate(-20deg)';
   // right[0].style.transformOrigin = '0 0';
   // menus[0].style.left = "10%";
   // menus[0].style.paddingTop = "35%";
   // this.classList.add('cross');
   // this.classList.remove('hamburger');
   
   // console.log(cross);
   // console.log(cross[0]);



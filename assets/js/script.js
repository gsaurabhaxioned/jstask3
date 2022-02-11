const main=document.getElementsByTagName('main');
const ham=document.querySelectorAll('.hamburger');
const right=document.querySelectorAll('.right');
const menus=document.querySelectorAll('.menus');
const cross=document.querySelectorAll('.cross');
ham[0].addEventListener('click',function(){
   main[0].style.backgroundColor="#000";
   right[0].style.transform='rotate(-30deg)';
   right[0].style.transform='rotate(-30deg)';
   right[0].style.transformOrigin='0 0';
   this.classList.remove('hamburger');
   this.classList.add('cross');
  });

cross[0].addEventListener('click',function(){
   main[0].style.backgroundColor="#fff";
   right[0].style.transform='rotate(0)';
   menus[0].style.transform='translate(0)';
   this.classList.remove('cross');
   this.classList.add('hamburger');
});














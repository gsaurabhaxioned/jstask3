const ham=document.querySelectorAll('.hamburger');
const right=document.querySelectorAll('.right');
const menus=document.querySelectorAll('.menus');
const cross=document.querySelectorAll('.cross');
// const menus=document.querySelectorAll('.hamburger');
ham[0].addEventListener('click',function(){
   right[0].style.transform='rotate(-10deg)';
   menus[0].style.transform='translate(100px)';
   this.style.transform="rotate(-90deg)";
   cross[0].style.transform='rotate(-90deg)';
   this.style.top='-20%';
   cross[0].style.left='12%';
});














const main=document.getElementsByTagName('main');
const ham=document.querySelectorAll('.hamburger');
const right=document.querySelectorAll('.right');
const menus=document.querySelectorAll('.menus');
const cross=document.querySelectorAll('.cross');
ham[0].addEventListener('click',function(){
   main[0].style.backgroundColor="#000";
   right[0].style.transform='rotate(-30deg)';
   menus[0].style.transform='translate(100px)';
   this.style.transform="rotate(90deg)";
   cross[0].style.transform='rotate(-90deg)';
   this.style.top='-20%';
   cross[0].style.left='12%';
});
cross[0].addEventListener('click',function(){
   main[0].style.backgroundColor="#fff";
   right[0].style.transform='rotate(0)';
   menus[0].style.transform='translate(0)';
   this.style.transform="rotate(0)";
   cross[0].style.transform='rotate(0)';
   this.style.top='20%';
   cross[0].style.left='85px';
});















const email = document.getElementById('email');
const password = document.getElementById('password');
const date = document.getElementById('date');


email.addEventListener('focus', function(){
    email.style.background = "violet";
});
email.addEventListener('blur', function(){
    email.style.background = "white";
});

password.addEventListener('focus', function(){
    password.style.background = "violet";
});
password.addEventListener('blur', function(){
    password.style.background = "white";
});

date.addEventListener('focus', function(){
  date.style.background = "violet";
});
date.addEventListener('blur', function(){
  date.style.background = "white";
});


let tl = gsap.timeline();


tl.from(".form-control", {
  duration: 1.30,
  y: 150,
  autoAlpha: 0,
  ease: Power3.out,
  stagger: 1.5
}).from(".desc", {
    duration: 0.5,
    y: 150,
    autoAlpha: 0,
    ease: Power3.out,
    stagger: 1.5,
}).from(".medi", {
  duration: 0.75,
  x: 300,
  autoAlpha: 0,
  ease: "elastic.out(1, 1)",
  stagger: {
    each: 0.75,
    amount: 0.5
  }
}, "+=0.50");




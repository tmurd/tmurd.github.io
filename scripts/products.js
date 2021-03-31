const animation = document.querySelector(".animation");

const tl = new TimelineMax();

let tween = gsap.fromTo(".animation",
{ height: "0%" }, 
{ height: "100%", ease: "elastic", duration: 1 });

tween.play();
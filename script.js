/* ==========================================
   ANSH DIGITAL MARKETING
   PREMIUM SCRIPT.JS
========================================== */

/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.transition = "0.8s";

    }, 1500);

});

/* ==========================================
   DARK MODE
========================================== */

const themeToggle =
document.getElementById("themeToggle");

if(themeToggle){

themeToggle.addEventListener("click", () => {

document.body.classList.toggle("light");

localStorage.setItem(
"theme",
document.body.classList.contains("light")
? "light"
: "dark"
);

});

}

/* Load Saved Theme */

if(localStorage.getItem("theme") === "light"){

document.body.classList.add("light");

}

/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn =
document.querySelector(".menu-toggle");

const navLinks =
document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click", () => {

navLinks.classList.toggle("active");

});

}

/* ==========================================
   TYPED JS
========================================== */

if(document.getElementById("typed-text")){

new Typed("#typed-text", {

strings: [

"SEO Services",
"Google Ads",
"Social Media Marketing",
"Website Management",
"Performance Marketing",
"Lead Generation"

],

typeSpeed:70,

backSpeed:50,

backDelay:1500,

loop:true

});

}

/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

window.addEventListener("scroll", () => {

const scrollProgress =
document.querySelector(".scroll-progress");

if(scrollProgress){

const height =
document.documentElement.scrollHeight -
window.innerHeight;

const progress =
(window.scrollY / height) * 100;

scrollProgress.style.width =
progress + "%";

}

});

/* ==========================================
   BACK TO TOP
========================================== */

const backTop =
document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

if(backTop){

if(window.scrollY > 500){

backTop.classList.add("show");

}else{

backTop.classList.remove("show");

}

}

});

if(backTop){

backTop.addEventListener("click", () => {

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters =
document.querySelectorAll(".count");

const runCounter = () => {

counters.forEach(counter => {

const target =
+counter.getAttribute("data-target");

let current = 0;

const increment = target / 150;

const updateCounter = () => {

if(current < target){

current += increment;

counter.innerText =
Math.floor(current);

requestAnimationFrame(updateCounter);

}else{

counter.innerText = target;

}

};

updateCounter();

});

};

const counterSection =
document.querySelector(".results");

if(counterSection){

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

runCounter();

observer.disconnect();

}

});

});

observer.observe(counterSection);

}

/* ==========================================
   FAQ ACCORDION
========================================== */

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

const question =
item.querySelector(".faq-question");

question.addEventListener("click", () => {

item.classList.toggle("active");

const answer =
item.querySelector(".faq-answer");

if(answer.style.maxHeight){

answer.style.maxHeight = null;

}else{

answer.style.maxHeight =
answer.scrollHeight + "px";

}

});

});

/* ==========================================
   LEAD POPUP
========================================== */

const popup =
document.getElementById("leadPopup");

const overlay =
document.querySelector(".popup-overlay");

setTimeout(() => {

if(popup){

popup.style.display = "block";

}

if(overlay){

overlay.style.display = "block";

}

},8000);

/* ==========================================
   CLOSE POPUP
========================================== */

const closePopup =
document.querySelector(".close-popup");

if(closePopup){

closePopup.addEventListener("click",()=>{

popup.style.display = "none";

overlay.style.display = "none";

});

}

if(overlay){

overlay.addEventListener("click",()=>{

popup.style.display = "none";

overlay.style.display = "none";

});

}

/* ==========================================
   MOUSE GLOW EFFECT
========================================== */

const glow =
document.querySelector(".mouse-glow");

if(glow){

document.addEventListener("mousemove",(e)=>{

glow.style.left =
e.clientX + "px";

glow.style.top =
e.clientY + "px";

});

}


/* =========================
   PREMIUM LOADER
========================= */

window.addEventListener("load",()=>{

  const loader =
  document.getElementById("loader");

  setTimeout(()=>{

    loader.classList.add("hide");

  },1600);

});

/* =========================
   PREMIUM NAVBAR SCROLL
========================= */

window.addEventListener("scroll",()=>{

  const navbar =
  document.querySelector(".navbar");

  if(window.scrollY > 40){

    navbar.classList.add("scrolled");

  }else{

    navbar.classList.remove("scrolled");

  }

});

/* =========================
   GALLERY SLIDER
========================= */

const slider =
document.getElementById("gallerySlider");

const prevBtn =
document.getElementById("galleryPrev");

const nextBtn =
document.getElementById("galleryNext");

const slides =
document.querySelectorAll(".gallery-slide");

const dotsContainer =
document.getElementById("galleryDots");

let currentIndex = 0;

/* DOTS */

slides.forEach((_,index)=>{

  const dot =
  document.createElement("div");

  dot.classList.add("gallery-dot");

  if(index === 0){
    dot.classList.add("active");
  }

  dotsContainer.appendChild(dot);

});

const dots =
document.querySelectorAll(".gallery-dot");

/* UPDATE */

function updateSlider(){

  const slideWidth =
    slides[0].offsetWidth + 25;

  slider.scrollTo({
    left:currentIndex * slideWidth,
    behavior:"smooth"
  });

  dots.forEach(dot =>
    dot.classList.remove("active")
  );

  dots[currentIndex]
    .classList.add("active");

}

/* NEXT */

nextBtn.addEventListener("click",()=>{

  currentIndex++;

  if(currentIndex >= slides.length){
    currentIndex = 0;
  }

  updateSlider();

});

/* PREV */

prevBtn.addEventListener("click",()=>{

  currentIndex--;

  if(currentIndex < 0){
    currentIndex = slides.length - 1;
  }

  updateSlider();

});

/* AUTO SLIDE */

setInterval(()=>{

  currentIndex++;

  if(currentIndex >= slides.length){
    currentIndex = 0;
  }

  updateSlider();

},4000);

/* =========================
   EMAILJS
========================= */

emailjs.init("tlec_1oGBFpkm4TF0");

const contactForm =
document.getElementById("contactForm");

const formStatus =
document.getElementById("formStatus");

contactForm.addEventListener("submit",(e)=>{

  e.preventDefault();

  formStatus.innerHTML =
  "Se trimite mesajul...";

  emailjs.send(
    "service_phoypga",
    "template_4vjxhbl",
    {
      from_name:
      document.getElementById("name").value,

      from_email:
      document.getElementById("email").value,

      subject:
      document.getElementById("subject").value,

      message:
      document.getElementById("message").value
    }
  )

  .then(()=>{

    formStatus.innerHTML =
    "Mesaj trimis cu succes ✨";

    contactForm.reset();

  })

  .catch(()=>{

    formStatus.innerHTML =
    "A apărut o eroare.";

  });

});
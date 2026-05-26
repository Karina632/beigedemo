/* LOAD HEADER */

fetch("components/header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    initNavbar();
  });

/* LOAD FOOTER */

fetch("components/footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;

    initBackToTop();
  });

/* NAVBAR */

function initNavbar(){

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {

    const isInside =
      navLinks.contains(e.target) ||
      hamburger.contains(e.target);

    if(!isInside){
      navLinks.classList.remove("active");
    }

  });

}

/* BACK TO TOP */

function initBackToTop(){

  const backToTop =
    document.getElementById("backToTop");

  window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }

  });

  backToTop.addEventListener("click", () => {

    window.scrollTo({
      top:0,
      behavior:"smooth"
    });

  });

}
const nav = document.getElementById("topNav");
window.onscroll = function () {
  if (window.pageYOffset > 800) {
    nav.classList.add("sticky");
   }  else {
      nav.classList.remove("sticky");
  }
}


const navButton = document.querySelector('button[aria-expanded]');

function toggleNav({ target }) {
  const expanded = target.getAttribute('aria-expanded') === 'true' || false;
  navButton.setAttribute('aria-expanded', !expanded);
}

navButton.addEventListener('click', toggleNav);

var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

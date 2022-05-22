const navLinks = document.querySelector('.nav-links');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () =>{
    console.log("clicked");
    navLinks.classList.toggle('show');
})

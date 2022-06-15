const navLinks = document.querySelector('.nav-links');
const navToggle = document.querySelector('.nav-toggle');
const navLink = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () =>{
    console.log("clicked");
    navLinks.classList.toggle('show');
})

// navLink.addEventListener('click',() =>{
//     console.log('clicked');
//     navLinks.classList.toggle('show');
// })

navLink.forEach((link) =>{
    link.addEventListener('click',() =>{
    console.log('clicked');
    navLinks.classList.toggle('show');
})
})
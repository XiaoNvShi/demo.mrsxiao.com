
const menuBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if(menuBtn && navLinks){
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
}
const revealItems = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){entry.target.classList.add('in'); io.unobserve(entry.target);}
  })
},{threshold:.12});
revealItems.forEach(el => io.observe(el));

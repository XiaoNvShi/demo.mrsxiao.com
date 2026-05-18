
const header=document.getElementById('siteHeader');
const progress=document.getElementById('scrollProgress');
const menu=document.getElementById('menuToggle');
const mobile=document.getElementById('mobileNav');
function onScroll(){
  const y=window.scrollY||document.documentElement.scrollTop;
  header?.classList.toggle('scrolled',y>20);
  const h=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=h>0?`${(y/h)*100}%`:'0%';
}
window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
menu?.addEventListener('click',()=>{menu.classList.toggle('open'); mobile.classList.toggle('open'); menu.setAttribute('aria-expanded',menu.classList.contains('open')?'true':'false')});
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('[data-product-filter]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const key=btn.dataset.productFilter;
    document.querySelectorAll('[data-product-filter]').forEach(b=>b.classList.toggle('active',b===btn));
    document.querySelectorAll('.product-card[data-filter]').forEach(card=>{card.style.display=(key==='all'||card.dataset.filter.includes(key))?'flex':'none'});
  });
});

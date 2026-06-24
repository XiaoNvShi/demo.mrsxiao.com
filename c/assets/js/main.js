const nav = document.querySelector('.navlinks');
const menuBtn = document.querySelector('[data-menu]');
if(menuBtn){menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));}
const cartButtons = document.querySelectorAll('[data-cart]');
const cartCount = document.querySelector('.cart-count');
let count = 0;
cartButtons.forEach(btn=>btn.addEventListener('click',()=>{count++; if(cartCount) cartCount.textContent=count; btn.textContent='Added'; setTimeout(()=>btn.textContent=btn.dataset.cart || 'Add to Cart',1200);}));
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in');io.unobserve(entry.target);}})},{threshold:.12});
reveals.forEach(el=>io.observe(el));
const finder = document.querySelector('[data-finder]');
if(finder){finder.addEventListener('submit',e=>{e.preventDefault(); const discipline=finder.querySelector('[name="discipline"]').value; const axle=finder.querySelector('[name="axle"]').value; const brake=finder.querySelector('[name="brake"]').value; const result=document.querySelector('[data-finder-result]'); if(result){result.textContent=`Recommended: ${discipline} hub set, ${axle}, ${brake}. Open product list for matching options.`;}})}

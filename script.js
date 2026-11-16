function toggleMenu(){document.getElementById('navLinks').classList.toggle('show')}
function toggleTheme(){
 document.body.classList.toggle('light');
 try{localStorage.setItem('nexsora-theme',document.body.classList.contains('light')?'light':'dark')}catch(e){}
}
try{if(localStorage.getItem('nexsora-theme')==='light')document.body.classList.add('light')}catch(e){}
function updateClock(){
 const el=document.getElementById('clock');if(!el)return;
 const now=new Date();
 el.textContent=now.toLocaleDateString('id-ID',{weekday:'long',day:'numeric',month:'long',year:'numeric',timeZone:'Asia/Jakarta'})+' • '+now.toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit',second:'2-digit',timeZone:'Asia/Jakarta'})+' WIB';
}
updateClock();setInterval(updateClock,1000);
const current=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav-links a').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active');a.addEventListener('click',()=>document.getElementById('navLinks').classList.remove('show'))});
document.getElementById('year').textContent=new Date().getFullYear();

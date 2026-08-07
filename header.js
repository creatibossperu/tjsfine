// header.js - CORREGIDO 100% igual que nosotros.html que SI funciona
const toolbarHTML = `
<!--TOOLBAR - NO STICKY, se va al hacer scroll -->
<div id="topToolbar" class="bg-[#131d3b] text-[#EDFBE2] text-[13px] py-2.5">
  <div class="max-w-[1240px] mx-auto px-5 flex justify-between items-center">
    <div class="flex gap-5">
      <a href="tel:989085474" class="flex items-center gap-1.5 hover:text-white"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.01l-2.21 2.22z"></path></svg> +51 989 085 474</a>
      <a href="tel:966755833" class="flex items-center gap-1.5 hover:text-white"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.01l-2.21 2.22z"></path></svg> +51 966 755 833</a>
    </div>
    <div class="flex gap-2.5 items-center">
      <a href="https://facebook.com/Jezurdo180315/" target="_blank" aria-label="Facebook" class="w-7 h-7 bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-[#54B435] transition-all hover:scale-110"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a>
      <a href="https://instagram.com/jezurdo82" target="_blank" aria-label="Instagram" class="w-7 h-7 bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-[#54B435] transition-all hover:scale-110"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8 2h8.4A5.8 5.8 0 0122 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8A5.8 5.8 0 012 16.2V7.8A5.8 5.8 0 017.8 2zm0 2A3.8 3.8 0 004 7.8v8.4A3.8 3.8 0 007.8 20h8.4a3.8 3.8 0 003.8-3.8V7.8A3.8 3.8 0 0016.2 4H7.8zm9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"></path></svg></a>
      <a href="https://youtube.com/@jezurdo82" target="_blank" aria-label="YouTube" class="w-7 h-7 bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-[#FF0000] transition-all hover:scale-110"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 12s0-4-1-6a3 3 0 00-2-2C18 3 12 3 12 3s-6 0-8 1a3 3 0 00-2 2C1 8 1 12 1 12s0 4 1 6a3 3 0 002 2c2 1 8 1 8 1s6 0 8-1a3 3 0 002-2c1-2 1-6 1-6zM10 15V9l5 3-5 3z"></path></svg></a>
      <a href="https://tiktok.com/@jesusz5782" target="_blank" aria-label="TikTok" class="w-7 h-7 bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all hover:scale-110 border border-white/10"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.58-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path></svg></a>
    </div>
  </div>
</div>
`;

const headerHTML = `
<header id="mainHeader" class="sticky top-0 z-[100] bg-white/95 backdrop-blur-md border-b border-gray-100 w-full">
  <div class="max-w-[1240px] mx-auto px-5 h-[74px] flex items-center justify-between">
    <a href="index.html" class="flex items-center gap-3">
      <div class="w-[44px] h-[44px] rounded-full bg-black p-[2px] overflow-hidden">
        <img src="https://tjsfine.com/wp-content/uploads/2024/10/TJS-LOGO-90x76-2-90x90.png" alt="TJS FINE" class="w-full h-full object-cover rounded-full">
      </div>
      <div class="leading-none">
        <div class="font-extrabold tracking-tight text-[17px]">TJS FINE</div>
        <div class="text-[10px] tracking-[0.18em] uppercase text-slate-500 font-bold mt-0.5">Vidrios y Remodelaciones</div>
      </div>
    </a>
    <nav class="hidden lg:flex gap-8 text-[14px] font-medium" id="mainNav">
      <a href="index.html" data-page="index.html" class="nav-link relative py-2 hover:text-[#54B435] transition">INICIO</a>
      <a href="nosotros.html" data-page="nosotros.html" class="nav-link relative py-2 hover:text-[#54B435] transition">NOSOTROS</a>
      <a href="servicios.html" data-page="servicios.html" class="nav-link relative py-2 hover:text-[#54B435] transition">SERVICIOS</a>
      <a href="proyectos.html" data-page="proyectos.html" class="nav-link relative py-2 hover:text-[#54B435] transition">PROYECTOS</a>
      <a href="contacto.html" data-page="contacto.html" class="nav-link relative py-2 hover:text-[#54B435] transition">CONTACTO</a>
    </nav>
    <a href="https://wa.me/51989085474" target="_blank" class="hidden lg:inline-flex bg-[#54B435] hover:bg-[#379237] text-white px-6 py-3 rounded-[8px] text-[12px] uppercase font-bold">Cotiza gratis</a>
    <button id="hamburger" class="lg:hidden text-2xl">☰</button>
  </div>
</header>

<div id="drawer" class="fixed top-0 right-0 w-[84%] max-w-[360px] h-screen bg-white shadow-2xl translate-x-full transition-transform duration-300 z-[110] p-7 lg:hidden flex flex-col gap-6">
  <div class="flex justify-between"><span class="font-bold">MENU</span><button id="closeDrawer">X</button></div>
  <a href="index.html">INICIO</a><a href="nosotros.html">NOSOTROS</a><a href="servicios.html">SERVICIOS</a><a href="proyectos.html">PROYECTOS</a><a href="contacto.html">CONTACTO</a>
</div>
<div id="overlay" class="fixed inset-0 bg-black/50 hidden z-[105]"></div>

<!--WHATSAPP-->
<a href="https://wa.me/51989085474?text=Hola%20TJS%20FINE%2C%20quiero%20una%20cotizaci%C3%B3n" target="_blank" style="position:fixed;bottom:24px;right:24px;z-index:9999;width:60px;height:60px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(37,211,102,0.45)"><svg style="width:28px;height:28px" fill="white" viewBox="0 0 24 24"><path d="M19.1 4.9A9.8 9.8 0 0012 2a9.9 9.9 0 00-8.5 15.1L2 22l5-1.3A9.9 9.9 0 0012 22a9.9 9.9 0 007.1-17.1z"/></svg></a>

`;

document.addEventListener('DOMContentLoaded', ()=>{
  const container = document.getElementById('site-header');
  if(!container) return;
  container.innerHTML = toolbarHTML;
  container.insertAdjacentHTML('afterend', headerHTML);
  container.style.position = 'relative';
  container.style.display = 'block';
  container.style.width = '100%';
  const mainHeader = document.getElementById('mainHeader');
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closeDrawer');
  window.addEventListener('scroll', ()=>{
    if(!mainHeader) return;
    if(window.scrollY > 20) mainHeader.classList.add('shadow-lg');
    else mainHeader.classList.remove('shadow-lg');
  });
  if(hamburger && drawer && overlay){
    hamburger.onclick = ()=>{ drawer.classList.remove('translate-x-full'); overlay.classList.remove('hidden'); document.body.style.overflow='hidden'; };
    const closeAll = ()=>{ drawer.classList.add('translate-x-full'); overlay.classList.add('hidden'); document.body.style.overflow=''; };
    if(closeBtn) closeBtn.onclick = closeAll;
    overlay.onclick = closeAll;
  }
  const current = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-link').forEach(link=>{
    const page = (link.getAttribute('data-page')||'').toLowerCase();
    if(current === page){
      link.classList.add('text-[#54B435]','font-bold');
      const underline = document.createElement('span');
      underline.className = 'absolute -bottom-1 left-0 w-full h-[3px] bg-[#54B435] rounded-full';
      link.style.position = 'relative';
      link.appendChild(underline);
    }
  });
});

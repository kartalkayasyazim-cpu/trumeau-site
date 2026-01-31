
(function(){
  const btn = document.querySelector('[data-hamburger]');
  const drawer = document.querySelector('[data-drawer]');
  if(btn && drawer){
    btn.addEventListener('click', ()=>{
      drawer.style.display = (drawer.style.display === 'block') ? 'none' : 'block';
    });
  }

  // simple hero rotation (text only) – optional
  const hero = document.querySelector('[data-hero]');
  if(hero){
    let slides = [];
    try{ slides = JSON.parse(hero.getAttribute('data-hero')||'[]'); }catch(e){}
    if(slides.length){
      const title = document.querySelector('[data-hero-title]');
      const kicker = document.querySelector('[data-hero-kicker]');
      const sub = document.querySelector('[data-hero-sub]');
      const cta = document.querySelector('[data-hero-cta]');
      let i=0;
      function render(){
        const s=slides[i]||{};
        if(kicker) kicker.textContent = s.kicker || '';
        if(title) title.textContent = s.title || '';
        if(sub) sub.textContent = s.sub || '';
        if(cta) cta.textContent = s.cta || 'EXPLORE NOW';
      }
      render();
      setInterval(()=>{ i=(i+1)%slides.length; render(); }, 6500);
    }
  }

  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
})();

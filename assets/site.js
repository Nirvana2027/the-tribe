(function(){
  const cb = document.getElementById('nav-toggle');
  if(!cb) return;
  const lock = () => document.body.classList.add('overflow-hidden');
  const unlock = () => document.body.classList.remove('overflow-hidden');
  const close = () => { cb.checked = false; unlock(); };
  cb.addEventListener('change', () => cb.checked ? lock() : unlock());
  window.addEventListener('resize', () => { if (innerWidth >= 640) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();

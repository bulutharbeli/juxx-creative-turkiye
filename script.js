// Portfolio filter
document.addEventListener('DOMContentLoaded', function(){
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.mitem');

  filterBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      filterBtns.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      items.forEach(it=>{
        if(cat==='all' || it.dataset.cat===cat){
          it.classList.remove('hide');
        } else {
          it.classList.add('hide');
        }
      });
    });
  });

  // Lightbox
  const lb = document.getElementById('lightbox');
  if(lb){
    const lbImg = lb.querySelector('img');
    const lbCap = lb.querySelector('.lb-cap');
    items.forEach(it=>{
      it.addEventListener('click', ()=>{
        const img = it.querySelector('img');
        lbImg.src = img.src;
        lbCap.textContent = it.dataset.title || '';
        lb.classList.add('open');
      });
    });
    lb.addEventListener('click', (e)=>{
      if(e.target===lb || e.target.classList.contains('lightbox-close')){
        lb.classList.remove('open');
      }
    });
    document.addEventListener('keydown', (e)=>{
      if(e.key==='Escape') lb.classList.remove('open');
    });
  }
});

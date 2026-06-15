document.addEventListener('DOMContentLoaded', ()=>{
  const thumbs = Array.from(document.querySelectorAll('.thumb'))
  const lb = document.getElementById('lightbox')
  const lbImg = document.getElementById('lightboxImg')
  const closeBtn = document.getElementById('closeLB')

  thumbs.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const img = btn.querySelector('img')
      lbImg.src = img.src
      lbImg.alt = img.alt || ''
      lb.setAttribute('aria-hidden','false')
    })
  })

  function close(){
    lb.setAttribute('aria-hidden','true')
    lbImg.src = ''
  }

  closeBtn.addEventListener('click', close)
  lb.addEventListener('click', (e)=>{ if(e.target===lb) close() })
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') close() })
})

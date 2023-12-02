const STAR_COUNT = 800
const space = document.getElementById('space')

for(let i = 0; i < STAR_COUNT; i++){
  const star = document.createElement('div')

  star.classList.add('star')

  space.append(star)
}

document.querySelectorAll('.star').forEach((element) => {
  const s = 0.2 + (Math.random() * 1)
  const r = STAR_COUNT + (Math.random() * 300)

  element.style.transformOrigin = '0 0 ' + r + 'px'
  element.style.transform = `translate3d(0,0,-${r}px) rotateY(${(Math.random()*360)}deg) rotateX(${(Math.random()*-50)}deg) scale(${s}, ${s})`
})
const carouselSlide = document.querySelector('.carousel-slide')
const images = document.querySelectorAll('.carousel-slide img')

let counter = 0
let slideWidth = images[0].clientWidth

function updateSlideWidth() {
  slideWidth = images[0].clientWidth
}

function nextSlide() {
  if (counter >= images.length - 1) {
    counter = 0
  } else {
    counter++
  }
  updateSlidePosition()
}

function prevSlide() {
  if (counter <= 0) {
    counter = images.length - 1
  } else {
    counter--
  }
  updateSlidePosition()
}

function updateSlidePosition() {
  carouselSlide.style.transform = `translateX(-${counter * slideWidth}px)`
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prevSlide()
  if (e.key === 'ArrowRight') nextSlide()
})

// Update slide width on window resize
window.addEventListener('resize', updateSlideWidth)

// Initial setup
updateSlidePosition()
updateSlideWidth()
setInterval(nextSlide, 3000)

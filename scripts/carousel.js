const carouselSlide = document.querySelector('#carousel-slide')
const images = document.querySelectorAll('#carousel-slide img')

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

// This won't work for SVGs
document.addEventListener('click', function (event) {
  if (event.target.matches('#left')) {
    document.querySelector('#left').classList.add('active')
  } else if (event.target.matches('#right')) {
    document.querySelector('#right').classList.add('active')
  }
})

// Button events
document.querySelector('#left').addEventListener('click', prevSlide)
document.querySelector('#right').addEventListener('click', nextSlide)

// Update slide width on window resize
window.addEventListener('resize', updateSlideWidth)

// Initial setup
updateSlidePosition()
updateSlideWidth()
setInterval(nextSlide, 2000)

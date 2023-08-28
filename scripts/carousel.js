const carouselSlide = document.querySelector('.carousel-slide')
const images = document.querySelectorAll('.carousel-slide img')

let counter = 0
const slideWidth = images[0].clientWidth

function nextSlide() {
  if (counter >= images.length - 1) {
    counter = -1
    carouselSlide.style.transition = 'none'
    carouselSlide.style.transform = `translateX(-${counter * slideWidth}px)`
  } else {
    counter++
    carouselSlide.style.transform = `translateX(-${counter * slideWidth}px)`
    carouselSlide.style.transition = 'transform 0.4s ease-in-out'
  }
}

function prevSlide() {
  if (counter <= 0) return
  counter--
  carouselSlide.style.transform = `translateX(-${counter * slideWidth}px)`
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prevSlide()
  if (e.key === 'ArrowRight') nextSlide()
})

setInterval(nextSlide, 3000)

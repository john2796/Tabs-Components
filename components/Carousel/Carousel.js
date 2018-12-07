


const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector('.slider__item:first-child');
const lastChild = document.querySelector('.slider__item:last-child');
const next = document.querySelector('.slider_right_btn');
const previous = document.querySelector('.slider_left_btn')

// slide function 
function slide() {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`)
  // if currentSlide is true and it has showing class then remove it and passed it to the next element
  if (currentSlide) {
    //console.log(currentSlide);
    currentSlide.classList.remove(SHOWING_CLASS);
    // if current slide is true continue with if statement get the next slide and check if next slide has the ".class" showing if true add the class and keep continue with the loop if not add the class to the first you want to set else to the first slide so if you keep clicking next button it would go back to the first item so it makes a full rotation same thing with the prev button
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CLASS);
    } else {
      firstSlide.classList.add(SHOWING_CLASS);
    }
  } else {
    // if currentSlide false don't have showing class then add it to the first child element
    firstSlide.classList.add('showing');
  }
}
// need this so you don't have to wait 3seconds before first image shows
slide();

//next button
//console.log(next);
next.addEventListener('click', () => {
  slide();
})

//previous button
//console.log(previous);
previous.addEventListener('click', () => {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`)
  // if currentSlide is true and it has ".showing" class then remove it 
  if (currentSlide) {
    //console.log(currentSlide);
    currentSlide.classList.remove(SHOWING_CLASS);
    // if current slide is true continue with if statement get the next slide and check if next slide has the class showing if true add the class and keep continue with the loop if not add the class to the first ...you want to set else to the last slide so if you keep clicking prev button it would go back to the last item so it makes a full rotation same thing with the next button
    const prevSlide = currentSlide.previousElementSibling;
    if (prevSlide) {
      prevSlide.classList.add(SHOWING_CLASS);
    } else {
      lastChild.classList.add(SHOWING_CLASS);
    }
  } else {
    // if currentSlide false don't have showing class then add it to the first child element
    firstSlide.classList.add('showing');
  }
})

// every 3 seconds change the image ; 
//setInterval(slide, 3000);


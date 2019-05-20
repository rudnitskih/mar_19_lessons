function makeSlider(images) {

}

const slider = makeSlider([
  'cat.png',
  'dog.png',
  'horse.png'
]);

slider.showCurrent(); // 'cat.png'
slider.next();
slider.prev();
slider.next();
slider.showCurrent(); // 'dog.png'

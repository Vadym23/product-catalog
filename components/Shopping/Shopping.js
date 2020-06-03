/* Hillel Homework #8 Slider
  Пишем свой слайдер изображений:
    - отображаем изображение и кнопки Next, Prev по бокам от изображения
    - При клике на Next - показываем следующее изображение
    - При клике на Prev - предыдущее
    - При достижении последнего изображения - прятать кнопку Next. 
    - Аналогично с первым изображением и кнопкой Prev. 
*/

const showPrevBtn = document.getElementById('show-prev-btn');
const showNextBtn = document.getElementById('show-next-btn');
const slideImg = document.getElementById('slide-img')
showPrevBtn.addEventListener('click', onShowPrevBtn);
showNextBtn.addEventListener('click', onShowNextBtn);

let imagesUrls = [];
imagesUrls.push('../img/01.jpg');
imagesUrls.push('../img/02.jpg');
imagesUrls.push('../img/03.jpg');
imagesUrls.push('../img/04.jpg');
imagesUrls.push('../img/05.jpg');
imagesUrls.push('../img/06.jpg');
imagesUrls.push('../img/07.jpg');

let currentImageIndex = 0;
slideImg.src = imagesUrls[currentImageIndex];
// showPrevBtn.disabled = true;
showPrevBtn.style.display = 'block';
showNextBtn.style.display = 'block';

function onShowPrevBtn() {
  currentImageIndex--;
  if (currentImageIndex === 0) {
    // showPrevBtn.disabled = true;
    showPrevBtn.style.display = 'none';
  } else {
    showPrevBtn.style.display = 'block';
  }
  slideImg.src = imagesUrls[currentImageIndex];
  // showNextBtn.disabled = false;
}

function onShowNextBtn() {
  currentImageIndex++;
  if (currentImageIndex === (imagesUrls.length - 1)) {
    showNextBtn.style.display = 'none';
    // showNextBtn.disabled = true;
  } else {
    showNextBtn.style.display = 'block';
  }
  slideImg.src = imagesUrls[currentImageIndex];
  // showPrevBtn.disabled = false;
}
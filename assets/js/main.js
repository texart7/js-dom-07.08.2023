const imagesDataBase = [
'https://www.southernliving.com/thmb/Rz-dYEhwq_82C5_Y9GLH2ZlEoYw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-837898820-1-4deae142d4d0403dbb6cb542bfc56934.jpg',
'https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg',
'https://malinois.com.ua/wp-content/uploads/2020/10/IMG_1697.jpeg'
];

const slider = new Slider(imagesDataBase);

const [images] = document.querySelectorAll('.slide>img');
const [prevBtn, nextBtn] = document.querySelectorAll('.slider-container>button');

images.src = slider.currentSlide;

console.log(slider.currentSlide);
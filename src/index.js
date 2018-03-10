import "../style/about.less"
import "../style/carousel.less"
import "../style/common.less"
import "../style/footer.less"
import "../style/header.less"
import "../style/products.less"

// TODO: refactor to separate file
let buttonNext = document.querySelector(".carousel__button_next");
let buttonPrev = document.querySelector(".carousel__button_prev");
let sliderImage = document.querySelector(".carousel__image");

const SPEED_OF_FADING = 0.12;

let images = ["https://www.metaslider.com/wp-content/uploads/2014/11/mountains1.jpg", "http://wowslider.com/sliders/demo-77/data1/images/road220058.jpg"];

let currentImage = 1;


const image = (src) => new Promise((res, rej) => {
    const image = new Image();
    image.onload = res;
    image.src = src;
});


const fadeOff = () => new Promise((res, rej) => {
    const animate = () => {
        if (!sliderImage.style.opacity) sliderImage.style.opacity = 1;
        if (sliderImage.style.opacity <= 0) return res();
        else sliderImage.style.opacity -= SPEED_OF_FADING;
        requestAnimationFrame(animate);
    };
    animate();
});

const fadeIn = () => new Promise((res, rej) => {
    const animate = () => {
        if (sliderImage.style.opacity >= 1) return res();
        else sliderImage.style.opacity = SPEED_OF_FADING + Number(sliderImage.style.opacity);
        requestAnimationFrame(animate);
    };
    animate();
});

const nextPic = async () => {
    await image(images[currentImage]);
    await fadeOff();
    sliderImage.src = images[currentImage];
    await fadeIn();
};



buttonNext.addEventListener("click", () => {
    currentImage = ++currentImage % images.length;
    nextPic();
}, false);

buttonPrev.addEventListener("click", () => {
    currentImage = (--currentImage + images.length) % images.length;
    nextPic();
}, false);


// Uncomment to make autorun
//
// const wait = (time) => new Promise((res, rej) => setTimeout(res, time));
//
// const run = async () => {
//     await wait(5000);
//     currentImage = ++currentImage % images.length;
//     await nextPic();
//     run();
// };
//
// run();
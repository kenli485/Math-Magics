const mainGameImage = document.querySelector('.game-image-frame img');
const thumbs = [...document.querySelectorAll('.carousel-thumb')];
let carouselIndex = 0;
function showScreenshot(index){carouselIndex=(index+thumbs.length)%thumbs.length;const selected=thumbs[carouselIndex];mainGameImage.src=selected.dataset.image;thumbs.forEach((thumb,i)=>thumb.classList.toggle('active',i===carouselIndex));selected.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});}
thumbs.forEach((thumb,index)=>thumb.addEventListener('click',()=>showScreenshot(index)));
document.querySelector('.carousel-arrow.previous').addEventListener('click',()=>showScreenshot(carouselIndex-1));
document.querySelector('.carousel-arrow.next').addEventListener('click',()=>showScreenshot(carouselIndex+1));

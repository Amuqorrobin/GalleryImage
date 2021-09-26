const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');

imgs[0].style.opacity = '0.5'

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e){
    imgs.forEach(img => img.style.opacity = 1)

    current.src = e.target.src;

    current.classList.add('fade-in');

    setTimeout(() => {
        current.classList.remove('fade-in');
    }, 200);

    e.target.style.opacity = '0.5';
}
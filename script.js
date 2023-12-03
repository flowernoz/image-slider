let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let active = 0;
let lengthItems = items.length - 1;
next.onclick = function () {
    if (active + 1 > lengthItems) {
        active = 0;
    } else {
        active = active + 1;
    }
    reloadSlider();
}
previous.onclick = function() {
    if (active - 1 < 0) {
        active = lengthItems;
    } else {
        active = active - 1;
    }
    reloadSlider()
}
let refresh = setInterval(() => {
    next.click()
}, 3000);
function reloadSlider() {
    let checkleft = items[active].offsetLeft;
    list.style.left = -checkleft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refresh);
    refresh = setInterval(() => {
        next.click()
    }, 3000);
}

dots.forEach((li, key) => {
    li.addEventListener('click',
        function () {
            active = key;
            reloadSlider();
    })
})
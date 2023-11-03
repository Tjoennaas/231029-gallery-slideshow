

let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

function setActiveDot(index) {
    document.querySelector('.dots li.active').classList.remove('active');
    // Add the 'active' class to the clicked dot
    dots[index].classList.add('active');
}

next.onclick = function () {
    if (active + 1 > lengthItems) {
        active = 0;
    } else {
        active = active + 1;
    }
    reloadSlider();
    setActiveDot(active);
};

prev.onclick = function () {
    if (active - 1 < 0) {
        active = lengthItems;
    } else {
        active = active - 1;
    }
    reloadSlider();
    setActiveDot(active);
};

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';
}

dots.forEach((li, key) => {
    li.addEventListener('click', function () {
        active = key;
        reloadSlider();
        setActiveDot(active);
    });
});

items.forEach((item) => {
    item.addEventListener('click', function () {
        if (active + 1 > lengthItems) {
            active = 0;
        } else {
            active = active + 1;
        }
        console.log(active);
        reloadSlider();
        setActiveDot(active);
    });
});
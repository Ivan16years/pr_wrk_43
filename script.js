/* let parent = document.querySelector('#nav__list');
let elem = document.querySelector('#nav__item');
let link = document.querySelector('#nav__link');
let btn = document.querySelector('.btn');
let form = document.querySelector('.form');


parent.addEventListener('click', function (event) {
    let currentElement = event.target;
    for (el of elem) {
        el.classList.remove('active');
        currentElement.classList.add('active');
    }
})

btn.addEventListener('click', function (evt) {
    form.style.display = 'block';
    currentElement.classList.add('active');
}) */
let itemList = document.querySelectorAll('.nav__item');
let navList = document.querySelector('.nav__list');
let btnList = document.querySelectorAll('.btn');
let fullscreen = document.querySelector('.fullscreen');
let dishs = document.querySelectorAll('.dish__img-wrap');
let myForm = document.querySelector('.form');
let orderNow = document.querySelector('#orderNow');


navList.addEventListener('click', function (event) {
    event.preventDefault();
    let currentElement = event.target;
    console.log(event.target);
    currentElement.parentElement.classList.add('active');
})

for (let item of itemList) {
    item.addEventListener('click', (evt) => {
        evt.preventDefault();
        itemsList.classList.toggle('active');
    })
}
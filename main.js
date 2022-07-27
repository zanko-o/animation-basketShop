let $ = document;
let icon = $.querySelector('.icon-Buy')


let btn = $.getElementById('btn')
let btnremove = $.getElementById('btnremove')
let spanNumber = $.querySelector('span.number')
let box = $.querySelector('.box')
let numberinside = $.querySelector('.numberinside')
let count = 0;
btn.addEventListener('click', function (e) {

    numberinside.innerHTML = ++count;
    numberinside.style.animation='numer .3s linear'
    numberinside.addEventListener('animationend', function () {
       
        numberinside.style.animation=''
    })
    // numberinside.style.top=9+'px';
    // numberinside.style.top=30+'px';
    spanNumber.style.animation='crate 0.2s ease';
    spanNumber.addEventListener('animationend', function () {
       
        spanNumber.style.animation=''
    })
    let boxElm = $.createElement('span')
    boxElm.classList.add('box')
    icon.append(boxElm)
    boxElm.style.animation='ind .7s linear'
    boxElm.addEventListener('animationend', function () {
        console.log(e.target);
        boxElm.remove();
    })
    // icon.animate('out 1s linear infinite')
    // boxElm.classlist.add('box')
})

btnremove.addEventListener('click', function (e) {

    numberinside.innerHTML = --count;
    numberinside.style.animation='remove .3s linear'
    // numberinside.style.animationDirection='reverse'
    numberinside.addEventListener('animationend', function () {
        numberinside.style.animation=''
    })
    // numberinside.style.top=9+'px';
    // numberinside.style.top=30+'px';

    let boxElm = $.createElement('span')
    boxElm.classList.add('box')
    icon.append(boxElm)
    boxElm.style.animation='outNew .7s linear'
    boxElm.addEventListener('animationend', function () {
        console.log(e.target);
        boxElm.remove();
    })
    // icon.animate('out 1s linear infinite')
    // boxElm.classlist.add('box')
})
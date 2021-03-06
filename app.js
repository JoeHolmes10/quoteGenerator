let container = document.querySelector('.container');

let p = document.querySelector('p');

let subBtn = document.querySelector('.sub');

let darkMoIcon = document.querySelector('.fa-moon');

let slide = document.querySelector('.slide');

let lightMoIcon = document.querySelector('.bi-brightness-high');

let translateBtn = document.querySelector('.translate');

let copy = document.querySelector('.copy');

let hideGoogleTranslate = document.querySelector('.google');

let xIcon = document.querySelector('.bi-x-circle');

let placeHolder = document.querySelector('.content-wrapper')
let placeHolder1 = document.querySelector('.shaker')
let placeHolder2 = document.querySelector('.Holmes')

const Http = new XMLHttpRequest();
const url = 'https://api.quotable.io/random';
Http.open('GET', url);
Http.send();

Http.onreadystatechange = (e) => {
    if (this.readyState == 4 && this.status == 200) {
        console.log(Http.responseText);
    }
};


subBtn.addEventListener('click', function () {
    $.getJSON(url, function (result) {
        p.textContent = `${result.content} (${result.author})`;
    });
});

window.onload = function () {
    $.getJSON(url, function (result) {
        p.textContent = `${result.content} (${result.author}) `;
    });
    if (window.localStorage.length > 0) {
        slide.style.width = window.localStorage.getItem('slide');
        subBtn.style.backgroundColor = window.localStorage.getItem('main');
        container.style.backgroundColor = window.localStorage.getItem('main');
        container.style.color = window.localStorage.getItem('color');
        lightMoIcon.classList.remove('active');
        darkMoIcon.style.display = 'none';
    }
};

darkMoIcon.addEventListener('click', function () {
    window.localStorage.setItem('slide', `100%`);
    window.localStorage.setItem('main', '#15202B');
    window.localStorage.setItem('color', '#fff');
    window.localStorage.setItem('none', 'none');
    darkMoIcon.style.backgroundColor = 'white';
    darkMoIcon.style.color = '#1d2a35';
    slide.style.width = `100%`;
    subBtn.style.backgroundColor = '#15202B';
    container.style.backgroundColor = '#15202B';
    container.style.color = '#fff';
    darkMoIcon.classList.add('active');
    darkMoIcon.style.display = 'none';
    lightMoIcon.classList.remove('active');
});

lightMoIcon.addEventListener('click', function () {
    if (
        !darkMoIcon.classList.contains('active') ||
        darkMoIcon.classList.contains('active')
    ) {
        slide.style.width = `0%`;
        subBtn.style.backgroundColor = '#1d2a35';
        container.style.backgroundColor = '#eee';
        container.style.color = 'black';
        lightMoIcon.classList.add('active');
        darkMoIcon.style.display = 'block';
        darkMoIcon.style.backgroundColor = '#1d2a35';
        darkMoIcon.style.color = 'white';
        window.localStorage.clear();
    }
});

translateBtn.addEventListener('click', function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element',
        translateBtn.classList.add('thide'),
        xIcon.classList.remove('shide'),
        (hideGoogleTranslate.style.display = 'block')
    );
});

copy.addEventListener('click', function () {
    var r = document.createRange();
    r.selectNode(p);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    let ele = document.createElement('div');
    ele.id = 'suc';
    document.body.appendChild(ele);
    ele.innerText = 'Copied Successfully';
    function time() {
        ele.remove();
    }
    setTimeout(time, 1500);
});

xIcon.addEventListener('click', () => {
    hideGoogleTranslate.style.display = 'none';
    translateBtn.classList.remove('thide');
    xIcon.classList.add('shide');
});

window.addEventListener('load', function () {
    placeHolder.classList.add('loadHide');
    placeHolder1.classList.add('loadHide');
    placeHolder2.classList.add('loadHide');
})
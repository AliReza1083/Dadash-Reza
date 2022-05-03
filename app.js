const firstButton = document.querySelector('.firstButton');
const bookDetails = document.querySelector('.bookInformation');
const close = document.querySelector('i');

firstButton.addEventListener('click', () => {
    bookDetails.classList.remove('hide');
    bookDetails.classList.add('show');
})
close.addEventListener('click', () => {
    bookDetails.classList.add('hide');
    bookDetails.classList.remove('show');
})




const form = document.querySelector('form');
const falCount = document.querySelector('#textCount');
const liOne = document.querySelector('#liOne');
const input = document.querySelector('input');
const validation = document.querySelector('.falContent div p');


input.addEventListener('input', (e) => {
    if (!input.value) {
        validation.innerHTML = 'بنویس';
        validation.style.color = 'white';
        liOne.style.color = '#fff';
        input.classList.remove('border');
        input.classList.remove('border-red');
    } else if (input.value == '1' || input.value == '۱') {
        validation.innerHTML = 'افرین';
        validation.style.color = '#15ff00';
        liOne.style.color = '#15ff00';
        input.classList.add('border');
        input.classList.remove('border-red');
    } else if (input.value == '2' || input.value == '۲') {
        validation.innerHTML = 'افرین';
        validation.style.color = '#15ff00';
        liOne.style.color = '#15ff00';
        input.classList.add('border');
        input.classList.remove('border-red');
    } else if (input.value == '3' || input.value == '۳') {
        validation.innerHTML = 'افرین';
        validation.style.color = '#15ff00';
        liOne.style.color = '#15ff00';
        input.classList.add('border');
        input.classList.remove('border-red');
        input.classList.remove('border-red');
    } else {
        validation.innerHTML = 'نمیشه داش یا آبجی';
        validation.style.color = 'red';
        liOne.style.color = 'red';
        input.classList.add('border-red');
        input.classList.remove('border');
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ilhamOne = Math.floor(Math.random() * 1861) + 1;
    const ilhamTwo = Math.floor(Math.random() * 1985) + 1;
    const ilhamThree = Math.floor(Math.random() * (108 * 7)) + 1;
    if (!input.value) {
        falCount.innerHTML = 'شماره الهام';
    } else if (input.value == '1' || input.value == '۱') {
        falCount.innerHTML = ilhamOne;
    } else if (input.value == '2' || input.value == '۲') {
        falCount.innerHTML = ilhamTwo;
    } else if (input.value == '3' || input.value == '۳') {
        falCount.innerHTML = ilhamThree;
    }
})


const falGraftan = document.querySelector('#falGraftan');
document.addEventListener('scroll', (e) => {
    const scrollHeight1 = window.scrollY;
    if (scrollHeight1 >= 1320) {
        falGraftan.classList.add('backRed');
    }
})
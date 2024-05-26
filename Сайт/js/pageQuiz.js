let radio = document.querySelectorAll('.radio');
let btn = document.querySelector('.btn')
let test = document.querySelector('.test')

let userName = document.querySelector('.name')
let mail = document.querySelector('.email')
let number = document.querySelector('.number')
let text = document.querySelector('.text')


let adaptive;
let pageNum;
let functional;

radio.forEach((elem)=>{
   elem.addEventListener('change',()=>{
      if(elem.getAttribute('name') == 'adaptive'){
         adaptive = elem.getAttribute('value')
      }
      if(elem.getAttribute('name') == 'pageNum'){
         pageNum = elem.getAttribute('value')
      }
      if(elem.getAttribute('name') == 'functional'){
         functional = elem.getAttribute('value')
      }
   })
})

btn.addEventListener('click', () => {
   localStorage.setItem('Адаптивность', adaptive);
   localStorage.setItem('Количество страниц', pageNum);
   localStorage.setItem('Функционал', functional);

   localStorage.setItem('Имя', userName.value);
   localStorage.setItem('Почта', mail.value);
   localStorage.setItem('Телефон', number.value);
   localStorage.setItem('Пожелания', text.value);
})

test.addEventListener('click', () => {

   console.log(localStorage.getItem('Адаптивность'));
   console.log(localStorage.getItem('Количество страниц'));
   console.log(localStorage.getItem('Функционал'));
   console.log(localStorage.getItem('Имя'));
   console.log(localStorage.getItem('Почта'));
   console.log(localStorage.getItem('Телефон'));
   console.log(localStorage.getItem('Пожелания'));
})
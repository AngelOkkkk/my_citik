let radio = document.querySelectorAll('.radio');
let btn = document.querySelector('.btn')
let test = document.querySelector('.test')

let userName = document.querySelector('.name')
let mail = document.querySelector('.email')
let number = document.querySelector('.number')
let text = document.querySelector('.text')


let lang;
let platform;
let support;

radio.forEach((elem)=>{
   elem.addEventListener('change',()=>{
      if(elem.getAttribute('name') == 'lang'){
         lang = elem.getAttribute('value')
      }
      if(elem.getAttribute('name') == 'platform'){
         platform = elem.getAttribute('value')
      }
      if(elem.getAttribute('name') == 'support'){
         support = elem.getAttribute('value')
      }
   })
})

btn.addEventListener('click', () => {
   localStorage.setItem('Жанр', lang);
   localStorage.setItem('Платформа', platform);
   localStorage.setItem('Возрастной рейтин', support);

   localStorage.setItem('Имя', userName.value);
   localStorage.setItem('Почта', mail.value);
   localStorage.setItem('Телефон', number.value);
   localStorage.setItem('Пожелания', text.value);
})

test.addEventListener('click', () => {

   console.log(localStorage.getItem('Жанр'));
   console.log(localStorage.getItem('Платформа'));
   console.log(localStorage.getItem('Возрастной рейтин'));
   console.log(localStorage.getItem('Имя'));
   console.log(localStorage.getItem('Почта'));
   console.log(localStorage.getItem('Телефон'));
   console.log(localStorage.getItem('Пожелания'));
})
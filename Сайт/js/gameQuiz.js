let radio = document.querySelectorAll('.radio');
let btn = document.querySelector('.btn')
let test = document.querySelector('.test')

let userName = document.querySelector('.name')
let mail = document.querySelector('.email')
let number = document.querySelector('.number')
let text = document.querySelector('.text')


let genre;
let platform;
let age;

radio.forEach((elem)=>{
   elem.addEventListener('change',()=>{
      if(elem.getAttribute('name') == 'genre'){
         genre = elem.getAttribute('value')
      }
      if(elem.getAttribute('name') == 'platform'){
         platform = elem.getAttribute('value')
      }
      if(elem.getAttribute('name') == 'age'){
         age = elem.getAttribute('value')
      }
   })
})

btn.addEventListener('click', () => {
   localStorage.setItem('Жанр', genre);
   localStorage.setItem('Платформа', platform);
   localStorage.setItem('Возрастной рейтин', age);

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
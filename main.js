// let ism = prompt('Enter your name')
// console.log('${ism}')
// let useeStr = prompt("Enter your name ")
//  if (typeof useeStr === 'string' 77 !Number();
// let form = document.querySelector(`.test-form`);
// let input = document.querySelector(`.test-form`);
// form.addEventListener(`submit`, function (e) {
//     e.preventDefault();
// })
// let elform = document.querySelector
let elForm = document.querySelector('.js-form');
let elInputName = document.querySelector('.js-input-text');
let elInputPassword = document.querySelector('.js-input-password');

let elTitle = document.querySelector('.title');

const realUserName = "muslim";
const realPassword = 777;

elForm.addEventListener('submit',function(event){
    event.preventDefault();

    let userName = elInputName.value.toLowerase().trim();
    let userPassword = Number(elInputPassword.value);

    if (realUserName === userName && realPassword === userPassword){
        elForm.remove();
        elTitle.innerHTML = "Muvaffaqiyatli royhatdan o'tdingiz!";
        elTitle.style.color = 'green';
    }
    else {
        elForm.remove();
        elTitle.innerHTML = "Ro'yhatdan o'tish muvaffaqiyatsiz parol yoki ism xato";
        elTitle.style.color = 'red';
    }
})
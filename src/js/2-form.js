import debounce from 'lodash/debounce';

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form')
// const textarea = form.querySelector('textarea')
// const email = form.querySelector('input')


form.addEventListener("submit", (e) => 
e.preventDefault ())




form.addEventListener('input', debounce ((e) => {

const input  = e.target.value
localStorage.setItem(STORAGE_KEY, input)


if(localStorage.getItem(STORAGE_KEY)){
    

}

}, 1000))


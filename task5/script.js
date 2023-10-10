let duplicateField = document.querySelector('#duplicateField');
let input = document.querySelector('#input');

input.addEventListener('keyup',  (event) => {
    duplicateField.textContent = input.value;
})
document.querySelector('#button').addEventListener('click' , (event) => {
event.preventDefault();
console.log(input.value);
input.value = '';
duplicateField.textContent = '';

})

//value - значение

const text = document.querySelector('#text');

text.addEventListener('click' , function (event) 
{
    this.textContent = '' + prompt();
    event.preventDefault();
    TextDecoration = "none";
   
})  
// присваиваем значение prompt к элементу textContent. После ввода текста в окне, 
//текст будет отображаться на странице.
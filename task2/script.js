//назначаем на него разработчика (на HTML)
//alert - метод диалогового окна с сообщением и кнопкой ОК
//prompt - выводит диалоговое окно, в котором пользователь может ввести текстовые данные
//m - переменная

const consolelog = document.querySelector('#consolelog');
const mAlert = document.querySelector('#alert');
const mPromt = document.querySelector('#prompt');

//добавляем к consolelog обработчик события click

consoleLog.addEventListener('click' , () => {
    alert('Служит для вывода информации в консоль.');
})

mAlert.addEventListener('click' , () =>{
    alert('Позволяет образить диалговое окно с сообщением и кнопкой ОК.');
})

mPromt.addEventListener('click' , () =>{
    alert('Позволяет выводить диалоговое окно, в котором пользователь может ввести текстовые данные.');
})
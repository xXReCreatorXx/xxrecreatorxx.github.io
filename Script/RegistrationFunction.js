// Создаю массив
var arrayLog = [];

function registrationFunction() {
    
    // Задаю переменным значения полей ввода
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var login = document.getElementById("login").value;
    
    // Заношу в массив данные
    arrayLog.push(username);
    arrayLog.push(login);
    arrayLog.push(password);

    // Заношу данные массива в видимые поля
    document.getElementById("accountUsername").textContent = arrayLog[0];
    document.getElementById("accountLogin").textContent = arrayLog[1];
    document.getElementById("accountPassword").textContent = arrayLog[2];

    // Скрываю поля регистрации и выважу данные пользователя
    document.getElementById("outLog").style.display = "block"
    document.getElementById("registration").style.display = "none"
}

function logOutFunction() {
    
    // Обнуляю массив
    arrayLog = [];

    // Обнуляю поля ввода
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("login").value = "";

    // Скрываю данные пользователя и вывожу поля регистрации
    document.getElementById("registration").style.display = "block"
    document.getElementById("outLog").style.display = "none"
}
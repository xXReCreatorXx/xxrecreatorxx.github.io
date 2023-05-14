function scriptOneFunction() {
    var h = alert('Программа для нахождения суммы, разности, произведения и частных квадратов двух чисел');
    var a = prompt('Ведите первое число ');
        a = parseInt(a);
    var b = prompt('Введите второе число ');
        b = parseInt(b);
    var q = (a + b);
        alert('Сумма чисел = ' + q);
    var w = (a - b);
        alert('Разность чисел = ' + w);
    var e = (a * b);
        alert('Произведение чисел = ' + e);
    var r = (a * a);
        alert('Квадрат первого числа = ' + r);
    var t = (b * b);
        alert('Квадрат второго числа = ' + t);
}

function scriptTwoFunction() {
    var h = alert('Программа для нахождения последней и средней цифры трёхзначного числа');
    var a = prompt('Введите трёхзначное число ');
        a = parseInt(a);
    if ((a > 99) && (a < 1000)) {
        var q = (a % 10);
            alert('Последняя цифра трёхзначного числа = ' + q);
        var w = ((a / 10) % 10);
            w = parseInt(w);
            alert('Средняя цифра трёхзначного числа = ' + w);
    } else {
        alert('Ваше число не является трёхзначным')
    }   
}

function scriptThreeFunction() {
    alert('Программа для нахождения истинности. Одно из двух чисел не четное');
    var A = prompt('Введите первое число');
    var B = prompt('Введите второе число');
    if (A % 2 == 0) {
        if (B % 2 != 0) {
            alert('TRUE');
        } else{
            alert('FALSE')
        }
    } 
    if (A % 2 != 0) {
        if (B % 2 == 0) {
            alert('TRUE');
        } else {
            alert('FALSE')
        }
    }
}

function scriptFourFunction() {
    alert('Программа присваивающая переменным A и B сумму их значений если A не равна B и пресваивающая им значение 0 если A равна B');
    var A = prompt('Введите переменную А');
        A = parseInt(A);
    var B = prompt('Введите переменную В');
        B = parseInt(B);
    if (A != B) {
        var S = (A + B);
        A = (S);
        B = (S);
    } else {
        A = (0);
        B = (0);
    }
    alert('Переменная А = ' + A);
    alert('Переменная B = ' + B);
}

function scriptFiveFunction() {
    alert('Программа вычисляющая значение функции y = f(x) при произвольных значениях x');
    var x = prompt('Введите значение x ');
        x = parseInt(x);
    var a = (6.72);
    var b = (4.85);
    if (x <= 1) {
        var y = (1 + Math.sqrt(a + Math.abs(x)));
        alert('y = ' + y);
    }
    if (x > 6) {
        var y = (2 + (a * x)**2+Math.E**x);
        alert('y = ' + y);
    }
    if (x > 1) {
        if (x <= 6) {
        var y = (x * Math.sqrt(1 + b * Math.log((a**2)*x)));
        alert('y = ' + y);
        }
    }
}

function scriptSixFunction() {
    alert('Программа вычисляющая значение функции y = f(x) при произвольных значениях x');
    var x = prompt('Введите значение x ');
        x = parseInt(x);
    var a = (6.72);
    var b = (4.85);
    switch(x) {
        case 1:
            var y = (1 + Math.sqrt(a + Math.abs(x)));
            alert(y);
            break;
        case 7:
            var y = (2 + (a * x)**2+Math.E**x);
            alert(y);
            break;
        case 5:
            var y = (x * Math.sqrt(1 + b * Math.log((a**2)*x)));
            alert(y);
            break;
        default:
            alert('Функцию выполнить невозможно. Совпадений не найдено');
    }
}

function scriptSevenFunction() {
    alert("Программа для нахождения чисел меньше чем  искомое");
    var N = 0;
    N = prompt("Введте длину массива: ");
    N = parseInt(N);
    var K = prompt("Введите искомое число: ");
    K = parseInt(K);
    var array = [];
    var M = 0
    for (let i = 0; i < N; i++) {
        let rand = Math.floor(Math.random() * 100);
        array.push(rand);
    }
    alert("Массив: " + array)
    for (let i = 0; i < N; i++) {
        if (array[i] < K) {
            M++
        }
    }
    if (M != 0) {
        alert("True")
    } else {
        alert("False")
    }  
}

function scriptEightFunction() {
    alert("Программа которая складывает 1+1 N-ное количество раз, каждый раз увеличевая второе слагаймое");
    var N = 0;
    N = prompt("Введите количество сложений: ");
    N = parseInt(N);
    var sum = 0;
    sum = parseInt(sum);
    var plus = 1;
    plus = parseInt(plus);
    for (let i = 0; i < N; i++) {
        sum += 1 + plus;
        plus++;
    }
    alert("Сумма сложений = " + sum);
}

function scriptNineFunction() {
    alert("Программа которая находит и выводит все элементы первичного массива с четной позицией");
    var N = 0;
    N = prompt("Введите четную длину массива: ");
    N = parseInt(N);
    var A = []
    for (let i = 0; i < N; i++) {
        let rand = Math.floor(Math.random() * 100);
        A.push(rand);
    }
    alert("Первичный массив: " + A);
    var B = [];
    for (let i = 1; i < N; i += 2) {
        B.push(A[i]);
    }
    alert("Четные элементы первичного массива: " + B);
}

function scriptTenFunction() {
    alert("Программа которая находит максимальное и минимальное значение массива и меняет их местами");
    var N = 0;
    N = prompt("Введте длину массива: ");
    N = parseInt(N);
    var array = [];
    for (let i = 0; i < N; i++) {
        let rand = Math.floor(Math.random() * 100);
        array.push(rand);
    }
    alert("Первмчный массив: " + array)
    var min = array[0];
    min = parseInt(min);
    var minId = 0;
    minId = parseInt(minId);
    var max = array[0];
    max = parseInt(max);
    var maxId = 0;
    maxId = parseInt(maxId);
    for (let i = 0; i < N; i++) {
        if (array[i] < min) {
            min = array[i];
            minId = i
        }
        if (array[i] > max) {
            max = array[i];
            maxId = i;
        }
    }
    alert("Максимальный элемент массива: " + max);
    alert("Минимальный элемент массива: " + min);
    array[maxId] = min;
    array[minId] = max;
    alert("Массив с измененными максимальным и минимальным значениями: " + array);
    }
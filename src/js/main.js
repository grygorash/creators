/**
 * Created by Slava on 26.06.2017.
 */

//
// document.write('hello1');
//
// var number = 33;
//
// document.write('<br>' + number + '<br>');
//
// var x = 5;
// var y;
// var result;
//
// y = 12;
// result = x + y;
// document.write(result + "<br>");
// result += x;
// document.write(result + "<br>");
// result++;
// document.write(result + "<br>");
// ++result;
// document.write(result + "<br>");
// document.write(100 % 15);
//
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");


// function quad() {
//     var quad_numb = document.getElementById('inp1').value*document.getElementById('inp1').value;
//     alert(quad_numb);
// }


// КАЛЬКУЛЯТОР

// function plus() {
//     var num1, num2, result;
//
//     num1 = document.getElementById('n1').value;
//     num1 = parseInt(num1);
//
//     num2 = document.getElementById('n2').value;
//     num2 = parseInt(num2);
//
//     result = num1 + num2;
//
//     document.getElementById('out').innerHTML = ('Result: ' + result);
// }
// function minus() {
//     var num1, num2, result;
//
//     num1 = document.getElementById('n1').value;
//     num1 = parseInt(num1);
//
//     num2 = document.getElementById('n2').value;
//     num2 = parseInt(num2);
//
//     result = num1 - num2;
//
//     document.getElementById('out').innerHTML = ('Result: ' + result);
// }
// function multiply() {
//     var num1, num2, result;
//
//     num1 = document.getElementById('n1').value;
//     num1 = parseInt(num1);
//
//     num2 = document.getElementById('n2').value;
//     num2 = parseInt(num2);
//
//     result = num1 * num2;
//
//     document.getElementById('out').innerHTML = ('Result: ' + result);
// }
// function divide() {
//     var num1, num2, result;
//
//     num1 = document.getElementById('n1').value;
//     num1 = parseInt(num1);
//
//     num2 = document.getElementById('n2').value;
//     num2 = parseInt(num2);
//
//     result = num1 / num2;
//
//     document.getElementById('out').innerHTML = ('Result: ' + result);
// }


// Способы вывода текста на страницу

// function out() {
//     var p;
//
//     p = document.getElementById('out');
//     p.innerHTML = ' Hello ';
//     p.innerHTML = ' Hello, ' + p.innerHTML;
//     p.innerHTML += ' Hello, ';
//
//     p.insertAdjacentHTML('beforeBegin', 'Before Begin - ');
//     p.insertAdjacentHTML('afterBegin', 'After Begin - ');
//     p.insertAdjacentHTML('beforeEnd', ' - Before End');
//     p.insertAdjacentHTML('afterEnd', ' - After End');
//
//     p.outerHTML = '<div class="one">Hello </div>';
//
// }


// Оператор условного выбора

// var a,b;
// a = +prompt('Vvedi pervoe chislo');
// b = +prompt('Vvedi vtoroe chislo');
//
// if (a>b){
//     alert('pervoe chislo bolshe');
// } else if (a<b){
//     alert('vtoroe chislo bolshe');
// } else {
//     alert('chisla ravny');
// }

// function func1() {
//     var n, res;
//     n = document.getElementById('num1').value;
//     // n = parseInt(n);
//     res = document.getElementById('out');
//
//     if (n>100){
//         res.innerHTML = 'Vvedennoe chislo bolshe 100'
//     } else if (n<100){
//         res.innerHTML = 'Vvedennoe chislo menshe 100'
//     } else if (n==100){
//         res.innerHTML = 'Vvedennoe chislo ravno 100'
//     } else{
//         res.innerHTML = 'Vy vveli ne chislo'
//     }
// }


// Игра "Угадай число"

// var tempOut, progNum;
// progNum = Math.floor((Math.random() *10) + 1);
// // tempOut = document.getElementById('temp-out');
// // tempOut.innerHTML = progNum;
// console.log(progNum);
//
// function guess() {
//     var num, out;
//
//     num = document.getElementById('mynum').value;
//     out = document.getElementById('out');
//
//     if (num == progNum) {
//         out.innerHTML = 'Vy ugadali!';
//     } else if (num > progNum){
//         out.innerHTML = 'Vy vveli bolshe chem nujno'
//     } else {
//         out.innerHTML = 'Vy vveli men"she chem nujno';
//     }
// }

//Цикл for

// function func() {
//     var p;
//     p = document.getElementById('out');
//     for (var i = 1; i<=100; i++){
//         p.innerHTML += i+ ' ';
//     }
// }


// Массивы
//
// var mass = ['andrey', 'vasya', 'kolya'];
//
// function massOut() {
//     var p = document.getElementById('out');
//     var str = '';
//
//     for (var i=0; i<mass.length; i++){
//         str += i + ' - ' + mass[i] + '<br>';
//     }
//     p.innerHTML = str;
// }
// massOut();
//
// function p1() {
//     var i1 = document.getElementById('i1').value;
//
//     mass.push(i1);
//     massOut();
// }
//
// function p2() {
//     mass.pop();
//     massOut();
// }

// var mass2 = [];
// for (var i = 0; i < 10; i++){
//     mass2.push (i)
// }
// for (var i = 0; i < 10; i++){
//     mass2[i] = i * 3;
//     document.getElementById('mass').innerHTML += mass2[i] + '<br>'
// }
// var summ = 0;
// for (var i = 0; i < mass2.length; i++) {
//     summ += mass2[i];
//    document.getElementById('masss').innerHTML = 'Summ = ' + summ;
// }
// for (var i = 0; i < mass2.length; i++) {
//     document.getElementById('massss').innerHTML = 'Average = ' + (summ / mass2.length)
// }


// var arr_1 = [];
// var arr_2 = [];
// var arr_3 = [];
//
// for (var i = 0; i < 5; i++) {arr_1[i] = i}
// for (var i = 0; i < 10; i++) {arr_2[i] = i}
// for (var i = 0; i < 15; i++) {arr_3[i] = i}
//
// var arr = [arr_1, arr_2, arr_3];
//
// for (var x = 0; x < arr.length; x++){
//     var a = '';
//     for (var y = 0; y < arr[x].length; y++){
//         a += arr[x][y] + ' ';
//     }
//     document.getElementById('arr').innerHTML += a + '<br>';
// }
//
// var arr = [1,2,3];
// document.getElementById('arr').innerHTML = arr[0];


// Cлайдер

// document.getElementById('next').onclick = sliderRight;
// autoSlider();
// var right = 0;
// var timer;
// function autoSlider() {
//     timer = setTimeout(sliderRight, 5000);
// }
//
// function sliderRight() {
//     var polosa = document.getElementById('polosa');
//     right = right - 800;
//     if (right < -3200){
//         right = 0;
//         clearTimeout(timer);
//     }
//     polosa.style.left = right + 'px';
//     autoSlider();
// }


// СЛАЙДЕР 2

// var slides = document.querySelectorAll('#slides .slide');
// var currentSlide = 0;
// var slideInterval = setInterval(nextSlide, 5000);
//
// function nextSlide() {
//     goToSlide(currentSlide + 1);
// }
//
// function previousSlide() {
//     goToSlide(currentSlide - 1);
// }
//
// function goToSlide(n) {
//     slides[currentSlide].className = 'slide';
//     currentSlide = (n + slides.length) % slides.length;
//     slides[currentSlide].className = 'slide showing';
// }
// var playing = true;
// var pauseButton = document.getElementById('pause');
//
// function pauseSlideshow() {
//     pauseButton.innerHTML = '>';
//     playing = false;
//     clearInterval(slideInterval);
// }
//
// function playSlideshow() {
//     pauseButton.innerHTML = '||';
//     playing = true;
//     slideInterval = setInterval(nextSlide, 5000);
// }
//
// pauseButton.onclick = function () {
//     if (playing) {
//         pauseSlideshow();
//     } else {
//         playSlideshow();
//     }
// };
// var next = document.getElementById('next');
// var previous = document.getElementById('previous');
//
// next.onclick = function() {
//     pauseSlideshow();
//     nextSlide();
// };
// previous.onclick = function() {
//     pauseSlideshow();
//     previousSlide();
// };


// Работа с элементами и классами

// var p = document.getElementsByTagName('p');
// var one = document.getElementsByClassName('one');
// console.log(p);
// for (var i=0; i<p.length; i++){
//     p[i].onclick = f1;
// }
// for (var i=0; i<one.length; i++){
//     one[i].onclick = f2;
// }
// function f1() {
//     //alert('hello')
//     alert(this.innerHTML);
//     this.style.background = 'orange'
// }
// function f2() {
//     this.style.fontWeight = 'bold'
// }


// сервис CSS generator

// document.getElementById('r1').oninput = cssGenerator;
//
// function cssGenerator() {
//     var div = document.getElementById('test');
//     var textarea = document.getElementById('out');
//     div.style.borderRadius = this.value + 'px';
//     textarea.innerHTML = '-webkit-border-radius: ' + this.value + 'px;\n';
//     textarea.innerHTML += 'border-radius: ' + this.value + 'px;';
// }


// Работа с радиобаттон

// var radio = document.getElementsByName('prim');
//
// for (var i=0; i<radio.length; i++){
//     radio[i].onchange = testRadio;
// }
//
// function testRadio() {
//     console.log(this.value);
// }
//
// document.getElementById('one').onclick = checkRadio;
// function checkRadio() {
//     var result = document.getElementById('result');
//     for (var i=0; i<radio.length; i++){
//         if (radio[i].checked){
//             result.innerHTML = 'You choose ' + radio[i].value;
//             break;
//         }
//     }
// }


// Ассоциативные массивы
//
// var mass = {
//     "one": 12,
//     "hello": "world",
//     "prim": 2000,
//     "double key": 777
// };
// mass.one = 13;
// console.log(mass['prim']);
// console.log(mass.one);
// console.log(mass['double key']);
// var p = 'hello';
// console.log(mass[p]);
//
// var out = document.getElementById('out');
//
// for (var key in mass) {
//     out.innerHTML += key + ' - ' + mass[key] + '<br>';
// }
//
//
// var man = {
//     "name": "Alex",
//     "age": "26",
//     "id": "223445",
//     "sex": "male"
// };
//
// console.log(man);
//
// console.log(man.name);
//
// console.log(man['age']);
//
// var a = 'id';
// console.log(man[a]);
//
//
// var man2 = {
//     "name": "Alex",
//     "age": "26",
//     "id": "223445",
//     "sex": "male",
//     "year": function () {
//         return 2017 - this.age
//     }
// };
// console.log(man2.year());
//
//
// var mass2 = {
//     "m": [1, 2, 5, 7, 9],
//     "sum": function () {
//         var sum = 0;
//         for (var i = 0; i < this.m.length; i++) {
//             sum = sum + this.m[i];
//         }
//         return sum;
//     }
// };
// console.log(mass2);
// console.log(mass2.sum());


// var goods = {
//     "12345": {
//         "name": "orange",
//         "price": "$2",
//         "img": "http://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Mandarin_Oranges_%28Citrus_Reticulata%29.jpg/300px-Mandarin_Oranges_%28Citrus_Reticulata%29.jpg",
//         "sklad": "yes"
//     },
//     "54321": {
//         "name": "apple",
//         "price": "$1",
//         "img": "http://www.fruitsvege.com/wp-content/uploads/2013/06/apple-title1.jpg",
//         "sklad": "yes"
//     },
//     "54322": {
//         "name": "strawberry",
//         "price": "$3",
//         "img": "http://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Strawberry_gariguette_DSC03063.JPG/300px-Strawberry_gariguette_DSC03063.JPG",
//         "sklad": "no"
//     }
// };
//
// console.log(goods);
//
// var out = '';
// for ( var key in goods){
//     out += 'Nazvanie - ' + goods[key].name + '<br>';
//     out += 'Cena - ' + goods[key].price + '<br>';
//     out += 'Nalichie - ' + goods[key].sklad + '<br>';
//     out += '<img src="' + goods[key].img + '"><hr>';
// }
// document.getElementById("out2").innerHTML = out;


// Функции и работа с ними

// function one () {
//     return 'hello'
// }
// console.log(one()+' world!');
//
// function sum(a,b) {
//     a = a || 10;
//     b = b || 20;
//     // return (a+b);
//     alert(a+b);
// }
// // console.log(sum());
// document.getElementById('b1').onclick = function () {
//     sum(1,2)
// };
//
// var d = function () {
//     alert('work')
// };
// d();


// События мыши

// var block = document.getElementById('one');
// block.onclick = function () {
//     this.style.background = 'green';
// };
// block.ondblclick = function () {
//     this.style.background = 'red';
// };
// block.oncontextmenu = function () {
//     this.style.background = 'black';
//     return(false);
// };
// block.onmouseenter = function () {
//     console.log('in!')
// };


// Кошка гоняется за мышкой

// document.onmousemove = function () {
//     document.getElementsByTagName('body') [0].insertAdjacentHTML('beforeEnd', '<img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/cat-32.png" id="cat">');
//     var cat = document.getElementById('cat');
//
//     cat.style.position = 'fixed';
//
//     document.onmousemove = function (event) {
//         cat.style.left = event.clientX + 20 + 'px';
//         cat.style.top = event.clientY + 20 + 'px';
//     };
// };


// эффект переключения между фото

// document.getElementById('parent').onmousemove = function (event) {
//     var x = event.offsetX;
//     document.getElementById('two').style.width = x + 'px';
// };
// document.getElementById('parent').onmouseout = function (event) {
//     document.getElementById('two').style.width = 100 + '%';
// };


// Первый калькулятор
//
// var res = document.getElementById('res');
// document.getElementById('lf').onclick = function () {
//     out.innerHTML += this.value
// };
// document.getElementById('rt').onclick = function () {
//     out.innerHTML += this.value
// };
// document.getElementById('but1').onclick = function () {
//     out.innerHTML += this.value
// };
// document.getElementById('but2').onclick = function () {
//     out.innerHTML += this.value
// };
// document.getElementById('but3').onclick = function () {
//     out.innerHTML += this.value
// };
// document.getElementById('but4').onclick = function () {
//     out.innerHTML += this.value
// };
// document.getElementById('but5').onclick = function () {
//     out.innerHTML += this.value
// };
// document.getElementById('but6').onclick = function () {
//     out.innerHTML += this.value
// };
// document.getElementById('but7').onclick = function () {
//     out.innerHTML += this.value
// };
// document.getElementById('but8').onclick = function () {
//     out.innerHTML += this.value
// };
// document.getElementById('but9').onclick = function () {
//     out.innerHTML += this.value
// };
// document.getElementById('but0').onclick = function () {
//     out.innerHTML += this.value
// };
// document.getElementById('pl').onclick = function () {
//     out.innerHTML += this.value
// };
// document.getElementById('min').onclick = function () {
//     out.innerHTML += this.value
// };
// document.getElementById('mul').onclick = function () {
//     out.innerHTML += this.value
// };
// document.getElementById('div').onclick = function () {
//     out.innerHTML += this.value
// };
// document.getElementById('eq').onclick = function () {
//     res.innerHTML = eval(out.value)
// };
// document.getElementById('reset').onclick = function () {
//     location.reload()
// };


// a = 5;
// x = "if (a<10) { a + 2 }";
// alert(x);
// x = eval("2+5/2*6");
// alert(x);

// for (var i=0; i<one.length; i++){
//     one[i].onclick = f2;


// Таймеры и интервалы

// var sdvig = 0;
// var timer;
// var test = document.getElementById('test');
// // move();
// function move() {
//     test.style.marginLeft = sdvig + 'px';
//     sdvig += 10;
//     timer = setTimeout(move, 50);
// }
//
// // var timer = setInterval(move, 50);
// document.getElementById('stop').onclick = function () {
//     // clearInterval(timer)
//     clearTimeout(timer)
// };
//
// var a = 10;
// obr();
// function obr() {
//     document.getElementById('out').innerHTML = a;
//     a--;
//     if (a<0){
//         clearTimeout(timer);
//         alert('Timer otklyuchen')
//     } else{
//         timer = setTimeout(obr, 1000);
//     }
//     // timer = setTimeout(obr, 1000)
// }

// setTimeout(move, 5000);


// УСЛОВНЫЕ ОПЕРАТОРЫ

// var year = prompt('Введите год рождения')
// if (year > 1991){
//     document.write('Вам меньше 26 лет'+ '<br>');
// } else if (year < 1991){
//     document.write('Вам больше 26' + '<br>');
// } else  if (year = 1991){
//     document.write('Вам 26');
// };


// var x = prompt('Ведите любое число Х');
// var y = prompt('Введите любое число У');
//
// if (x == y){
//     document.write('Х равен У');
// } else  if (x > y){
//     document.write('Х больше У');
// } else {
//     document.write('Х меньше У')
// };


// var a = +prompt('Ведите любое число от 1 до 5');
// switch (a) {
//     case  1 :
//         document.write("Вы выбрали 1");
//         break;
//     case  2 :
//         document.write("Вы выбрали 2");
//         break;
//     case  3 :
//         document.write("Вы выбрали 3");
//         break;
//     case  4 :
//         document.write("Вы выбрали 4");
//         break;
//     case  5 :
//         document.write("Вы выбрали 5");
//         break;
//     default :
//         document.write('Вы выбрали больше 5. Это число = ' + a);
// };


// var x = +prompt('Введите значение Х');
// var y = +prompt('Введите значение Y');
// x > y ? document.write('Х больше У') : document.write('Х меньше У');

// var a = +prompt('vvedi chislo');
// var x = prompt('vvedi operaciyu');
// var b = +prompt('vvedi vtoroe chislo');
//
// switch (x) {
//     case '+' : document.write('otvet: ' + (a + b));
//     break;
//     case '-' : document.write('otvet: ' + (a - b));
//         break;
//     case '*' : document.write('otvet: ' + (a * b));
//         break;
//     case '/' : document.write('otvet: ' + (a / b));
//         break;
// }


// ЦИКЛЫ


// for (var i = 1; i <= 10; i++) {
//     if (i == 7) break;
//     if (i % 2 != 0 && i != 1) continue;
//     document.write(i + '<br>');
// }
//
// for (var i = 1; i < 11; i++) {
//     if (i % 2 != 0) {
//         document.write(i + ' - privet <br>');
//     } else {
//         document.write(i + ' - andrey <br>');
//     }
// }
//
// document.write('<br>');
//
// var x = 0;
// while (x < 10) {
//     x += 2;
//     document.write(x + '<br>');
// }
//
// document.write('<br>');
//
// var y = +prompt('vvedi chislo');
// do {
//     y++;
//     document.write(y + "cykl <br>")
// } while (y < 100);

// МЕТОДЫ

// var person;
// if (confirm('are you sure?')){
//     person = prompt('what is your name, loh?');
//     alert('hi, ' + person + '!')
// } else{
//     alert('PNH, LOH!')
// }


// Условные операторы: if, '?'

// var age = prompt('how old are you?');
// var message = (age < 20) ? 'hello, young man!' :
//     (age < 60) ? 'hello, man!' :
//         (age < 100) ? 'hello, old man!':
//             'hello, you might be dead';
// alert(message);

// var access = prompt('Каково «официальное» название JavaScript?');
// var message = (access == 'ECMAScript') ? 'Верно!':
//     'Не знаете? «ECMAScript»!';
// alert(message);

// var num = prompt('vvedi chislo', '0');
// if (num > 0){
//     alert('1')
// } else if (num < 0){
//     alert('-1')
// } else{
//     alert("0")
// }

// var user = prompt('who are you?');
// if (user == 'admin'){
//     var pass = prompt('type your password');
//     if (pass == '1111'){
//         alert('welcome, dude!')
//     } else if(pass == null){
//         alert('enter is cancel, good bye, looser');
//     } else{
//         alert('password is not correct, try again')
//     }
// } else if(user == null){
//     alert('enter is cancel, good bye, looser')
// } else{
//     alert('I do not know you, fuck off')

// var a = +prompt('vvedi chislo 1', '0');
// var b = +prompt('vvedi chislo 2', '0');
//
// var result = (a + b < 4) ? 'too few' : 'too much';
// alert(result);

// var user = prompt('who are you Vasya or Director?');
// var message = (user == 'Vasya') ? 'Priver, LOH!' :
//     (user == 'Director') ? 'Privet, NORM PACAN!' :
//         'you are not Vasya or Director, fuck off!';
// alert(message);


// Логические операторы

// var proverka = document.getElementById('pr');
// proverka.onclick = function f1() {
//     var time = document.getElementById('time').value;
//     var out = document.getElementById('out');
//     if (time > 24 || time < 1 || time == null) {
//         out.innerHTML = 'Такого времени не существует' + '<br>' + 'Формат времени 1-24';
//     } else if (time < 10) {
//         out.innerHTML = 'Слишком рано' + '<br>' + 'Мы начинаем работать с 10';
//     } else if (time < 19) {
//         out.innerHTML = 'Добро пожаловать' + '<br>' + 'Мы работаем с 10 до 18';
//     } else if (isNaN(time)) {
//         out.innerHTML = 'Вы указали не время';
//     } else {
//         out.innerHTML = 'Слшиком поздно' + '<br>' + 'Мы работаем до 18';
//     }
//     out.style.opacity = 1;
//     console.log(proverka)
// };

// var age = +prompt('enter 14-90');
// if (age >= 14 && age <= 90){
//     alert('success')
// } else{
//     alert('fail')
// }

// for (var i = 1; i < 11; i++){
//     if(i % 2 == 0){
//         alert(i);
//     }
// }

// var num;
// do {
//    num = +prompt('','100');
// } while (num <= 100 && num != null);


// var browser = prompt('Каким браузером вы пользуетесь: Chrome, Firefox, Safari, Opera или IE?');
// if (browser == 'Chrome'
//     || browser == 'Firefox'
//     || browser == 'Safari'
//     || browser == 'Opera') {
//     alert('Да, и эти браузеры мы поддерживаем')
// } else if (browser == 'IE') {
//     alert('О, да у вас IE!')
// } else {
//     alert('Мы надеемся, что и в вашем браузере все ок!');
// }


// Функции

// function showMessage(from, text) {
//     from = '" ' + from + ', ';
//     text = text + ' "';
//     alert(from+text);
// }
// showMessage('Vasya', 'privet!');

// var z = +prompt('');
// var x = +prompt('');
// function addNumbers(a,b) {
//     var c = a + b;
//     return c;
// }
// alert(addNumbers(z,x));


// Функциональные выражения

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }
// ask(
//     'privet vasya!',
//     function () {
//         alert('krasava!')
//     },
//     function () {
//         alert('LOH!')
//     }
// );


// Числа

// var a = 12;
// var b = '12';
// alert(a + +b);
// alert('12' / '-2');
// alert(parseInt('12px'));
// alert(parseFloat('12.3.4px'));
// alert(parseInt('a', 16));

// var x = prompt('Введите число');
//
// if(isNaN(x)){
//     alert('Строка преобразовалась в NaN. Не число');
// } else{
//     alert('Число')
// }


// var n = 128;
// alert(n.toString(16));
//
// alert( Math.floor(3.5) );
// alert( Math.ceil(3.5) );
// alert( Math.round(3.5) );
//
// alert(~~12.3); //12

// var a =+ prompt('Vvedite chislo');
// var b =+ prompt('Vvedite chislo');
// var x = a+b;
// alert(x);


// Массивы

// var user = {};
// user.name = 'Vasya';
// user.surname = 'Petrov';
// user.name = 'Sergey';
// delete user.name;
// alert(user.name + user.surname);


// Объекты: перебор свойств

// var menu = {
//     width: 300,
//     height: 200,
//     title: "Menu"
// };
//
// for (var key in menu) {
//     alert( "Ключ: " + key + " значение: " + menu[key] );
// }

// var menu = {
//     width: 300,
//     height: 200,
//     background: 'black',
//     title: 'Menu'
// };
//
// var counter = 0;
//
// for (var key in menu) {
//     counter++;
// }
//
// alert( "Всего свойств: " + menu[key].length + ' или ' + counter );

// var codes = {
//     "+7": "Россия",
//     "+38": "Украина",
//     "+1": "США"
// };
//
// for (var i in codes) {
//     var value = codes[i];
//     i = +i;
//     alert(i + ": " + value);
// }

// function isEmpty(obj) {
//     for (var key in obj){
//         return false;
//     }
//     return true;
// }
//
// var schedule = {};
//
// alert( isEmpty(schedule) ); // true
//
// schedule = {
//     'Imya': 'Vasya',
//     'Familiya': 'Petrov'
// };
//
// alert( isEmpty(schedule) ); // false
//
// for (var i in schedule){
//     alert(i + ': ' + schedule[i]);
// }

// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250,
//     "Саша": 450
// };
// var sum = 0;
// for(var i in salaries){
//     sum += salaries[i];
//     alert(i + ' = $' + salaries[i]);
// }
// alert('Зарплата всех сотрудников = $' + sum);
// alert('Средняя зарплата всех сотрудников = $' + (sum / Object.keys(salaries).length));


// var menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
// }
// function multiplyNumeric(obj) {
//     for(var key in obj){
//         if(isNumeric(obj[key])){
//             obj[key] *= 2;
//         }
//     }
// }
// function message() {
//     multiplyNumeric(menu);
//     alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );
// }
// message();


// Объекты: передача по ссылке

// var user = {
//     name: 'vasya',
//     age: 30
// };
//
// var clone = {};
//
// for(var key in user){
//     clone[key] = user[key];
//
//     clone.name = 'petya';
//     clone.age = 35;
//
//     alert(key + user[key]);
//     alert(key + clone[key]);
// }


// Массивы с числовыми индексами

// var goods = ['Монитор','Мышка','Клавиатура'];
// alert(goods);
// goods.push('Компьютер');
// alert(goods);
// goods.shift();
// alert(goods);


// var styles = ['Джаз','Блюз'];
// console.log(styles);
// styles.push('Рок-н-Ролл');
// console.log(styles);
// styles[styles.length - 2] = 'Классика';
// console.log(styles);
// alert(styles.shift());
// console.log(styles);
// styles.unshift('Регги','Рэп');
// console.log(styles);

// var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
// var rand =Math.floor(Math.random() * arr.length);
// alert(arr[rand]);

// var numbers = [];
//
// while (true){
//     var value = prompt('Vvedite chislo','0');
//     if (value === '' || value === null || isNaN(value))
//         break;
//     numbers.push(+value)
// }
// var sum = 0;
// for(var i = 0; i < numbers.length; i++){
//     sum += numbers[i];
// }
// alert(sum);


// Массивы: методы

// var names = 'Vasya-Petya-Dima-Pasha';
//
// var arr = names.split('-');
// for(var i = 0; i < arr.length; i++){
//     alert('Vam prishlo soobwenie, ' + arr[i])
// }

// var arr = 'test';
// alert(arr.split(''));


// var arr = [1,2,3,4,5];
// var str = arr.join('-бля');
// console.log(str);
// console.log(arr);

// var arr = ['I', 'am', 'learn', 'JS'];
// arr.splice(0,2,'We','are');
// var str = arr.join(' ');
// alert(str);

// var arr = ['I', 'am', 'learn', 'JS'];
// arr.splice(4, 0, ' - difficult', 'language');
// var str = arr.join(' ');
// alert(str);

// var arr = [1,2,7,8,9];
// arr.splice(-3,0,3,4,5,6);
// alert(arr);

// function compareNumeric(a, b) {
//     return a - b;
// }
// var arr = [ 1, 2, 15, -2, 21 ];
// arr.sort(compareNumeric);
// alert(arr);

// function addClass(obj, cls) {
//     if (obj.className){
//         var classes = obj.className.split(' ');
//     } else {
//         var classes = []
//     }
//     for (var i=0; i <classes.length; i++){
//         if (classes[i] == cls){
//             return
//         }
//     }
//     classes.push(cls);
//     obj.className = classes.join(' ');
// }
// var obj = {
//     className: 'open menu'
// };
// addClass(obj, 'new');
// addClass(obj, 'open');
// addClass(obj, 'me');
// alert(obj.className);

// удаление
// function removeClass(obj, cls) {
//     var classes = obj.className.split(' ');
//     for (var i = 0; i < classes.length; i++) {
//         if (classes[i] == cls) {
//             classes.splice(i, 1);
//             i--;
//         }
//     }
//     obj.className = classes.join(' ');
// }
// var obj = {
//     className: 'open menu menu open'
// };
// removeClass(obj, 'blabla');
// removeClass(obj, 'menu');
// alert(obj.className);

// сортировка
// var arr = [5, 2, 1, -10, 8];
// function sortMass(a, b) {
//     return a - b;
// }
// arr.sort(sortMass);
// for (i = 0; i < arr.length; i++){
//     document.write(arr[i] + '<br>');
// }



// function compareAge(personA, personB) {
//     return personA.age - personB.age;
// }
// var vasya = { name: "Вася", age: 23 };
// var masha = { name: "Маша", age: 18 };
// var vovochka = { name: "Вовочка", age: 6 };
// var people = [ vasya , masha , vovochka ];
// people.sort(compareAge);
// for(var i = 0; i < people.length; i++) {
//     document.write(people[i].name + ': ' + people[i].age + ';<br>');
// }



// function camelize(str) {
//     var arr = str.split('-');
//     for (var i = 0; i < arr.length; i++){
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }
//     return arr.join('')
// }
// alert(camelize('border-left-width'));
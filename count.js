function weddingDay() {
    //дата рождества
    const meetingDATE = new Date ('2024: March 2, 12:00');
    //(March 11, 2023 12:00  ' ')
    //дата сейчас ('December 25, 2022 00:00')
    const now = new Date();
    //разница между ними
    const diff = meetingDATE - now;

//Вычислим количество милисекунд в секунде, минуте, в часе и в дне;
    const msInSecond = 1000;
    const msInMinute = 60*1000;
    const msInHour = 60*60*1000;
    const msInDay = 24*60*60*1000;

//получим количество дней до события
    const displayDay = Math.floor(diff/msInDay);
//разместим кол-во дней в  h4 class= days,  HTML/ выберем этот класс и пропишем через JS цифру в нашем блоке days в HTML
document.querySelector('.days').textContent = displayDay;
console.log(displayDay);

//получим количество часов до события, но высчитываем остаток часов от полных дней
const displayHour = Math.floor(diff%msInDay/msInHour);
//разместим кол-во часов в  h4 class= hours,  HTML/ выберем этот класс и пропишем через JS цифру в нашем блоке hours в HTML
document.querySelector('.hours').textContent = displayHour;


//получим количество минут до события, но высчитываем остаток минут от полных часов
const displayMinute = Math.floor(diff%msInHour/msInMinute);
//разместим кол-во дней в  h4 class= minutes,  HTML/ выберем этот класс и пропишем через JS цифру в нашем блоке minutes в HTML
document.querySelector('.minutes').textContent = displayMinute;
//получим количество часов до события, но высчитываем остаток секунд от полных часов
const displaySecond = Math.floor(diff%msInMinute/msInSecond);
//разместим кол-во секунд в  h4 class= seconds,  HTML/ выберем этот класс и пропишем через JS цифру в нашем блоке seconds в HTML
document.querySelector('.seconds').textContent = displaySecond;

//Теперь приравняем к нулю все значения, как только дойдем до нужной даты, иначе все пойдет в отрицат.значения



if (diff<=0) {
    document.querySelector('.days').textContent = 0;
    document.querySelector('.hours').textContent = 0;
    document.querySelector('.minutes').textContent = 0;
    document.querySelector('.seconds').textContent = 0;
    //останавливаем счетчик
    clearInterval(timerId);
    happyWedding(); 
}

}
/*повторяем функцию каждую секунду с пом. setInterval,но создаем переменную timerId, чтобы поместить ее в clearInterval, 
тогда он знает, что нужно остановить*/
let timerId = setInterval(weddingDay, 1000);
console.log(timerId);

//меняем заголовок
function happyWedding() {
    const heading = document.querySelector('h1');
    const chair = document.querySelector('.chair');
    const kate = document.querySelector('.kate');
    const image = document.querySelector('.image');
    const newImage = document.querySelector('.newimage');
    const meeting = document.querySelectorAll('.meeting');
    const anketa = document.querySelector('.anketa');
    heading.textContent = 'Our event is today!!!!!';
heading.classList.add('newHeading');
image.classList.add('.newimage');
chair.classList.add('.kate')
anketa.style.display = 'none';
image.style.display = 'none';
chair.style.display = 'none';
//Фото Кати разблокируем после окончания отсчета
newImage.style.display = 'block';
kate.style.display = 'block';
document.body.style.backgroundColor = "#B2EBF9";
meeting.forEach(function (item) {
    item.classList.add('newMeeting');
})

}


//ставим подслушку на кнопку
const button = document.querySelector('#myButton');
const audio = document.querySelector('#myAudio');

button.addEventListener ('click', function() {
   if (audio.paused) {
    audio.play();
    button.classList.toggle('pause');
   }
   else{
    audio.pause();
    button.classList.toggle('pause');
   }
})


const time = 2000; //время выполнения
const step = 1;
let block = document.querySelector(".animate-one");

function outNum(num, elem) {
         let e = document.querySelector("#out");
         n = 0;
         let t = Math.round(time / (num / step));
         let interval = setInterval(() => {
             n = n + step;
             if (n == num) {
                 clearInterval(interval);
             }
             e.innerHTML = n + "%"; //выводит число и знак процента справа
         }, t);
    }

//--------------при доскроле добавляет класс out-num и вызывает функцию выше---------------------------------------


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {  //при доскроле выполняем код снизу
      change.target.classList.add('out-num');
      outNum(100, '#out')
      setTimeout(() => {
        $(".out-num").text('100%');
        outNum = null;
      }, 2000);
    };
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animate-one'); //селектор блока который ищем
for (let elm of elements) {
  observer.observe(elm);
}










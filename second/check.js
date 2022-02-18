function check (){
let counter = 0;
let answer0 = Array.from(document.querySelectorAll("input[name='answer-0']"));
let answer1 = Array.from(document.querySelectorAll("input[name='answer-1']"));
let answer2 = Array.from(document.querySelectorAll("input[name='answer-2']"));
let answer3 = Array.from(document.querySelectorAll("input[name='answer-3']"));
let answer4 = Array.from(document.querySelectorAll("input[name='answer-4']"));
let answer5 = Array.from(document.querySelectorAll("input[name='answer-5']"));
let answer6 = Array.from(document.querySelectorAll("input[name='answer-6']"));
let answer7 = Array.from(document.querySelectorAll("input[name='answer-7']"));
let answer8 = Array.from(document.querySelectorAll("input[name='answer-8']"));
let answer9 = Array.from(document.querySelectorAll("input[name='answer-9']"));

let answersArray = answer0.concat(answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9);

    for (let i=0; i<answersArray.length; i++) {
    if (answersArray[i].checked) {
      counter +=Number(answersArray[i].value);
    }
}
let result = (counter/10)*100;
let confirmed = confirm(`Вы выполнили на ${result}% из 100%
Хотите повторить тест?`);
if(confirmed){window.open("test.html")}
else {alert("Спасибо за выполнение теста")}
}




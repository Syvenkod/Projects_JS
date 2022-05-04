function check (){
let counter = 0;
let answersArray = Array.from(document.querySelectorAll("input[name]"));
    for (let i=0; i<answersArray.length; i++) {
    if (answersArray[i].checked) {
      counter +=Number(answersArray[i].value);
    }
}
let result = (counter/10)*100;
let confirmed = confirm(`Вы выполнили на ${result}% из 100%
Хотите повторить тест?`);
if(confirmed){location.reload(true)}
else {alert("Спасибо за выполнение теста")}
}




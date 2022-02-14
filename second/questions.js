let questions = [

new Question (`Какое количество сообщений будет выведено в консоль?
for(var i = 10; i < 35; i += 5) {
    console.log(i);
}`,
[
new Answer ("10", 0),
new Answer ("5", 1),
new Answer ("15", 0),
new Answer ("25", 0)]),

new Question (`Что будет на экране?
    alert(str);
    var str = "Hello"; `,
[
new Answer ("Hello", 0),
new Answer ("alert", 0),
new Answer ("будет ошибка", 0),
new Answer ("undefined", 1)]),

new Question (`Как объявить функцию в JavaScript?`,
[
new Answer ("function:MyFunction()", 0),
new Answer ("function MyFunction()", 1),
new Answer ("function = MyFunction()", 0),
new Answer ("function = New MyFunction()", 0)]),

new Question (`Какое из этих ключевых слов ООП не используется в JavaScript?`,
[
new Answer ("this", 0),
new Answer ("super", 0),
new Answer ("все есть", 1),
new Answer ("instanceOf", 0)]),

new Question (`JSON - это...`,
[
new Answer ("JavaScript Object Notation", 1),
new Answer ("название следующей версии JavaScript", 0),
new Answer ("JavaScript Over Network", 0),
new Answer ("имя создателя JavaScript", 0)]),

new Question (`Какое сообщение покажет alert?
                 let i = 5;
                alert(++i);`,
[
new Answer ("4", 0),
new Answer ("5", 0),
new Answer ("6", 1),
new Answer ("undefined", 0)]),

new Question (`Какой оператор завершает выполнение текущей функции и возвращает её значение?`,
[
new Answer ("case", 0),
new Answer ("break", 0),
new Answer ("catch", 0),
new Answer ("return", 1)]),

new Question (`Чему равно i в конце кода?
    for(var i=0; i<10; i++) {
        ...
}
    alert(i);`,
[
new Answer ("undefined", 0),
new Answer ("9", 0),
new Answer ("10", 1),
new Answer ("нет такой переменной после цикла", 0)]),

new Question (`В чем отличие между локальной и глобальной переменной?`,
[
new Answer ("отличий нет", 0),
new Answer ("локальные видны повсюду, глобальные только в функциях", 0),
new Answer ("глобальные можно переопределять, локальные нельзя", 0),
new Answer ("глобальные видны повсюду, локальные только в функциях", 1)]),

new Question (`В чем разница между confirm и prompt?`,
[
new Answer ("ничем не отличаются", 0),
new Answer ("prompt вызывает диалоговое окно с полем для ввода, confirm - окно с подтверждением", 1),
new Answer ("confirm вызывает диалоговое окно с полем для ввода, prompt - окно с подтверждением", 0),
new Answer ("О чем Вы?", 0)]),

]
console.log(questions);
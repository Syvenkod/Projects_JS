let questions = [
{
id:1,
text: `Какое количество сообщений будет выведено в консоль?
for(var i = 10; i < 35; i += 5) {
    console.log(i);
}`,
correctAnswer: "5",
answerOptions: ["10", "5", "15", "25"]
},
{
    id:2,
    text: `Что будет на экране?
    alert(str);
    var str = "Hello"; `,
    correctAnswer: "undefined",
    answerOptions: ["Hello", "alert", "будет ошибка", "undefined"]
    },
    {
        id:3,
        text: "Как объявить функцию в JavaScript?",
        correctAnswer: "function MyFunction()",
        answerOptions: [" function:MyFunction()", "function MyFunction()", "function = MyFunction()", "function = New MyFunction()"]
        },
        {
            id:4,
            text: "Какое из этих ключевых слов ООП не используется в JavaScript?",
            correctAnswer: "все есть",
            answerOptions: ["this", "super", "все есть", "instanceOf"]
            },
            {
                id:5,
                text: "JSON - это...",
                correctAnswer: "JavaScript Object Notation",
                answerOptions: ["JavaScript Object Notation", "название следующей версии JavaScript", "JavaScript Over Network", "имя создателя JavaScript"]
                },
                {
                    id:6,
                    text: `Какое сообщение покажет alert?
                    let i = 5;
                    alert(++i);`,
                    correctAnswer: "6",
                    answerOptions: ["4", "5", "6", "undefined"]
                    },
                    {
                        id:7,
                        text: "Какой оператор завершает выполнение текущей функции и возвращает её значение?",
                        correctAnswer: "return",
                        answerOptions: ["case", "break", "catch", "return"]
                        },
                        {
                            id:8,
                            text: `Чему равно i в конце кода?
                            for(var i=0; i<10; i++) {
                                ...
                            }
                            alert(i);`,
                            correctAnswer: "10",
                            answerOptions: ["undefined", "9", "10", "нет такой переменной после цикла"]
                            },
                            {
                                id:9,
                                text: "В чем отличие между локальной и глобальной переменной?",
                                correctAnswer: "глобальные видны повсюду, локальные только в функциях",
                                answerOptions: ["отличий нет", "локальные видны повсюду, глобальные только в функциях", "глобальные можно переопределять, локальные нельзя", "глобальные видны повсюду, локальные только в функциях"]
                                },
                                {
                                    id:10,
                                    text: "В чем разница между confirm и prompt?",
                                    correctAnswer: "prompt вызывает диалоговое окно с полем для ввода, confirm - окно с подтверждением",
                                    answerOptions: ["ничем не отличаются", "prompt вызывает диалоговое окно с полем для ввода, confirm - окно с подтверждением", "confirm вызывает диалоговое окно с полем для ввода, prompt - окно с подтверждением", "О чем Вы?"]
                                    }
]
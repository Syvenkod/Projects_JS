class Test{
    element;

    constructor(questions)
    {this.questions = questions;
    this.question = 0;}

    drawAll(){
    questions.forEach(question => {
        question.createIn(this.questions)
           })
    }}

class Question{

   constructor(text, answers, id)
   {this.text = text;
    this.answers = answers;
    this.id = id}

   createIn(element) {
    this.div = document.createElement("div");
    this.div.classList.add("question");
    let pHead = document.createElement("p");
    pHead.classList.add("p-head");
    pHead.innerText = this.text;
    this.div.append(pHead);
    for (let i=0; i< this.answers.length; i++){
    let divAnswers = document.createElement("div");
    divAnswers.classList.add("answers");
    let input = document.createElement("input");
    input.type = "radio";
    input.name = `answer-${this.id}`;
    input.value = this.answers[i].value;
    input.classList.add("answer-input");
    let p = document.createElement("p");
    p.innerText = this.answers[i].text;
    divAnswers.append(input);
    divAnswers.append(p);
    this.div.append(divAnswers)}
    element.append(this.div);
}}
class Answer{
   constructor(text, value)
   {this.text = text;
    this.value = value;}
}


let questionList = document.querySelector(".questions-list");
document.querySelector("#result").addEventListener("click",check);
let test = new Test(questionList);

window.addEventListener("load", function () {
    test.drawAll();
});
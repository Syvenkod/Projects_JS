class Test{
    element;

    constructor(questions, results)
    {this.questions = questions;
    this.results = results;
    this.score = 0;
    this.question = 0;}

    #drawQuestion(questions){
        questions.forEach(question => {
            question.createIn(this.questions)
           });
    }
    drawAll(){
    questions.forEach(question => {
        question.createIn(this.questions)
           })
     this.#drawQuestion(questions);
    }
}

class Question{

   constructor(text, answers)
   {this.text = text;
    this.answers = answers;}


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
    input.addEventListener("click", this.changeState.bind(this));
    input.type = "checkbox";
    let p = document.createElement("p");
    p.innerText = this.answers[i].text;
    divAnswers.append(input);
    divAnswers.append(p);
    this.div.append(divAnswers)}

    element.append(this.div);
}
   changeState(element){
   }
}

class Answer{
   constructor(text, value)
   {this.text = text;
    this.value = value;}
}
class Result{
    constructor(text, value)
   {this.text = text;
    this.value = value;}

   Check(value)
   {
       if(this.value <= value)
       {return true;}
       else
       {return false;}
   }
}
let questionList = document.querySelector(".questions-list");
let test = new Test(questionList);

window.addEventListener("load", function () {
    test.drawAll();
});
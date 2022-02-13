class questions{
    constructor (text, correctAnswer, answerOptions){
        this.text = text;
        this.correctAnswer = correctAnswer;
        this.answerOptions = answerOptions;
    }

    drawAll(){}

    createIn(question){
        this.text = document.createElement("div");
        this.div.classList.add("question");

        let p = document.createElement("p");
        p.innerText = this.text;

        let input = document.createElement("input");
        input.addEventListener("click", this.changeState.bind(this));
        input.type = "checkbox";

        let p = document.createElement("p");
        p.innerText = this.task.text;

        this.div.append(input);
        this.div.append(p);

        question.append(this.text);
    }
    changeState(question) {
        this.task.isDone = !this.task.isDone;
        this.div.classList.toggle("choice");
    }
    }

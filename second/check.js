function check (){
    let counter = 0;
    let answer1 = document.querySelectorAll("input[name='answer-0']");
    checkAnswer(answer1);

    function checkAnswer() {
        for (let i=0; i<this.length; i++) {
        if (this[i].checked) {
          counter +=this[i].value;
        }
        console.log(counter);
        return counter;
}}

return counter;
};


function check() {
    var num = 0;
    var q1 = document.survey.q1.value;
    var q2 = document.survey.q2.value;
    var q3 = document.survey.q3.value;
    var q4 = document.survey.q4.value;
    var q5 = document.survey.q5.value;
    var q6 = document.survey.q6.value;
    var q7 = document.survey.q7.value;
    var q8 = document.survey.q8.value;
    var q9 = document.survey.q9.value;
    var q10 = document.survey.q10.value;
    var score= document.getElementById("score");
    var ansArr = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    var ansVals = ["John Elway", "Kyler Murray", "Aaron Donald", "Patriots", "Cardinals", "Jaguars", "Justin Herbert", "Aaron Rodgers", "Kliff Kingsbury", "Deandre Hopkins"];
    for (let i = 0; i < ansArr.length; i++) {
        if (ansArr[i] == ansVals[i]) {
            num += 1;
        }
    }
    score.textContent=`Your final score for the quiz is ${num}/10`;
}
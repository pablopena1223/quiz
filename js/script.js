/* global $ */

        // var q1result = $("#question1").val();
        
        // var q2result = $("#question2").val();
        
        // var q3result = $("#question3").val();
        
        // var q4result = $("#question4").val();
        
        // var q5result = $("#question5").val();
        
         var totalScore = 0;

$(document).ready(function() {
    
    $("button").click(function() {
        var name = $("#name").val();

        totalScore = 0;
        
        var q1result = $("#question1").val();
        
        var q2result = $("#question2").val();
        
        var q3result = $("#question3").val();
        
        var q4result = $("#question4").val();
        
        var q5result = $("#question5").val();
        
        
        resultforquestion(q1result, "a");
        resultforquestion(q2result, "b");
        resultforquestion(q3result, "c");
        resultforquestion(q4result, "d");
        resultforquestion(q5result, "a");


            if(totalScore < 30){
                $("#resultforavenger").text(name  + "  You are The Hulk");
            }else if (totalScore > 30 && totalScore <= 60){
                $("#resultforavenger").text(name + "  You are Iron Man");
            }else if (totalScore > 60 && totalScore <= 80){
                $("#resultforavenger").text(name + "  You are thor");
            }else if (totalScore > 80 && totalScore <= 100){
                $("#resultforavenger").text(name + "  You are Captin America");
            }
    
    });

});

function resultforquestion(result, correctanswer){
    if (result === correctanswer || result === correctanswer.toUpperCase()){
        totalScore += 19;
    }
}


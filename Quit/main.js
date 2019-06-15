//主要程式運作
$(document).ready(function(){
    //用來儲存目前作答到第幾題
    var currentQuiz =null;
    
    //按下按鈕，要做的事情放在這裡
    $("#startButton").click(function(){
        
        if(currentQuiz ==null){ //還沒作答
            currentQuiz=0;
            $("#question").text(questions[0].question); //顯示題目
            $("#options").empty(); //顯示前先將區域清空
            for(var x=0;x<questions[0].answers.length;x++){ //選項內容
                $("#options").append("<input name='options' type='radio' value=" + x + ">" + "<lable>" + questions[0].answers[x][0] + "</label><br><br>");
            }  
                $("#starButton").attr("value","下一題"); //將按鈕上的文字換成下一題
            
        }else{ //已經作答
            $.each($(":radio"),function(i,val){ //尋訪每個選項都被選取
                if(val.checked){ //使用者所選取的選項是否產生最終結果
                    if(isNaN(questions[currentQuiz].answers[i][1])){
                        var finalResult = questions[currentQuiz].answers[i][1];
                        //顯示最終結果標題
                        $("#question").text(finalAnswers[finalResult][0]);
                        //顯示前先將區域清空
                        $("#options").empty(); 
                        currentQuiz =null;
                        //顯示詳細內容
                        $("#options").append(finalAnswers[finalResult][1] + "<br><br>");
                        //修改按鈕文字
                        $("#starButton").attr("value","重新開始");
                    }else{
                        currentQuiz = questions[currentQuiz].answers[i][1]-1;
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty(); 
                        for(var x=0;x<questions[0].answers.length;x++){ //選項內容
                            $("#options").append("<input name='options' type='radio' value=" + x + ">" + "<lable>" + questions[currentQuiz].answers[x][0] + "</label><br><br>");
                        }  
                    }
                    return false;
                }
            });
        }
    });
    
})
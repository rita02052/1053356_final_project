//存放資料
var questions = [
    {
        "question":"你聽過排球嗎？",
        "answers":[
            ["是的",2],
            ["沒有","A"],
        ]
    },
    {
        "question":"你有打過排球嗎？",
        "answers":[
            ["是的",3],
            ["沒有",9]
        ]
    },
    {
        "question":"有加入任何球隊過嗎?",
        "answers":[
            ["有的",4],
            ["沒有",5]
        ]
    },
    {
        "question":"有打過比賽？",
        "answers":[
            ["有的",5],
            ["沒有",6]
        ]
    },
    {
        "question":"假日會去野場打球嗎?",
        "answers":[
            ["有的",6],
            ["沒有","D"]
        ]
    },
    {
        "question":"有沒有因為太久沒碰球就渾身不對勁?",
        "answers":[
            ["沒錯",7],
            ["還好欸","D"]
        ]
    },
    {
        "question":"就算傷還沒好還是會偷偷去打球？",
        "answers":[
            ["是的",8],
            ["不是","D"]
        ]
    },
    {
        "question":"有在雨天打過球嗎?",
        "answers":[
            ["有阿，雨天就是要打球","B"],
            ["沒有，神經病嗎?","C"]
        ]
    },
    {
        "question":"對排球的印象？",
        "answers":[
            ["場上全部都是攻擊手，不過打攻擊超帥","D"],
            ["手不會很痛嗎?","C"]
        ]
    }
    
];

var finalAnswers={
        "A":["♡ ♡ ♡ ♡ ♡","沒聽過!!!!現在聽過了吧！趕快去認識這讓人又痛又愛的運動吧!"],
        "B":["♥ ♥ ♥ ♥ ♥","天啊!根本排球癌ㄟ~不對!你應該現在在球場，而不是做這些無聊的問題吧!"],
        "C":["♡ ♡ ♡ ♡ ♥","其實不會很痛喔~因為學校的球通常都很爛，球的材質真的很重要，趕快參加系排就知道差多多啦~~"],
        "D":["♡ ♡ ♥ ♥ ♥","哇哇!其實你已經是喜歡上排球了，只是你沒發現，快去多了解排球，排球其實超級有趣的，尤其心理戰超重要的啦!!"]
};

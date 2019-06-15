var player;//撥放器
var selectnumber = 0;

//當youtube API準備好時
function onYouTubeIframeAPIReady(){ 
    player = new YT.Player("player",{
        height:"390",
        width:"648",
        videoId:playList[selectnumber],
        playerVars:{
            "autoplay":0,//是否自動撥放
            "controls":0,//是否顯示控制項
            "start":playTime[selectnumber][0],//開始撥放秒數
            "end":playTime[selectnumber][1],//結束撥放秒數
            "showinfo":0,//上方是否顯示標題
            "rel":0,//結束時是否顯示相關影片
            "iv_load_policy":3//是否顯示置入的行銷連結
        },
        events:{
            "onReady":onPlayerReady,
            "onStateChange":onPlayerStateChange
        }
    });
}
//當youtube撥放器準備好時
function onPlayerReady(event){
        $("#playButton").click(function(){                
                switch(document.getElementById("videoid").value){
                    case "0":
                        selectnumber =  0;
                        break;
                    case "1":
                        selectnumber =  1;
                        break;
                    case "2":
                        selectnumber =  2;
                        break;
                    case "3":
                        selectnumber =  3;
                        break;
                    case "4":
                        selectnumber =  4;
                        break;
                    case "5":
                        selectnumber =  5;
                        break;
                    case "6":
                        selectnumber =  6;
                        break;
                    case "7":
                        selectnumber =  7;
                        break;
                    default:
                        console.log("get videoid Error!");  
                }
                player.loadVideoById({
                "videoId":playList[selectnumber],
                "startSeconds":playTime[selectnumber][0],
                "endSeconds":playTime[selectnumber][1],
                "suggestedQuality":"large"
                 });
                $("h2").text(player.getVideoData().title);
                player.playVideo();
        });
}
//當撥放器撥放狀態改變時
function onPlayerStateChange(event){ 
    //當撥放結束時
    if(event.data == 0 && (Math.floor(player.getCurrentTime())==playTime[currentPlay][1])){
        
    }
    
}
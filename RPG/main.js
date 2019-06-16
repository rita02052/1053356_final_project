var mapArray, ctx, currentImgMainX, currentImgMainY;
//mapArray 地圖中的格子
//ctx HTML Canvas用
var imgMountain, imgMain, imgEnemy;
//障礙物、主角、敵人的圖片

//當網頁元件載入完成要做的事情
$(document).ready(function(){ 
    //地圖設定 0:可走 1:障礙 2:終點 3:敵人
    mapArray = [0,1,1,0,0,0,3,1,2];
    ctx = $("#myCanvas")[0].getContext("2d");
    
    //主角設定
    imgMain = new Image();
    imgMain.src = "RPG/images/spriteSheet.png";
    currentImgMainX = 0;
    currentImgMainY = 0;
    imgMain.onload=function(){
        ctx.drawImage(imgMain,0,0,80,130,currentImgMainX,currentImgMainY,200,200);
    };
    
    //障礙物 敵人設定
    imgMountain = new Image();
    imgMountain.src = "RPG/images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "RPG/images/Enemy.png";
    //等到圖片載入後再執行這一段
    imgMountain.onload=function(){ 
        imgEnemy.onload=function(){
            for(var x in mapArray){
                if(mapArray[x] == 1) //擺上障礙物 
                    ctx.drawImage(imgMountain,32,65,32,32,x%3*200,Math.floor(x/3)*200,200,200);
                else if(mapArray[x] == 3)//擺上敵人
                    ctx.drawImage(imgEnemy,7,40,104,135,x%3*200,Math.floor(x/3)*200,200,200);
            }
        };
    };

});

//按下按鍵要做的事情
$(document).keydown(function(event){
    var targetImgMainX, targetImgMainy,targetBlock,cutImagePoaitionX;
    //目標位址和目標那格的編號
    
    event.preventDefault();//壁面使用這點擊時出現其他行為
    
    switch(event.which){
        case 37://往左走
            console.log("左");
            targetImgMainX = currentImgMainX-200;
            targetImgMainy = currentImgMainY;
            cutImagePoaitionX = 175;
            break;
        case 38://往上走
            console.log("上");
            targetImgMainX = currentImgMainX;
            targetImgMainy = currentImgMainY-200;
            cutImagePoaitionX = 355;
            break;
        case 39://往右走
            console.log("右");
            targetImgMainX = currentImgMainX+200;
            targetImgMainy = currentImgMainY;
            cutImagePoaitionX = 540;
            break;
        case 40://往下走
            console.log("下");
            targetImgMainX = currentImgMainX;
            targetImgMainy = currentImgMainY+200;
            cutImagePoaitionX = 0;
            break;
        default:
            return
            
    }
    
    if(targetImgMainX<=400 && targetImgMainX>=0 && targetImgMainy<=400 && targetImgMainy>=0){
        targetBlock = targetImgMainX/200 +targetImgMainy/200*3;
    }else{
        targetBlock = -1; //異常 不移動
    }
    
    ctx.clearRect(currentImgMainX, currentImgMainY, 200, 200);//清除主角原本所在位置
    
    if(targetBlock == -1 || mapArray[targetBlock]== 1 || mapArray[targetBlock] == 3){
        //遇到障礙物 敵人
    }
    else{
        $("#talkBox").text("");
        currentImgMainX = targetImgMainX;
        currentImgMainY = targetImgMainy
    }
    
    ctx.drawImage(imgMain,cutImagePoaitionX, 0, 80, 130, currentImgMainX,currentImgMainY,200,300);
    
    switch(mapArray[targetBlock]){
        case undefined://牆壁
            $("#talkbox").text("邊界");
            break;
        case 1://障礙
            $("#talkbox").text("有山!");
            break;
        case 2://終點
            $("#talkbox").text("抵達終點!");
            break;
        case 3://有人
            $("#talkbox").text("嗨~");
            break;
    }
});

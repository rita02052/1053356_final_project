$(document).ready(function(){
    $("input").click(function(){
        var selectarea =  document.getElementById("area").value;
         var element = document.getElementById('im');
        if(selectarea == "taipei"){
            var numberOfListItem = placetaipei.length;
            var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
            $("H1").text(placetaipei[randomChildNumber]); 
            $("#im").attr("src", "img/place/taipei/"+randomChildNumber + ".jpg");<!--顯示圖片-->
        }
        else if(selectarea == "newtaipei"){
            var numberOfListItem = placenewtaipei.length;
            var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
            $("H1").text(placenewtaipei[randomChildNumber]); 
            $("#im").attr("src", "img/place/newtaipei/"+randomChildNumber + ".jpg");<!--顯示圖片-->
        }
        else if(selectarea == "taoyuan"){
            var numberOfListItem = placetaoyuan.length;
            var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
            $("H1").text(placetaoyuan[randomChildNumber]); 
            $("#im").attr("src", "img/place/taoyuan/"+randomChildNumber + ".jpg");<!--顯示圖片-->
        }
        else if(selectarea == "hsinchu"){
            var numberOfListItem = placehsinchu.length;
            var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
            $("H1").text(placethsinchu[randomChildNumber]); 
            $("#im").attr("src", "img/place/hsinchu/"+randomChildNumber + ".jpg");<!--顯示圖片-->
        }
        
       console.log("numberOfListItem");     
        //$("#im").attr("src", "RandomSelect/"+randomChildNumber + ".jpg");<!--顯示圖片-->
    });
});
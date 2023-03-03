$(document).ready(function(){

    let i=0;
    $("#btnAdd").on("click",(function(){
    {if(i<=10)
        $("#pics").find("li").last().find("img").attr("src","pics/pic"+i+".jpg");  
        i=i+1;
    }}));

    // $("#pics").find("li").last().find("img").attr("src");
    // $("#pics").find("li").last().find("img").attr("src","pics/pic"+3+".jpg");
    // m=$("#pics").find("li").last().find("img").attr("src");
    // $("#picbox").html($("<img />",{src:m}));
    

    // let i=0;
    // $("#btnAdd").on("click",(function(){
    // {if(i<10)
    //     $("#pics").find("li").last().find("img").attr("src","pics/pic"+i+".jpg");  
    //     i=i+1;
    // }
})
// var


//     let cnt=0;
//     $("#pics").find("li").last().find("img").attr("src","pics/pic2.jpg");

//     $("#btnAdd").on("click",(function(){
       
// $("#pics").find("li").last().clone().appendTo($("#pics"));
//  n=$("#pics li").length;
// let n=$("#pics li").length;
// $("pics").find("li").last().find("img").attr("src","pics/pic2.jpg");
// // $("#pics").find("li").last().find("img").attr("srt","")="pics/pic"+ n +".jpg";
// (n<10)?n="0"+n:n;
// $("pics").find("li").last().find("img").attr("src","pics/pic"+n+".jpg");
// $("#pics li:last span").text(n);
// if(++cnt>=9)($("btnAdd").off("click"))
    // })

    
    // }))
    //  $("#pics").find("span").on("click",(function(){
    //        pc=($(this).prev().attr("src"))
    //        $("#picbox").html($("<img />",{src:pc}));
    //     }))

// })
// //         // pc=$(this).prev().attr("src");
// //         // $("#picbox").html($("<img />",{src:pc}));
    })


   


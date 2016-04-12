setTimeout(function(){
    $(".page_1_left").animate({"left":"0","opacity":"1"},1600,"easeOutQuint" );
},600);

setTimeout(function(){
    $(".main_snapshot").animate({"opacity":"1", "right":"0"},1900,"easeOutQuint" );
    $(".main_snapshot2").animate({"opacity":"1", "right":"210px"},2200,"easeOutQuint" );
    $(".hi").animate({"opacity":"1","right":"460px"},2100,"easeOutQuint" );
},1100);



$(document).scroll(function(){
    var scroll_h=$(document).scrollTop();

    if(scroll_h>650){
        $(".page_2_banner").animate({"opacity":"1","bottom":"100px"},1600,"easeOutQuint");
    }

    if(scroll_h>1450){
        $(".page_3_banner .yi").animate({"opacity":"1","top":"0"},1800,"easeOutQuint");
        $(".page_3_banner .shi").animate({"opacity":"1","bottom":"0"},1800,"easeOutQuint");
        $(".page_3_banner .zhu").animate({"opacity":"1","left":"0"},1800,"easeOutQuint");
        $(".page_3_banner .xing").animate({"opacity":"1","right":"0"},1800,"easeOutQuint");
    }

    if(scroll_h>2250){
        $(".page_4_banner").animate({"opacity":"1","bottom":"-50px"},2000,"easeOutQuint");
    }
    
    
    if(scroll_h>2550){
        $(".page_5_banner .down_left").animate({"opacity":"1","left":"0"},1800,"easeOutQuint");
        $(".page_5_banner .down_middle").animate({"opacity":"1"},1800,"easeOutQuint");
         $(".page_5_banner .down_right").animate({"opacity":"1","right":"0"},1800,"easeOutQuint");
    }


});

// 平滑滚动
var $root = $('html, body');
$('#index_page1_down').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
    return false;
});


// Play Video
$(document).ready(function(){
    function playPause() {
        var myVideo = document.getElementsByTagName('video')[0];
        if (myVideo.paused)
            myVideo.pause();
        else
            myVideo.pause();
    }

    $(".play_video").css({top:$(window).height()/2-270,left:$(window).width()/2-450});

    $(".goto_play_video").click(function(){
        $(".alpha_mask").fadeIn();
        $(".play_video").show();
        playPause();
    });

    $(".play_video .cls_video").click(function(){
        $(".play_video").hide();
        $(".alpha_mask").fadeOut();
        playPause();
    });
});

$(window).resize(function() {
    $(".play_video").css({top:$(window).height()/2-270,left:$(window).width()/2-450});
});

$(".download_button").mouseenter(function(){
    $(".download_button i").css({"animation":"ripple 1.4s ease-out both","width":"300px","height":"300px","margin":"-150px 0 0 -150px"});
})

$(".download_button").mouseleave(function(){
    $(".download_button i").css({"animation":"none","width":"0","height":"0","margin":"none"});
})
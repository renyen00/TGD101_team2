// ----------------------點擊--------------------
// 鳥的種類
$(function () {

    $('.role_bird').click(function(){
        $('.role_show_bird').children('img').attr('src', $(this).children('img').attr('src'));     
    });

});

// 眼鏡
$(function () {

    $('.role_glasses').click(function(){
        $('.role_show_glasses').children('img').attr('src', $(this).children('img').attr('src')).draggable({
            containment: ".role_show_area"});     
    });
    
});

// 帽子
$(function () {

    $('.role_hat').click(function(){
        $('.role_show_hat').children('img').attr('src', $(this).children('img').attr('src')).draggable({
            containment: ".role_show_area"});     
    });
    
});

// 飾品
$(function () {

    $('.role_other').click(function(){
        $('.role_show_other').children('img').attr('src', $(this).children('img').attr('src')).draggable({
            containment: ".role_show_area"});     
    });
    
});


// 大小

    // 眼鏡
    $(function(){
        let glasses = $(".role_show_glasses img");
        // 減
        $(".role_minus_glasses").click(function(){        
            if (glasses.width() > 60){
            glasses.css({width: '-=5px'});
            }
        });
        // 加
        $(".role_plus_glasses").click(function(){
            if (glasses.width() < 120){
            glasses.css({ width: '+=5px'});
            }
        });
    });

    // 帽子
    $(function(){
        let hat = $(".role_show_hat img");
        // 減
            $(".role_minus_hat").click(function(){        
            if (hat.width() > 60){
            hat.css({width: '-=5px'});
            }
        });
        
        // 加
        $(".role_plus_hat").click(function(){
            if (hat.width() < 120){
            hat.css({ width: '+=5px'});
            }
        });
    });

    // 飾品
    $(function(){
        let other = $(".role_show_other img");
        // 減
        $(".role_minus_other").click(function(){        
            if (other.width() > 60){
            other.css({width: '-=5px'});
            }
        });
        // 加
        $(".role_plus_other").click(function(){
            if (other.width() < 120){
            other.css({ width: '+=5px'});
            }
        });
    });




// 重設
$(function () {    
    $('.role_button_reset').click(function(){
        $( ".role_show_bird img" ).attr('src',''),
        $( "#show img" ).attr('src','');
    });

});


// --------------------資料連接----------------------




// --------------------資料連接----------------------
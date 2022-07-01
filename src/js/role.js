// ----------------------點擊/拖曳/縮放--------------------
// 鳥的種類
$(function () {

    $('.role_bird').click(function(){
        $('.role_show_bird').children('img').attr('src', $(this).children('img').attr('src'));     
    });

});

// 眼鏡
$(function () {

    $('.role_glasses').click(function(){
        $('.role_show_glasses').children('img').attr('src', $(this).children('img').attr('src'))
        .resizable({ 
            containment: ".role_show_area",
            maxWidth: 150,
            minWidth: 60,
            maxHeight: 150,
            minHeight: 60 
        }).parent().draggable({
            cursor: "crosshair",
            containment: ".role_show_area",
            stack: "#show img" 
        });
    });

    
});
// 帽子
$(function () {

    $('.role_hat').click(function(){
        $('.role_show_hat').children('img').attr('src', $(this).children('img').attr('src'))
        .resizable({ 
            containment: ".role_show_area",
            maxWidth: 150,
            minWidth: 60,
            maxHeight: 150,
            minHeight: 60 
        }).parent().draggable({
            cursor: "crosshair",
            containment: ".role_show_area",
            stack: "#show img" 
        });

    });
    
});

// // 飾品
$(function () {

    $('.role_other').click(function(){
        $('.role_show_other').children('img').attr('src', $(this).children('img').attr('src'))
        .resizable({ 
            containment: ".role_show_area",
            maxWidth: 150,
            minWidth: 60,
            maxHeight: 150,
            minHeight: 60 
        }).parent().draggable({
            cursor: "crosshair",
            containment: ".role_show_area",
            stack: "#show img" 
        });

    });
    
});

// 重設
$(function () {    
    $('.role_button_reset').click(function(){
        $( ".role_show_bird img" ).attr('src',''),
        $( "#show img" ).attr('src','');
    });

});



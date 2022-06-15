// 鳥的種類
$(function () {

    $('.role_bird').click(function(){
        $('.role_show_bird').children('img').attr('src', $(this).children('img').attr('src'));     
    });

})

// 眼鏡
$(function () {

    $('.role_glasses').click(function(){
        $('.role_show_glasses').children('img').attr('src', $(this).children('img').attr('src')).draggable();     
    });
    
})

// 帽子
$(function () {

    $('.role_hat').click(function(){
        $('.role_show_hat').children('img').attr('src', $(this).children('img').attr('src')).draggable();     
    });
    
})

// 飾品
$(function () {

    $('.role_other').click(function(){
        $('.role_show_other').children('img').attr('src', $(this).children('img').attr('src')).draggable();     
    });
    
})


// 大小
$(function () {
    
    $('.role_minus').click(function(){
        changeSize('small')
    })
    
    $('.role_plus').click(function(){
        changeSize('big')
    })

    function changeSize(size){
        let hatSize = parseInt($('.role_show_hat img').css('width'))
        if(size == 'small'){
            newhatSize = hatSize - 2
        }else{
            newhatSize = hatSize + 2
        }

        $('.role_show_hat img').css('width', newhatSize)
    }
});

$(function () {
    
    $('.role_minus').click(function(){
        changeSize('small')
    })
    
    $('.role_plus').click(function(){
        changeSize('big')
    })

    function changeSize(size){
        let otherSize = parseInt($('.role_show_other img').css('width'))
        if(size == 'small'){
            newotherSize = otherSize - 2
        }else{
            newotherSize = otherSize + 2
        }

        $('.role_show_other img').css('width', newotherSize)
    }
});


// 重設
$(function () {
    
    $('role_button_reset').click(function(){
        
    })

});
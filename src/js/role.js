// ----------------------點擊--------------------
// 鳥的種類
$(function () {

    $('.role_bird').click(function(){
        $('.role_show_bird').children('img').attr('src', $(this).children('img').attr('src'));     
    });

})

// 眼鏡
$(function () {

    $('.role_glasses').click(function(){
        $('.role_show_glasses').children('img').attr('src', $(this).children('img').attr('src')).draggable({
            containment: ".role_show_area"});     
    });
    
})

// 帽子
$(function () {

    $('.role_hat').click(function(){
        $('.role_show_hat').children('img').attr('src', $(this).children('img').attr('src')).draggable({
            containment: ".role_show_area"});     
    });
    
})

// 飾品
$(function () {

    $('.role_other').click(function(){
        $('.role_show_other').children('img').attr('src', $(this).children('img').attr('src')).draggable({
            containment: ".role_show_area"});     
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


// 大小
// $(function () {
    
//     $('.role_minus').click(function(){
//         changeSize('small')
//     })
    
//     $('.role_plus').click(function(){
//         changeSize('big')
//     })

//     function changeSize(size){
//         let otherSize = parseInt($('.role_show_other img').css('width'))
//         if(size == 'small'){
//             newotherSize = otherSize - 2
//         }else{
//             newotherSize = otherSize + 2
//         }

//         $('.role_show_other img').css('width', newotherSize)
//     }
// });


// function doFirst() {
// 	eyesscale = 1; //原始尺吋1
// 	mouthscale = 1; //原始尺吋1
// 	accessoryscale=1;

// 	document.getElementsByClassName('plus')[0].addEventListener('click',plus);
// 	document.getElementsByClassName('minus')[0].addEventListener('click',minus);
// 	document.getElementsByClassName('turn')[0].addEventListener('click',turn);
// 	document.getElementsByClassName('trash')[0].addEventListener('click',trash);
// 	document.getElementsByClassName('plus')[1].addEventListener('click',plus);
// 	document.getElementsByClassName('minus')[1].addEventListener('click',minus);
// 	document.getElementsByClassName('turn')[1].addEventListener('click',turn);
// 	document.getElementsByClassName('trash')[1].addEventListener('click',trash);
// 	document.getElementsByClassName('reset__btn')[0].addEventListener('click',trashall);
// 	document.getElementById('fbclick').addEventListener('click',fbclick);

// 	eyes = document.querySelector('.mownster__eyesposition');
// 	mouth = document.querySelector('.mownster__mouthposition');
// 	accessory= document.querySelector('.mownster__accessoryposition');

// }
//加
// function plus(){
// 	if($('#eyesbutton').is('.selector__choose--choosed')){
// 		eyesscale+=0.25; //先判斷在加
// 		eyes.style.transform = "scale(" + eyesscale +") rotate("+eyesdeg+"deg)";
// 	}
// 	if($('#mouthbutton').is('.selector__choose--choosed')){
// 		mouthscale+=0.25;
// 		mouth.style.transform = "scale(" + mouthscale +") rotate("+mouthdeg+"deg)";
// 	}
// 	if($('#accessorybutton').is('.selector__choose--choosed')){
// 		accessoryscale+=0.25;
// 		accessory.style.transform = "scale(" + accessoryscale +") rotate("+accessorydeg+"deg)";
// 	}
// }
// //減
// function minus(){
// 	if($('#eyesbutton').is('.selector__choose--choosed')){
// 		eyesscale-=0.25; //先判斷在加
// 		eyes.style.transform = "scale(" + eyesscale +") rotate("+eyesdeg+"deg)";
// 	}
// 	if($('#mouthbutton').is('.selector__choose--choosed')){
// 		mouthscale-=0.25;
// 		mouth.style.transform = "scale(" + mouthscale +") rotate("+mouthdeg+"deg)";
// 	}
// 	if($('#accessorybutton').is('.selector__choose--choosed')){
// 		accessoryscale-=0.25;
// 		accessory.style.transform = "scale(" + accessoryscale +") rotate("+accessorydeg+"deg)";
// 	}
// }


// 重設
$(function () {
    
    $('role_button_reset').click(function(){
        
    })

});


// -----------問號--------------
$(function () {
$(".role_question_yellow").hover(function () {
    $(".role_question_yellow img").attr("src", "./images/xiaojiang/QH1.svg");
})
});
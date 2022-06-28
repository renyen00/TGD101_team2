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

function doFirst() {
     
	let glassesscale = 1; //原始尺吋1
    let hatscale = 1; //原始尺吋1
	let otherscale =1; //原始尺吋1

	document.getElementsByClassName('role_plus').addEventListener('click',plus);
	document.getElementsByClassName('role_minus').addEventListener('click',minus);
	glassess = document.querySelector('.role_show_glasses');
	hat = document.querySelector('.role_show_hat');
	other = document.querySelector('.role_show_other');
}
//加
function plus(){
	if($('.role_accessory_glasses').is('li')){
		glassesscale+=0.25; //先判斷在加
		glassess.style.transform = "scale(" + glassesscale +")";
	}
	if($('.role_accessory_hat').is('li')){
		hatscale+=0.25;
		hat.style.transform = "scale(" + hatscale +")";
	}
	if($('.role_accessory_other').is('li')){
		otherscale+=0.25;
		other.style.transform = "scale(" + otherscale +")";
	}
}
// //減
function minus(){
	if($('.role_accessory_glasses').is('li')){
		glassesscale-=0.25; //先判斷在減
		glassess.style.transform = "scale(" + glassesscale +")";
	}
	if($('.role_accessory_hat').is('li')){
		hatscale-=0.25;
		hat.style.transform = "scale(" + hatscale +")";
	}
	if($('.role_accessory_other').is('li')){
		otherscale-=0.25;
		other.style.transform = "scale(" + otherscale +")";
	}
}

  window.addEventListener('load', doFirst);

// 重設
// $(function () {    
//     $('role_button_reset').click(function(){
        
//     })

// });


  // --------------------資料連接----------------------

// 切換頁面
$(function () {

    $('.about_main').hide();
    $('.about_member').click(function(){
    $(this).children(".about_main").show();
    $('.about_member').not(this).children(".about_main").hide();
    })     

});

// 組員燈箱
$(function(){
 $('.about_a_introduce1').click(function(){
    $('.about_mask_yelian').css('display', 'block');
  })

  $('.about_mask_yelian').click(function(e){
    $(this).removeAttr('style');
    console.log(e.eventPhase);
  })

  $('.about_popup_yelian').click(function(e){
    e.stopPropagation();
    console.log(e.eventPhase);
  })
})       

$(function(){
  $('.about_a_introduce2').click(function(){
     $('.about_mask_berlin').css('display', 'block');
   })
 
   $('.about_mask_berlin').click(function(e){
     $(this).removeAttr('style');
     console.log(e.eventPhase);
   })
 
   $('.about_popup_berlin').click(function(e){
     e.stopPropagation();
     console.log(e.eventPhase);
   })
 })  

 $(function(){
  $('.about_a_introduce3').click(function(){
     $('.about_mask_betty').css('display', 'block');
   })
 
   $('.about_mask_betty').click(function(e){
     $(this).removeAttr('style');
     console.log(e.eventPhase);
   })
 
   $('.about_popup_betty').click(function(e){
     e.stopPropagation();
     console.log(e.eventPhase);
   })
 })  

 $(function(){
  $('.about_a_introduce4').click(function(){
     $('.about_mask_owen').css('display', 'block');
   })
 
   $('.about_mask_owen').click(function(e){
     $(this).removeAttr('style');
     console.log(e.eventPhase);
   })
 
   $('.about_popup_owen').click(function(e){
     e.stopPropagation();
     console.log(e.eventPhase);
   })
 })   

 $(function(){
  $('.about_a_introduce5').click(function(){
     $('.about_mask_jiang').css('display', 'block');
   })
 
   $('.about_mask_jiang').click(function(e){
     $(this).removeAttr('style');
     console.log(e.eventPhase);
   })
 
   $('.about_popup_jiang').click(function(e){
     e.stopPropagation();
     console.log(e.eventPhase);
   })
 })   

 $(function(){
  $('.about_a_introduce6').click(function(){
     $('.about_mask_renyen').css('display', 'block');
   })
 
   $('.about_mask_renyen').click(function(e){
     $(this).removeAttr('style');
     console.log(e.eventPhase);
   })
 
   $('.about_popup_renyen').click(function(e){
     e.stopPropagation();
     console.log(e.eventPhase);
   })
 }) 
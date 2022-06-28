// 眼鏡
$(function(){
$('#role_glasses_banner1').css('top', '-360px');
$('#role_glasses_banner2').css('top', '0px');
$('#role_glasses_banner3').css('top', '360px');

// 上一頁
$('#role_glasses_prev').click(function(){
    $('#role_glasses_prev').attr('disabled', true);
    for(let i=0; i<$('.role_accessory_glasses ul').length; i++){
        $($('.role_accessory_glasses ul')[i]).css('top', (parseInt($($('.role_accessory_glasses ul')[i]).css('top'))-90) + 'px');
        if($($('.role_accessory_glasses ul')[i]).css('top') == '-630px'){
            $($('.role_accessory_glasses ul')[i]).css('display','none');
            setTimeout(function(){
                $($('.role_accessory_glasses ul')[i]).css('top','270px');
                $($('.role_accessory_glasses ul')[i]).css('display','block');
            }, 700)
        }
    }

    setTimeout(function(){
        $('#role_glasses_prev').attr('disabled', false);
    }, 700)
});

// 下一頁
$('#role_glasses_next').click(function(){
    $('#role_glasses_next').attr('disabled', true);
    for(let i=0; i<$('.role_accessory_glasses ul').length; i++){
        $($('.role_accessory_glasses ul')[i]).css('top', (parseInt($($('.role_accessory_glasses ul')[i]).css('top'))+90) + 'px');
        if($($('.role_accessory_glasses ul')[i]).css('top') == '630px'){
            $($('.role_accessory_glasses ul')[i]).css('display','none');
            setTimeout(function(){
                $($('.role_accessory_glasses ul')[i]).css('top','-270px');
                $($('.role_accessory_glasses ul')[i]).css('display','block');
            }, 700)
        }
    }

    setTimeout(function(){
        $('#role_glasses_next').attr('disabled', false);
    }, 700)
});

});
// 帽子
$(function(){
  $('#role_hat_banner1').css('top', '-360px');
  $('#role_hat_banner2').css('top', '0px');
  $('#role_hat_banner3').css('top', '360px');
  
  // 上一頁
  $('#role_hat_prev').click(function(){
      $('#role_hat_prev').attr('disabled', true);
      for(let i=0; i<$('.role_accessory_hat ul').length; i++){
          $($('.role_accessory_hat ul')[i]).css('top', (parseInt($($('.role_accessory_hat ul')[i]).css('top'))-90) + 'px');
          if($($('.role_accessory_hat ul')[i]).css('top') == '-630px'){
              $($('.role_accessory_hat ul')[i]).css('display','none');
              setTimeout(function(){
                  $($('.role_accessory_hat ul')[i]).css('top','270px');
                  $($('.role_accessory_hat ul')[i]).css('display','block');
              }, 700)
          }
      }
  
      setTimeout(function(){
          $('#role_hat_prev').attr('disabled', false);
      }, 700)
  });
  
  // 下一頁
  $('#role_hat_next').click(function(){
      $('#role_hat_next').attr('disabled', true);
      for(let i=0; i<$('.role_accessory_hat ul').length; i++){
          $($('.role_accessory_hat ul')[i]).css('top', (parseInt($($('.role_accessory_hat ul')[i]).css('top'))+90) + 'px');
          if($($('.role_accessory_hat ul')[i]).css('top') == '630px'){
              $($('.role_accessory_hat ul')[i]).css('display','none');
              setTimeout(function(){
                  $($('.role_accessory_hat ul')[i]).css('top','-270px');
                  $($('.role_accessory_hat ul')[i]).css('display','block');
              }, 700)
          }
      }
  
      setTimeout(function(){
          $('#role_hat_next').attr('disabled', false);
      }, 700)
  });
  
  });

// 飾品
$(function(){
  $('#role_other_banner1').css('top', '-360px');
  $('#role_other_banner2').css('top', '0px');
  $('#role_other_banner3').css('top', '360px');
  
  // 上一頁
  $('#role_other_prev').click(function(){
      $('#role_other_prev').attr('disabled', true);
      for(let i=0; i<$('.role_accessory_other ul').length; i++){
          $($('.role_accessory_other ul')[i]).css('top', (parseInt($($('.role_accessory_other ul')[i]).css('top'))-90) + 'px');
          if($($('.role_accessory_other ul')[i]).css('top') == '-630px'){
              $($('.role_accessory_other ul')[i]).css('display','none');
              setTimeout(function(){
                  $($('.role_accessory_other ul')[i]).css('top','270px');
                  $($('.role_accessory_other ul')[i]).css('display','block');
              }, 700)
          }
      }
  
      setTimeout(function(){
          $('#role_other_prev').attr('disabled', false);
      }, 700)
  });
  
  // 下一頁
  $('#role_other_next').click(function(){
      $('#role_other_next').attr('disabled', true);
      for(let i=0; i<$('.role_accessory_other ul').length; i++){
          $($('.role_accessory_other ul')[i]).css('top', (parseInt($($('.role_accessory_other ul')[i]).css('top'))+90) + 'px');
          if($($('.role_accessory_other ul')[i]).css('top') == '630px'){
              $($('.role_accessory_other ul')[i]).css('display','none');
              setTimeout(function(){
                  $($('.role_accessory_other ul')[i]).css('top','-270px');
                  $($('.role_accessory_other ul')[i]).css('display','block');
              }, 700)
          }
      }
  
      setTimeout(function(){
          $('#role_other_next').attr('disabled', false);
      }, 700)
  });
  
  });
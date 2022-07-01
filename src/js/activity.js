gsap.registerPlugin(ScrollTrigger);

// 藍色鳥鳥
gsap.fromTo(".activity_img_bluebird",{y:-10} ,{           
    y:250,
    duration: 5,
    ease: "none",
    scrollTrigger: {
        trigger: ".activity_img_bluebird",            
        start: "center bottom", 
        end:"+=500",   
        scrub:true,    
        // markers: true,
       
    }       
})
// 揪團去
gsap.to(".activity_img_dialog" ,{           
    opacity: 1,
    duration: 7,
    ease: "none",
    scrollTrigger: {
        trigger: ".activity_img_dialog",     
        start: "center bottom", 
        end:"+=400",   
        scrub:true,    
        // markers: true,
    }       
})

// 按鈕
$(".activity_button_more img").hide();
$(".activity_button_more a").mouseover(function(){
    $(".activity_button_more img").show();
  });
$(".activity_button_more a").mouseout(function(){
    $(".activity_button_more img").hide();
});

$(".activity_button_more2 img").hide();
$(".activity_button_more2 a").mouseover(function(){
    $(".activity_button_more2 img").show();
  });
$(".activity_button_more2 a").mouseout(function(){
    $(".activity_button_more2 img").hide();
});







// -----------------RWD---------------
// ScrollTrigger.matchMedia({
//     // 跟設定css 一樣  如果畫面不小於 575.98px 執行
//     "(min-width:575.98px)": () => { 執行內容 },
//   });
// -----------------RWD---------------


    // --------------------資料連接----------------------
    new Vue({
        el: '#activity_info',
    
        data: {     // 變數放這裡！              
            activity_list:[],
        },
        methods: {
            member() {
                $.ajax({
                    method: 'POST',
                    url: '.php/login.php',
                    dataType: 'text',
                    data: {},
                    success: function(res) {
                        if(res == "") {
                            alert('請先登入');
                            location.href = './login.html';
                        }
                        else {
                            $.ajax({
                                method: 'POST',
                                url: '',
                                data: {
                                    name: parseInt($('#name').val()),
                                    ITUNERARYID: localStorage.getItem('getID'),
                                },
                                dataType: 'text',
                                success: function(res) {
                                    if(res == ""){
                                        alert('');
                                    } else {
                                        alert("");
                                    }                        
                                },
                                error: function (exception) {
                                    alert("數據載入失敗: " + exception.status);
                                },
                            });
                        }
                    },

                });
            }
        },
        computed: {
    
        },
        watch: {},
        created() {
            const url = './php/activity.php';
                fetch(url)
                    .then(response => response.json())
                    // .then(text => this.console.log(text));
                    .then(text => {
                        this.activity_list = text;
                        })
        },
        mounted() {},
        updated() {},
    
    })
    // --------------------資料連接----------------------
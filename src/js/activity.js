let VM = new Vue({
        el: '#activity_info',
    
        data: {     // 變數放這裡！
            offical:[],              
            activity:[],
        },
        methods: {
        },
        computed: {
    
        },
        watch: {},

        created() {
                fetch('./php/offical.php')
                    .then(response => response.json())
                    .then((text) =>{
                        this.offical = text;

                    });
            

                fetch('./php/activity.php')
                    .then(response => response.json())
                    .then((text) =>{
                        this.activity = text;
                    });
           
            
            
        },
        mounted() {



        },
        updated() {

            // 按鈕-----------------------------------------
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

            // 彈跳視窗-----------------------------------
            $('.avatar1').click(function(){
            $('.mask_user1').css('display', 'block');
            });   
            $('.mask_user1').click(function(e){
                $(this).removeAttr('style');
            });    
            $('.popup_user1').click(function(e){
                e.stopPropagation();
            });

            $('.avatar2').click(function(){
            $('.mask_user2').css('display', 'block');
            });   
            $('.mask_user2').click(function(e){
                $(this).removeAttr('style');
            });    
            $('.popup_user2').click(function(e){
                e.stopPropagation();
            });
    



                // GSAP--------------------------
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
                // -----------------RWD---------------
                ScrollTrigger.matchMedia({
                    // 跟設定css 一樣  如果畫面不小於 575.98px 執行
                    "(min-width:575.98px)": () => { 
                        // 藍色鳥鳥
                        gsap.fromTo(".activity_img_bluebird",{           
                            duration: 5,
                            ease: "none",
                            scrollTrigger: {
                                trigger: ".activity_img_bluebird",            
                                start: "center bottom",   
                                scrub:true,    
                                // markers: true,       
                            }       
                        })
                        // 揪團去
                        gsap.to(".activity_img_dialog" ,{           
                            duration: 7,
                            opacity: 1,
                            ease: "none",
                            scrollTrigger: {
                                trigger: ".activity_img_dialog",     
                                start: "center bottom",    
                                scrub:true,    
                                // markers: true,
                            }       
                        })
                     },
                  });
                // -----------------RWD---------------
                    
        },
    
    });

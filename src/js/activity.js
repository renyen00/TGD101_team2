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
        activity_imgs:[],
        title:'',
        place:'',
        time:'',
        timeEnd:'',
        people:'',

    },
    methods: {
        
    },
    computed: {

    },
    watch: {},
    created() {
        const url = './php/activity.php';
            fetch(url)
                .then(response => response.json())
                // .then(text => this.console.log(text));
                .then(data => {
                    this.activity_imgs = (data[0]['PICTURE']);
                    this.title = data[0]['TITLE'];
                    this.place = data[0]['PLACE_ID'];
                    this.time = data[0]['EVENTDATE'];
                    this.timeEnd = data[0][''];
                    this.people = data[0]['MAX'];

                    this.activity_list = data;
                    })
    },
    mounted() {},
    updated() {},

})
// --------------------資料連接----------------------
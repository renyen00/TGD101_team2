gsap.registerPlugin(ScrollTrigger);
// console.log(123);
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

                .then(text => this.activity_list = text);
    },
    mounted() {},
    updated() {},

})
// --------------------資料連接----------------------
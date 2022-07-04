
window.addEventListener('load',function(){
    // let productAdd = JSON.parse(localStorage.getItem("addProduct")); // 從 localStorage 抓出資料, 並轉成 JS 能懂得
    let vm = new Vue({
        el: '#productInformation',
        
        data: {
            render_list:[],
            productinfo:[],
            type1:[],
            type2:[],
            type3:[],
            countent:'product1',
            quantity: 0,
        },
        methods: {
            changeImg(e){
                // console.log($(e.target.closest('div')).find('.productPic'));
                // console.log(e.target.dataset.img);
                $(e.target.closest('div')).find('.productPic').attr("src", e.target.dataset.img)
            },

            addToCart2(e){
                // e.preventDefault();
                
                let id = e.target.dataset.renderid;
                // console.log(id);


                if(localStorage.getItem("productAdd")){ // 如果 tasks 存在, 就執行...
                    let temp = JSON.parse(localStorage.getItem('productAdd'));
                    temp.push(this.render_list[id]);
                    // console.log(temp);
                    localStorage.setItem('productAdd', JSON.stringify(temp));

                }else{ // 否則執行...
                    let temp = [this.render_list[id]]
                    localStorage.setItem('productAdd', JSON.stringify(temp));

                }



                
                // let productAdd = JSON.parse(localStorage.getItem("addProduct")); // 從 localStorage 抓出資料, 並轉成 JS 能懂得
                // console.log(productAdd); // 印出抓到的訊息
                
                // localStorage.setItem("addProduct",JSON.stringify(productAdd)); // 將資料更新再轉為 JSON 可讀懂得塞回 localStorage
                
                // // let productQuantity = JSON.parse(addProduct);
                this.quantity ++;
            },
        },
        computed: {},
        watch: {
            quantity(newValue){
                document.getElementById("shoppingCart_quantity").innerText = newValue;
            }
        },
        created() {
            const url = './php/store.php';
            fetch(url)
                .then(resp => resp.json())
                .then(text => {
                    this.render_list = text;
                    this.productinfo = text;
                    for(let i=0; i<text.length; i++){
                        // console.log(prod);
                        if(text[i][2] == 1){
                            this.type1.push(text[i]);
                        }else if(text[i][2] == 2){
                            this.type2.push(text[i]);
                        }else if(text[i][2] == 3){
                            this.type3.push(text[i]);
                        }
                    }
                })
                // .then(text => console.log(text))
        },
        mounted() {
            // if(localStorage.getItem('addProduct')){
            //     let shopping_list = JSON.parse(localStorage.getItem('addProduct'));
            //     // console.log(shopping_list);
            //     this.quantity = shopping_list.length;
            //     // console.log(0);
            // }else{
            //     // console.log(localStorage.getItem('addProduct'));
            //     document.getElementById("shoppingCart_quantity").innerText = 0;
            //     // this.quantity = 0;
            //     // console.log(0);
            // }
        },
        updated() {
            $(".store_moreBtn").click(function(){
                $(".store_main_product").css("height", "auto")
                $(".store_section_moreBtn").css("display", "none")
            });
            // document.getElementById("shoppingCart_quantity").innerText = this.quantity;
        },
    })

    
    $("#store_filter_all").click(function(){
        vm.render_list = vm.productinfo;

        if(vm.productinfo.length <= 6){
            $(".store_section_moreBtn").css("display", "none")
        }else{
            $(".store_section_moreBtn").removeAttr("style");
        }

        $("#store_section_filterBtn .store_btn_filter").not(this).css("background", "url('https://api.iconify.design/bx/cloud.svg?color=%23f2bf61&width=120&height=120') no-repeat center center / contain");
        $("#store_section_filterBtn .store_btn_filter .iconify").not(this).css("display", "none");
        $("#store_section_filterBtn .store_btn_filter h4").not(this).css("color", "#F2BF61");
        
        $(this).css("background", "url('https://api.iconify.design/bxs/cloud.svg?color=%23f2bf61&width=120&height=120') no-repeat center center / contain");
        $("#store_filter_all>h4").css("color", "#FFFFFF");
        $("#store_icon_birdBold").css("display", "block");
    });
    
    $("#store_filter_1").click(function(){
        vm.render_list = vm.type1;

        if(vm.type1.length <= 6){
            $(".store_section_moreBtn").css("display", "none")
        }else{
            $(".store_section_moreBtn").removeAttr("style");
        }

        $("#store_section_filterBtn .store_btn_filter").not(this).css("background", "url('https://api.iconify.design/bx/cloud.svg?color=%23f2bf61&width=120&height=120') no-repeat center center / contain");
        $("#store_section_filterBtn .store_btn_filter .iconify").not(this).css("display", "none");
        $("#store_section_filterBtn .store_btn_filter h4").not(this).css("color", "#F2BF61");
        
        $(this).css("background", "url('https://api.iconify.design/bxs/cloud.svg?color=%23f2bf61&width=120&height=120') no-repeat center center / contain");
        $("#store_filter_1>h4").css("color", "#FFFFFF");
        $("#store_icon_birdT1").css("display", "block");

        $(".store_main_product").removeAttr("style");
    })
    
    $("#store_filter_2").click(function(){
        vm.render_list = vm.type2;

        if(vm.type2.length <= 6){
            $(".store_section_moreBtn").css("display", "none")
        }else{
            $(".store_section_moreBtn").removeAttr("style");
        }

        $("#store_section_filterBtn .store_btn_filter").not(this).css("background", "url('https://api.iconify.design/bx/cloud.svg?color=%23f2bf61&width=120&height=120') no-repeat center center / contain");
        $("#store_section_filterBtn .store_btn_filter .iconify").not(this).css("display", "none");
        $("#store_section_filterBtn .store_btn_filter h4").not(this).css("color", "#F2BF61");
        
        $(this).css("background", "url('https://api.iconify.design/bxs/cloud.svg?color=%23f2bf61&width=120&height=120') no-repeat center center / contain");
        $("#store_filter_2>h4").css("color", "#FFFFFF");
        $("#store_icon_birdT2").css("display", "block");

        $(".store_main_product").removeAttr("style");
    })
    
    $("#store_filter_3").click(function(){
        vm.render_list = vm.type3;

        if(vm.type3.length <= 6){
            $(".store_section_moreBtn").css("display", "none")
        }else{
            $(".store_section_moreBtn").removeAttr("style");
        }

        $("#store_section_filterBtn .store_btn_filter").not(this).css("background", "url('https://api.iconify.design/bx/cloud.svg?color=%23f2bf61&width=120&height=120') no-repeat center center / contain");
        $("#store_section_filterBtn .store_btn_filter .iconify").not(this).css("display", "none");
        $("#store_section_filterBtn .store_btn_filter h4").not(this).css("color", "#F2BF61");
        
        $(this).css("background", "url('https://api.iconify.design/bxs/cloud.svg?color=%23f2bf61&width=120&height=120') no-repeat center center / contain");
        $("#store_filter_3>h4").css("color", "#FFFFFF");
        $("#store_icon_birdT3").css("display", "block");

        $(".store_main_product").removeAttr("style");

    });

    // $().click(function(){

    // })
   
    // document.getElementById("store_filter_all").addEventListener("click", function(){
    //     vm.render_list = vm.productinfo;
    //     // console.log(vm.productinfo);
    // })

    // document.getElementById("store_filter_1").addEventListener("click", function(){
    //     vm.render_list = vm.type1;
    // })

    // document.getElementById("store_filter_2").addEventListener("click", function(){
    //     vm.render_list = vm.type2;
    // })

    // document.getElementById("store_filter_3").addEventListener("click", function(){
    //     vm.render_list = vm.type3;
    // })
})
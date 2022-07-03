window.addEventListener("load", function(){
    new Vue({
        el: '#payment_section_v',

        data: {     // 變數放這裡！           
            memberInformation:[],
        },
        methods: {
            
        },
        computed: {},
        watch: {},
        created() {
            const url = './php/payment.php';
            fetch(url)
                .then(response => response.json())
                .then(text => this.memberInformation = text);
        },
        mounted() {},
        updated() {},

    })
    // $(".payment_ckeckbox_same").click(function(){

    // })
    $("#twzipcode").twzipcode();
    $("#twzipcode2").twzipcode();
    
    $(".goPay").click(function(){
        setTimeout(() => {
            $(".buyerInfoMethod").css("display", "block");
            $("#shoppingCart_icon_trash").css("display", "none");

            $(".stepTwoLine").css("display", "block");
            $(".stepOneLine").css("display", "none");

            $("#shopingList_icon_greyBird").css("display", "none");
            $("#payment_icon_greyBird").css("display", "block");

            $(".shoppingCart_optionBtn").css("display", "none");
            $(".payment_optionBtn").css("display", "block");
            $(".shoppingCart_section_promoH").css("display", "none");
        }, 500);
    })

    $(".previous").click(function(){
        $(".buyerInfoMethod").css("display", "none");
        $("#shoppingCart_icon_trash").css("display", "block");

        $(".stepTwoLine").css("display", "none");
        $(".stepOneLine").css("display", "block");

        $("#shopingList_icon_greyBird").css("display", "block");
        $("#payment_icon_greyBird").css("display", "none");

        $(".shoppingCart_optionBtn").css("display", "block");
        $(".payment_optionBtn").css("display", "none");
        $(".shoppingCart_section_promoH").css("display", "block");
    })
})


$("#payment_comfirm").click(function(){
    $("#payment_submit")[0].click();
    console.log("test");
})
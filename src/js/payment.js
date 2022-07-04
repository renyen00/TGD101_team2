window.addEventListener("load", function(){
    new Vue({
        el: '#payment_section_v',

        data: {     // 變數放這裡！           
            memberInformation:[],
            product_list:[],
            price: 0,
            buyerNm: "",
            buyerGd: "",
            buyerEm: "",
            buyerAdd: "",
            buyerCell: "",
            buyerPhone: "",
            receiverNm: "",
            receiverGd: "",
            receiverEm: "",
            receiverAdd: "",
            receiverCell: "",
            receiverPhone: "",
        },
        methods: {
            goToTrash(index){
                // console.log(index);
                let temp1 = JSON.parse(localStorage.getItem('productAdd'));
                let temp3 = [];
                for(let i = 0; i < temp1.length; i++){
                    if(temp1[i][5] != this.product_list[index][5]){
                        temp3.push(temp1[i]);
                    }
                };
                localStorage.setItem('productAdd', JSON.stringify(temp3));
                this.product_list.splice(index, 1);
                
            },

            sameAsBuyer(e){
                // console.log(e.target.checked);
                if(e.target.checked == 1){
                    this.receiverNm = this.buyerNm;
                    this.receiverGd = this.buyerGd;
                    this.receiverEm = this.buyerEm;
                    this.receiverAdd = this.buyerAdd;
                    this.receiverCell = this.buyerCell;
                    this.receiverPhone = this.buyerPhone;
                }else{
                    this.receiverNm = "";
                    this.receiverGd = "";
                    this.receiverEm = "";
                    this.receiverAdd = "";
                    this.receiverCell = "";
                    this.receiverPhone = "";
                }
            }
        },
        computed: {},
        watch: {},
        created() {
            const url = './php/payment.php';
            fetch(url)
                .then(response => response.json())
                .then(text => this.memberInformation = text);
        },
        mounted() {
            // this.product_list = JSON.parse(localStorage.getItem('productAdd'));
            let temp1 = JSON.parse(localStorage.getItem('productAdd'));
            for(let i = 0; i < temp1.length; i++){
                this.price += parseInt(temp1[i][6])
            };

            let process = true;

            while(process){
                let first_item = temp1.shift();
                let temp2 = [];
                let index_item = [];
                let count = 1;
                
                for(let i=0; i<temp1.length; i++){
                    if(first_item[5] == temp1[i][5]){
                        index_item.push(i);
                        count += 1;
                    }else{
                        temp2.push(temp1[i]);
                    }
                }

                first_item.push(count);

                temp1 = temp2;

                this.product_list.push(first_item);
                if(temp1.length == 0){
                    process = false;
                }
            }

        },
        updated() {

            $(".goPay").click(function(e){
                e.preventDefault();
                setTimeout(() => {
                    $(".buyerInfoMethod").css("display", "block");
                    $(".shoppingCart_icon_trash").css("display", "none");
        
                    $(".stepTwoLine").css("display", "block");
                    $(".stepOneLine").css("display", "none");
        
                    $("#shopingList_icon_greyBird").css("display", "none");
                    $("#payment_icon_greyBird").css("display", "block");
        
                    $(".shoppingCart_optionBtn").css("display", "none");
                    $(".payment_optionBtn").css("display", "block");
                    $(".shoppingCart_section_promoH").css("display", "none");
                }, 500);
            }),

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
        },
        

    })
    // $(".payment_ckeckbox_same").click(function(){

    // })
    $("#twzipcode").twzipcode();
    $("#twzipcode2").twzipcode();
    
})


$("#payment_comfirm").click(function(){
    $("#payment_submit")[0].click();
    console.log("test");
})
window.addEventListener("load", function(){
    new Vue({
        el: '#payment_section_v',

        data: {     // 變數放這裡！           
            memberInformation:[],
        },
        methods: {},
        computed: {},
        watch: {},
        created() {
            const url = './php/payment.php';
            fetch(url)
                .then(response => response.json())
                .then(text => this.employee_list = text);
        },
        mounted() {},
        updated() {},

    })
})

$("#payment_comfirm").click(function(){
    $("#payment_submit")[0].click();
    console.log("test");
})
new Vue({
    el: '#oc_orderInfo',

    data: {
        orderInfo:[],
        
    },
    methods: {},
    computed: {
        deliveryTime(){
            let result = new Date(this.orderInfo[0][0]);
            result.setDate(result.getDate()+14);
            let month = result.getMonth()+1;
            if(month < 10){
                // console.log('test');
                month = '0'+month;
            }
            return result.getFullYear()+'-'+month+'-'+result.getDate();
        },
    },
    watch: {},
    created() {
        const url = './php/orderCompleted.php';
        fetch(url)
            .then(resp => resp.json())
            .then(text => this.orderInfo = text)
            // .then(text => console.log(text))
    },
    mounted() {},
    updated() {},
})
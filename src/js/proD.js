new Vue({
    el:'#proD',
    data:{
        count:0,
    },
    methods:{
        minusOne() {
            this.count--;
            count = (count < 1) ? 1 : amountShow
        },
        addOne() {
            amountShow++;
            amountShow = (amountShow > 9) ? 9 : amountShow
        },
    },
    // mounted() {
    //     const url = ``;
    //     fetch(url,{})
    //     .then((response)=>{
    //         return response.json();
    //     })
    //     .then((proDjson)=>{
    //         this.product = proDjson
    //     })
    // },
 
})
new Vue({
    el:'#proD',
    data:{
        count:1,
    },
    methods:{
        minusOne() {
            if(this.count > 1){
                this.count--
            }
        },
        addOne() {
            if(this.count < 9){
                this.count++
            }

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
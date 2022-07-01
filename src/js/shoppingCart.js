window.addEventListener("load", function(){
    
    let sc = new Vue({
        el:"#shoppingCart_V",
        data:{
            shoppingCart: [],
        },
        methods: {},
        computed: {},
        watch: {},
        created() {
            const url = './php/shoppingCart.php';
            fetch(url)
                .then(response => response.json())
                .then(text => this.employee_list = text);
        },
        mounted() {
            let shopping_list = JSON.parse(localStorage.getItem('addProduct'));
            let shopping_test = shopping_list[0];
            // console.log(shopping_test.split(',')[5]);
            // let process = true;

            // let shopping_prod_list = [];
            
            // while(process){
            //     // console.log(shopping_list);
            //     let temp = shopping_list.shift();
            //     let number = 1;
            //     let splice_item = [];
            //     temp = temp.split(',');

            //     console.log(temp[5]);

            //     console.log('----');

            //     for(let i=0; i<shopping_list.length; i++){
            //         let item = shopping_list[i].split(',');
            //         console.log(item[5]);
            //         if(item[5] == temp[5]){
            //             number++;
            //             splice_item.push(i);
            //             console.log(i);
            //         }
            //     }

            //     console.log('----');
            //     console.log(number);

            //     console.log('next');

            //     // console.log(splice_item);

            //     temp.push(number);
            //     shopping_prod_list.push(temp);

            //     for(let i=0; i<splice_item.length; i++){
            //         shopping_list.splice(splice_item[i],1);
            //     }

            //     if(shopping_list.length == 0){
            //         process = false;
            //     }
            // }

            // console.log(shopping_prod_list);
        },
        updated() {},
    })
})
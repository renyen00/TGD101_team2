new Vue({
    el: '#attraction_info',

    data: {     // 變數放這裡！           
        attraction_list:[],
    },
    methods: {},
    computed: {},
    watch: {},
    created() {
        const url = './php/attraction.php';
            fetch(url)
                .then(response => response.json())
                // .then(text => this.console.log(text));

                .then(text => this.attraction_list = text);
    },
    mounted() {},
    updated() {},

})
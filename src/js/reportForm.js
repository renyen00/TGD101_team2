new Vue({
    el: '#test',

    data: {     // 變數放這裡！           
        reportform_list:[],
    },
    methods: {},
    computed: {},
    watch: {},
    created() {
        const url = './php/reportForm.php';
            fetch(url)
                .then(response => response.json())
                // .then(text => console.log(text))

                .then(text => this.reportform_list = text);
    },
    mounted() {},
    updated() {},

})
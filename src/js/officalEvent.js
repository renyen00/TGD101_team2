let search_obj = new URLSearchParams(location.search);
let prod_num = search_obj.get("officalid");


let VM = new Vue({
    el: '#offical_info',

    data: {     // 變數放這裡！
        offical_info:[],
        PICTURE: '',
        TITLE: '',
        PLACE: '',
        EVENTDATE: '',
        STARTTIME: '',
        ENDTIME: '',
        TYPE: '',
        COST: '',
        MAX: '',
        STOPTIME: '',
        CONTENT: '',           
    },
    methods: {
    },
    computed: {

    },
    watch: {},

    created() {

                const url = './php/offical.php';
                fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    // activityId: this.activity_id,
                })
                })
                .then(response => response.json())
                // .then((text) =>{
                //     this.offical = text;
                // })
                .then((data) =>{
                    this.PICTURE = data[0]['PICTURE'];
                    this.TITLE = data[0]['TITLE'];
                    this.PLACE = data[0]['NAME'];
                    this.EVENTDATE = data[0]['EVENTDATE'];

                    this.COST = data[0]['COST'];
                    this.MAX = data[0]['MAX'];
                    this.STARTTIME = data[0]['STARTTIME'];
                    this.STOPTIME = data[0]['STOPTIME'];
                    this.CONTENT = data[0]['CONTENT'];
                    this.offical_info = data;
                });
        
    },
    updated() {
        
    }
        
});

let VM = new Vue({
    el: '#offical_info',

    data: {     // 變數放這裡！
        officalid: 0,
        offical_info:[],
        PICTURE: '',
        TITLE: '',
        PLACE: '',
        EVENTDATE: '',
        STARTTIME: '',
        ENDTIME: '',
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
                
                let search_obj = new URLSearchParams(location.search);
                this.officalid = search_obj.get("officalid");

                const url = './php/offical.php';
                fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                })
                })
                .then(response => response.json())

                .then((data) =>{
                    this.PICTURE = data[this.officalid]['PICTURE'];
                    this.TITLE = data[this.officalid]['TITLE'];
                    this.PLACE = data[this.officalid]['NAME'];
                    this.EVENTDATE = data[this.officalid]['EVENTDATE'];
                    this.COST = data[this.officalid]['COST'];
                    this.MAX = data[this.officalid]['MAX'];
                    this.STARTTIME = data[this.officalid]['STARTTIME'];
                    this.STOPTIME = data[this.officalid]['STOPTIME'];
                    this.CONTENT = data[this.officalid]['CONTENT'];
                    this.offical_info = data;
                });
        
    },
    updated() {

    }
        
});
$(document).ready(function(){

    Vue.component('officeEvent', {
        props:['init', 'showoffice'],
        methods:{
            personhref(id){
                return "./officalEvent.html?activityid=" + id;
            }
        },
        template:
        `<ul class="activityList_ul_list" v-if="showoffice">
            <li v-for="event in init">
                <img :src=event.PICTURE>
                <article class="activityList_span">
                    <span>活動主題： {{event.TITLE}}</span>
                    <span>活動地點： {{event.NAME}}</span>
                    <span>活動日期： {{event.EVENTDATE}}</span>
                    <span>報名截止： {{event.STOPTIME}}</span>
                    <span>人數限制： {{event.MAX}} 人</span>
                </article>
                <article class="activityList_a_beside">
                    <a :href="personhref(event.ID)" class="btnXL_b--s">詳細資訊</a>
                    <a  href="" class="btnXL_y--s">我要報名</a>
                </article>                   
            </li>
        </ul>`,
    });

    Vue.component('createEvent', {
        props:['init', 'showcreate'],
        methods:{
            personhref(id){
                return "./createEventDetail.html?activityid=" + id;
            }
        },
        template:
        `<ul class="activityList_ul_list" v-if="showcreate">
            <li v-for="event in init">
                <img :src=event.PICTURE>
                <article class="activityList_span">
                    <span>活動主題： {{event.TITLE}}</span>
                    <span>活動地點： {{event.NAME}}</span>
                    <span>活動日期： {{event.EVENTDATE}}</span>
                    <span>報名截止： {{event.STOPTIME}}</span>
                    <span>人數限制： {{event.MAX}} 人</span>
                </article>
                <article class="activityList_a_beside">
                    <a :href="personhref(event.ID)" class="btnXL_b--s">詳細資訊</a>
                    <a  href="" class="btnXL_y--s">我要報名</a>
                </article>                   
            </li>
        </ul>`,
    });

    let vm = new Vue({
        el: '#activityList',

        data: {     // 變數放這裡！
            officialList: [],           
            createList: [],
            showcreate: false,
            showoffice: true,
        },
        methods: {
            showCreate(e){
                this.showcreate = true;
                this.showoffice = false;
            },
            showOffice(){
                this.showcreate = false;
                this.showoffice = true;
            }
        },
        computed: {
            
        },
        watch: {
            
        },
        
        created() {
            const url = './php/activityList.php';

                fetch(url, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        postType: 'officialEvent',
                    })
                }).then(response => response.json())
                .then(data => {
                    
                    this.officialList = data;
                })
                
                fetch(url, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        postType: 'createEvent',
                    })
                }).then(response => response.json())
                .then(data => {
                    
                    this.createList = data;
                })
                    
        },
                
        mounted() { 
            $('.activityList_ul_switch li').on('click', function(){
                $('.activityList_ul_switch li').removeClass('activityList_li_now');
                $(this).addClass('activityList_li_now');
            })
        },
        
        updated() {
        },

    });

});



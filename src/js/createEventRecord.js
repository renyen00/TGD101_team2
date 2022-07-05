window.addEventListener('load', function(){
    const bus = new Vue();
// 報名人數
    Vue.component('applicants', {
        props: ['activityid'],
        data(){
            return {
                joinList:[],
                joinnum: '',
            }
        },
        methods:{
            checkApplicants(e){
                $('.controlpoptop').addClass('applicantoverlay').fadeIn();
                $('.applicantoverlay').on("click", () => {
                    $('.controlpoptop').removeClass('applicantoverlay');
                    $(".controlpoptop").hide();
                })
                $(".applicantoverlay > article").on("click", function(e){
                    e.stopPropagation();
                });
                $(".checkApplicants_list applicants").on("click", function(e){
                    e.preventDefault();
                });
                bus.$emit('joinList', this.joinList);
               
            }, 
            
            ajaxInitapplicants(){
                const url = './php/createEventInfo.php';
                fetch(url, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        postType: 'initApplicants',
                        'ACTIVITY_ID': this.activityid
                    })
                }).then(response => response.json())
                .then(data => {
                    this.joinList = data,
                    this.joinnum = data.length
                });
            },
        },
        template: `
        <div>
            <ul class="applicants_ul_check">
                <li v-for="(join, index) in joinList" v-show="index<3"><a href="" class="applicants">
                    <img :src="join.AVATAR">
                </a></li>
                <li><a href="#" class="applicants_a_look" @click.prevent="checkApplicants">{{joinnum}} 人報名 ></a></li>
            </ul>
        </div>
        `,
        mounted(){
            this.ajaxInitapplicants();
        }
    });

    Vue.component('applicantList',{
        data(){
            return{
                joinList:[],
            }
        },
        template: `
            <div class="controlpoptop" style="display:none;">
                <article>
                    <div class="checkApplicants_title">
                        <h4>參加者</h4>
                    </div>
                    <ul class="checkApplicants_list">            
                        <li v-for="join in joinList">
                            <a href="#" class="applicants">
                                <div><img :src="join.AVATAR"></div>
                                <h5>{{join.NICKNAME}}</h5>
                            </a>
                        </li>
                    </ul>
                </article>
            </div>`,
        mounted(){
            bus.$on('joinList', joinList => this.joinList = joinList)

        }

    });


    new Vue({          
        el: '#createEventRecord', 
        data: {
            activity_id:'',
            member_id:'',
            event_info:[],
            PICTURE: '',
            PICTURE_POSITION: '',
            TITLE: '',
            EVENTDATE: '',
            STARTTIME: '',
            ENDTIME: '',
            TYPE: '',
            SPOT: '',
            MINAGE: '',
            MAXAGE: '',
            COST: '',
            MAX: '',
            LIMIT: '',
            STOPTIME: '',
            CONTENT: '',
            HOST: '',
            HOST_AVATAR:'',
        },
        methods: {
            cancelEventBtn(){
                Swal.fire({
                    title: '確定要取消此團嗎?',
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonText: '我要取消!',
                    customClass: {
                        confirmButton: 'btnS_y',
                        cancelButton: 'btnS_b--s',
                    },
                    buttonsStyling: false,
                }).then((result) => {
                    if (result.isConfirmed) {
                        const url = './php/createEventRecord.php';
                        fetch(url, {
                            method: 'POST',
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify({
                                postType: 'cancelEvent',
                                'ACTIVITY_ID': this.activity_id,
                            })
                        })
                        .then(response => response.json())
                            .then(data =>{
                                if(data === true){ 
                                    Swal.fire({
                                        icon: 'success',
                                        title: '取消揪團成功 ! 請至會員中心查詢',              
                                    })
                                    // .then(() => {
                                    //     window.location.href = "./personalEvent.html"  
                                    // });
                                }else if(data === false){
                                    Swal.fire({
                                        icon: 'error',
                                        title: '此團已取消囉',              
                                    })
                                      
                                }
                        })
                    }
                });
            }
        },

        computed: {
        },
        watch: {
            
        },
        
        created() {
            // let search_obj = new URLSearchParams(location.search);
            // this.activity_id = search_obj.get("activityid");
            this.activity_id = 48;

            const url = './php/createEventInfo.php';
            fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    postType: 'initEventinfo',
                    'ACTIVITY_ID': this.activity_id,
                })
            }).then(response => response.json())
            .then(data => {
                this.PICTURE = data[0]['PICTURE'];
                this.PICTURE_POSITION = data[0]['PICTURE_POSITION'];
                this.TITLE = data[0]['TITLE'];
                this.EVENTDATE = data[0]['EVENTDATE'];
                this.STARTTIME = data[0]['STARTTIME'];
                this.ENDTIME = data[0]['ENDTIME'];
                this.TYPE = data[0]['TYPENAME'];
                this.SPOT = data[0]['NAME'];
                this.MINAGE = data[0]['MINAGE'];
                this.MAXAGE = data[0]['MAXAGE'];
                this.COST = data[0]['COST'];
                this.MAX = data[0]['MAX'];
                this.LIMIT = data[0]['LIMIT'];
                this.STOPTIME = data[0]['STOPTIME'];
                this.CONTENT = data[0]['CONTENT'];
                this.HOST = data[0]['MAIN_ID'];
                this.HOST_AVATAR = data[0]['AVATAR'];
                this.event_info = data;
                // ID:19
            });
        },
        
        mounted() {
        },
        
        updated() {
            
        },
    });
});
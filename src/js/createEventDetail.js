window.addEventListener('load', function(){

// 報名人數
    Vue.component('applicants', {
        methods:{
            checkApplicants(){
                Swal.fire({
                    title: `
                        <div class="checkApplicants_title">
                            <h4>參加者</h4>
                        </div>`,
                    html: `
                        <ul class="checkApplicants_list">
                            <applicantList></applicantList>
                        </ul>`,
                        showConfirmButton: false,                  
                });

            },   
        },
        template: `
            <ul class="applicants_ul_check">
                <li><a href="#" class="applicants">
                    <span class="iconify" data-icon="ant-design:user-outlined" style="color: #2f4858; font-size: 25px;"></span>
                </a></li>
                <li><a href="#" class="applicants">
                    <span class="iconify" data-icon="ant-design:user-outlined" style="color: #2f4858; font-size: 25px;"></span>
                </a></li>
                <li><a href="#" class="applicants">
                    <span class="iconify" data-icon="ant-design:user-outlined" style="color: #2f4858; font-size: 25px;"></span>
                </a></li>
                <li><a href="#" class="applicants_a_look" @click.prevent="checkApplicants">10 人報名 ></a></li>
            </ul>
        `,
    });

    Vue.component('applicantList',{

        template: `
            <li>
                <a href="#" class="applicants">
                    <div></div>
                    <h5>主揪</h5>
                </a>
            </li>`,

    });

// 留言板
    const bus = new Vue();

    Vue.component('message-item', {
        props: ['init','img'],
        template: `
            <li>
                <a href=""><img class="avatar" :src="img"></a>
                <h4>{{init}}</h4>
                <span class="iconify" data-icon="akar-icons:circle-alert"></span>
            </li>
        `,
    });


    Vue.component('writeMessage',{
        data(){
            return{
                message: '',
                avatar:'',
                activity_id: '',
                member_id: '',

            }
        },
        methods: {
            submitData(e){
                this.avatar = './images/attraction/9.svg';
                if(this.message != ''){
                    this.$emit('write', this.message, this.avatar);
                    this.ajaxSendMessage();
                }
                this.message = '';
                // $('html, body').animate({
                //     scrollTop: ($('div.messageboardoverlay ul').offset().top),
                // }, 700);
            },

            ajaxSendMessage(){
                const url = './php/createEventDetail.php';
                fetch(url, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        postType: 'sendMessage',
                        CONTENT: this.message,
                        'ACTIVITY_ID': this.activity_id,
                        'MEMBER_ID': this.member_id
                    })
                    
                });
            }
        },
        template: `
            <form @submit.prevent="submitData">
                <input v-model="message" name="writeMessage" class="writeMessage">
                <button class="btnM_w--s">留言</button>
            </form>
        `,
        mounted(){
            $('.writeMessage').on("focus blur", () => {
                $('.writeMessage').toggleClass('-on');
            });

            bus.$on('activity_id', a => this.activity_id = a);
            bus.$on('member_id', m => this.member_id = m);
            
        }
    });

    Vue.component('messageboard', {
        data(){
            return{
                messages: [],
            };
        },
        methods:{
            addMessage(item, pic){
                item = item.trim();
                if(item != ''){
                    this.messages.unshift({CONTENT:item,AVATAR:pic});
                }
            },
            moreMessage(e){
                $('.controlpop').addClass('messageboardoverlay').fadeIn();
                $('div.messageboardoverlay').on("click", () => {
                    $('.controlpop').removeClass('messageboardoverlay');
                    $("div.messageboardoverlay").fadeOut();
                })
                $("div.messageboardoverlay > .messageboard").on("click", function(e){
                    e.stopPropagation();
                });
            },
            ajaxInitMessage(){
                const url = './php/createEventDetail.php';
                fetch(url, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        postType: 'initMessage',
                    })
                }).then(response => response.json())
                .then(data => {this.messages = data.reverse()});
            },
            
        },
        template: `
            <section class="messageboard">
                <writeMessage @write="addMessage"></writeMessage>

                <ul v-if="messages.length>0">
                    <message-item v-for="(message, index) in messages" :img="message.AVATAR" :key="index" :init="message.CONTENT"></message-item>
                </ul>

                <a href="" v-if="messages.length>3" class="moreMessage" @click.prevent="moreMessage">更多留言</a>
            </section>
        `,
        mounted(){
            this.ajaxInitMessage();
        },
        updated(){
            
        }
    });



    new Vue({          
        el: '#createEventDetail', 
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
        },
        methods: {
            applyBtn(){
                Swal.fire({
                    title: '確定要報名此團嗎?',
                    text: "取消後返回揪團頁面!",
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonText: '我要參加!',
                    customClass: {
                        confirmButton: 'btnS_y',
                        cancelButton: 'btnS_b--s',
                    },
                    buttonsStyling: false,
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "./activityList.html";
                    }
                });

                Swal.fire({
                    title: '確定要報名此團嗎?',
                    text: "即將返回揪團頁面!",
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonText: '我要報名!',
                    customClass: {
                        confirmButton: 'btnS_y',
                        cancelButton: 'btnS_b--s',
                    },
                    buttonsStyling: false,
                }).then((result) => {
                    if (result.isConfirmed) {location.href = "./activityList.html"};
                });
            }, 
            
        },
        computed: {
            
        },
        watch: {
            
        },
        
        created() {
            // let search_obj = new URLSearchParams(location.search);
            // this.activity_id = search_obj.get("target");
            this.activity_id = 19;
            this.member_id = 9;
            bus.$emit('activity_id', this.activity_id);
            bus.$emit('member_id', this.member_id);


            const url = './php/createEventInfo.php';
            fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    // postType: 'initEventinfo',
                    activityId: this.activity_id,
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
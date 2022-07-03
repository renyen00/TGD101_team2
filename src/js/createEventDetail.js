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
        props:['activityid'],
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
                this.avatar = $('#avatarP').attr('src');
                if(this.message != ''){
                    this.ajaxSendMessage();
                }
                
            },

            ajaxSendMessage(){
                const url = './php/createEventDetail.php';
                fetch(url, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        postType: 'sendMessage',
                        CONTENT: this.message,
                        'ACTIVITY_ID': this.activityid,
                        // 'MEMBER_ID': this.member_id
                    })
                    
                }).then(response => response.json())
                .then(data =>{
                    // console.log(data);
                    if(data === false){
                        Swal.fire({
                            icon: 'warning',
                            title: '請先登入會員',              
                        }).then(() => {
                            window.location.href = "./login.html"  
                        });
                    }else{
                        this.$emit('write', this.message, this.avatar);
                        this.message = '';
                        
                    }
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
            
        }
    });

    Vue.component('messageboard', {
        props:['activityid'],
        data(){
            return{
                messages: [],
                activity_id: '',
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
                        'ACTIVITY_ID': this.activityid
                    })
                }).then(response => response.json())
                .then(data => {this.messages = data});
            },
            
        },
        template: `
            <section class="messageboard">
                <writeMessage @write="addMessage" :activityid="activity_id"></writeMessage>

                <ul v-if="messages.length>0">
                    <message-item v-for="(message, index) in messages" :img="message.AVATAR" :key="index" :init="message.CONTENT"></message-item>
                </ul>

                <a href="" v-if="messages.length>3" class="moreMessage" @click.prevent="moreMessage">更多留言</a>
            </section>
        `,
        mounted(){
            console.log("2")
            
            this.activity_id = this.activityid;
            console.log("3")
            this.ajaxInitMessage();
            console.log("4")
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
                    text: "報名成功後返回揪團頁面!",
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonText: '我要報名!',
                    customClass: {
                        confirmButton: 'btnS_y',
                        cancelButton: 'btnS_b--s',
                    },
                    buttonsStyling: false,
                }).then((result) => {
                    if (result.isConfirmed) {
                        
                        const url = './php/createEventDetail.php';
                        fetch(url, {
                            method: 'POST',
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify({
                                postType: 'insertApplyData',
                                'ACTIVITY_ID': this.activity_id,
                            })
                            
                        })
                        .then(response => response.json())
                            .then(data =>{
                                // console.log(data);
                                if(data === true){ 
                                    Swal.fire({
                                        icon: 'success',
                                        title: '報名成功 ! 請至會員中心查詢',              
                                    }).then(() => {
                                        window.location.href = "./activityList.html"  
                                    });
                                }else if(data === false){
                                    Swal.fire({
                                        icon: 'warning',
                                        title: '請先登入會員',              
                                    }).then(() => {
                                        window.location.href = "./login.html"  
                                    });
                                      
                                }else if(data === "applied"){
                                    Swal.fire({
                                        icon: 'warning',
                                        title: '你報名過囉',              
                                    });
                                }
                        })
                    }
                });
            }, 
            
        },

        computed: {
            avatar(){
                return $('#avatarP').attr('src');
            }
        },
        watch: {
            
        },
        
        created() {
            // let search_obj = new URLSearchParams(location.search);
            // this.activity_id = search_obj.get("target");
            this.activity_id = 20;
            this.member_id = 9;
           
            console.log(1)


            const url = './php/createEventInfo.php';
            fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    // postType: 'initEventinfo',
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
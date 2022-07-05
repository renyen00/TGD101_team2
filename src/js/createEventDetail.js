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

// 留言板
    // REPORT_REASON
    Vue.component('reportbox', {
        data(){
            return{
                messageid:'',
                reportreason:'1',
            }
        },
        props: ['initreport'],
        methods:{
            sendReport(e){
                // this.messageid = e.target.parentNode.parentNode.dataset.msid;
                const url = './php/createEventDetail.php';
                fetch(url, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        postType: 'sendReport',
                        'MESSAGE_ID': this.messageid,
                        REPORTREASON: this.reportreason,
                    })
                    
                })
                .then(response => response.json())
                .then(data =>{
                    // console.log(data);
                    if(data === true){ 
                        Swal.fire({
                            icon: 'success',
                            title: '檢舉成功',              
                        })
                    }else if(data === false){
                        Swal.fire({
                            icon: 'warning',
                            title: '請先登入會員',              
                        })
                        // .then(() => {
                        //     window.location.href = "./login.html"  
                        // });
                    }
                });

                $('.controlreportbox').removeClass('is-active');
            },
            removeActive(e){
                $('.controlreportbox').removeClass('is-active');
            }
        },
        template:`
            <ul>
                <h5>我要檢舉 <div class="btn-close" @click="removeActive">X</div></h5>
                <li v-for="report in initreport">
                    <label>
                        {{report.REASON}}<input type="radio" v-model="reportreason" :value="report.ID">
                    </label>
                </li>
                <button class="btnS_b--s" @click="sendReport">送出</button>
            </ul>
        `,
        mounted(){
            bus.$on('sendmessageid', messageid => this.messageid = messageid)
        }
    });

    Vue.component('message-item', {
        props: ['init','img', 'msid'],
        data(){
            return {
                reportReason:[],
                messageid:'',
            }
        },
        methods:{
            reportList(){
                $('.controlreportbox').toggleClass('is-active');
                this.messageid = this.msid;
                console.log(this.messageid)
                bus.$emit('sendmessageid', this.messageid)
            },
            
        },
        template: `
        <li>
        <a href=""><img class="avatar" :src="img"></a>
        <h4>{{init}}</h4>
        <p @click="reportList"><span class="iconify" data-icon="akar-icons:circle-alert"></span></p>
        </li>
        `,
        mounted(){
        }
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
                    <message-item v-for="(message, index) in messages" :img="message.AVATAR" :key="index" :init="message.CONTENT" :msid="message.MSID"></message-item>
                </ul>

                <a href="" v-if="messages.length>3" class="moreMessage" @click.prevent="moreMessage">更多留言</a>
            </section>
        `,
        mounted(){
            // console.log("2")
            
            this.activity_id = this.activityid;
            // console.log("3")
            this.ajaxInitMessage();
            // console.log("4")
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
            HOST_AVATAR:'',
            reportReason:[],
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
                                }else if(data === "applymax"){
                                    Swal.fire({
                                        icon: 'warning',
                                        title: '報名額滿',              
                                    });
                                }
                        })
                    }
                });
                
            }, 
            ajaxInitReportReason(){
                const url = './php/createEventInfo.php';
                fetch(url, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        postType: 'initReportReason',
                    })
                }).then(response => response.json())
                .then(data => {this.reportReason = data});
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
            let search_obj = new URLSearchParams(location.search);
            this.activity_id = search_obj.get("activityid");
            // this.activity_id = 20;
           
            // console.log(1)


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
           this.ajaxInitReportReason();
        },
        
        updated() {
            
        },
    });
});
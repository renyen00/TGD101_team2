$(document).ready(function(){


    new Vue({
        el: '#createEvent',
        data: {  
            spotinfo_list:[],          
            selectedlist:[], 
            selectedType:'',
            selectedspots:[],
            selectedspot:'',
            selectedMax:'',
            numOfPeople:'',
            selectedCost:'',
            eventTitle: '',
            eventDate:'',
            eventTimeStart:'',
            eventTimeEnd:'',
            eventContent:'',
            image:'./images/backgroundimg/createEvent_presetimg1.webp',
            potoposition:'',
            eventType:'',
            eventSpot:'',
            minAge:'18',
            maxAge:'65',
            currentStep: 0,
        },
        methods: {
            selectedArea(e){
                this.selectedspots =[];
                for(let i = 0; i < this.spotinfo_list.length; i++){
                    if(this.selectedType === this.spotinfo_list[i].TYPE_ID){
                        this.selectedspots.push({
                            'ID':this.spotinfo_list[i].ID,
                            'NAME':this.spotinfo_list[i].NAME,
                            'LIMIT':this.spotinfo_list[i].LIMIT
                        });
                    }
                }
            },
            selectedmax(e){
                this.eventType=this.spotinfo_list[this.selectedspot-1].TYPENAME;
                this.eventSpot=this.spotinfo_list[this.selectedspot-1].NAME;
                this.selectedCost=this.spotinfo_list[this.selectedspot-1].COST;
                this.selectedMax=this.spotinfo_list[this.selectedspot-1].LIMIT;
            },
            createConfirm(){
                if(this.validation() === true){
                    $('html, body').scrollTop(0);
                    this.currentStep = 1;
                    
                };
            },
            
            validationOk(){
                $('.validation').each(function() {
                    $('.validation').bind("input propertychange",function() {
                        // console.log($(this).removeClass('--requiredInput').parent().children().children());
                        $(this).removeClass('--requiredInput').parent().children().children().remove(".--requiredSpan");
                    });
                }) 
            },
            
            validation(){
                if($('.--requiredSpan').length == 0){
                    $('.validation').each(function() {
                        console.log($(this))
                        if( $(this).val() == ''){
                            $(this).toggleClass('--requiredInput');
                                        
                            if(!$(this).hasClass( "ex" )){
                                $(this).parent().children('h4').append('<span class="--requiredSpan"> *此欄位尚未填寫</span>');
                            }
                            
                        }
                    });
                    if($('.--requiredSpan').length != 0){
                        $('html, body').animate({
                            scrollTop: ($('.createEvent_div_createForm').offset().top),
                        }, 700);
                        
                        return false;
                    }else {
                        return true;
                    }

                
                }else if($('.--requiredSpan').length <= 5 && $('.--requiredSpan').length > 0){
                    $('html, body').animate({
                        scrollTop: ($('.createEvent_div_createForm').offset().top),
                    }, 700);

                    return false;
                }

            },

            selectedFile(e){
                let file = e.target.files[0];
                let readFile = new FileReader();
                readFile.readAsDataURL(file);
                readFile.addEventListener("load", this.loadImage)
            },

            loadImage(e){
                this.image = e.target.result;
            },

            ajaxInitData(){
                const url = './php/createEvent.php';
                fetch(url, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        postType: 'initData',
                    })
                }).then(response => response.json())
                .then(data => {
                    this.spotinfo_list = data;
                });
            },

            ajaxPlaceType(){
                const url = './php/createEvent.php';
                fetch(url, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        postType: 'placeType',
                    })
                    
                }).then(response => response.json())
                    // .then(text => this.console.log(text))
                    // .then(text => this.selectedspot = text);
                    .then(data => this.selectedlist=data);
            },

            ajaxInsertData(){
                const url = './php/createEvent.php';
                fetch(url, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        postType: 'insertData',
                        TITLE: this.eventTitle,
                        EVENTDATE: this.eventDate,
                        STARTTIME: this.eventTimeStart,
                        ENDTIME: this.eventTimeEnd,
                        CONTENT: this.eventContent,
                        PICTURE: this.image,
                        PICTURE_POSITION: this.potoposition,
                        PLACE_ID: this.selectedspot,
                        STOPDATE: this.stopDate,
                        MAX: this.numOfPeople,
                        MINAGE: this.minAge,
                        MAXAGE: this.maxAge
                    })
                    
                })
                .then(response => response.json())
                    .then(data =>{
                        // console.log(data);
                        if(data === true){ 
                            Swal.fire({
                                icon: 'success',
                                title: '揪團成功 !  即將返回揪團頁面',              
                            }).then(() => {
                                window.location.href = "./activityList.html"  
                            });
                        }else {
                            Swal.fire({
                                icon: 'warning',
                                title: '請先登入會員',              
                            }).then(() => {
                                window.location.href = "./login.html"  
                            }); 
                        }
                });
                
            },

            cancelCreate(){
                Swal.fire({
                    title: '確定要取消揪團嗎?',
                    text: "取消後返回揪團頁面!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: '我不揪了!',
                    customClass: {
                        confirmButton: 'btnS_b--s',
                        cancelButton: 'btnS_y',
                    },
                    buttonsStyling: false,
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "./activityList.html";
                    }
                })
            }
            
        },
        
        computed: {
            maxArray(){
                let arry =[];
                for(let i = 1 ;  i <= this.selectedMax ; i ++ ){
                    if(i >= 3){
                        arry.push(i);
                    }             
                }
            return arry;
            },

            

            stopDate(){
                let today = new Date();
                let choosedate = new Date(this.eventDate);
                if(this.eventDate==''){
                    today.setDate(today.getDate() + 4);
                    return today.getFullYear()+((today.getMonth()+1)<10?'/0':'/')+(today.getMonth()+1)+((today.getDate()+1)<10?'/0':'/')+(today.getDate());
                }else{
                    choosedate.setDate(choosedate.getDate() - 3);
                    return choosedate.getFullYear()+((choosedate.getMonth()+1)<10?'/0':'/')+(choosedate.getMonth()+1)+((choosedate.getDate()+1)<10?'/0':'/')+(choosedate.getDate());

                }
            }
        },
        watch: {
            potoposition(newValue, oldValue){
                return `${newValue}  <${oldValue}`;
            },
            eventDate(newValue){
                if(newValue != ''){
                    $('#eventDate').removeClass('--requiredInput').parent().children().children().remove();
                }
            }
        },
        
        created() {
                this.ajaxInitData();
                this.ajaxPlaceType();
            
            },
        mounted() {
            var today = new Date();
                $( "#eventDate" ).datepicker({
                    onSelect: (dateText => {
                        this.eventDate = dateText
                    }),
                    dateFormat: 'yy/mm/dd',
                    changeMonth: true,
                    changeYear: true,
                    constrainInput: true,
                    defaultDate: "+7D",
                    minDate: "+7D",
                    maxDate: "+1M",
                });

                $( "#stopDate" ).datepicker({
                    onSelect: (dateText => this.stopDate = dateText),
                    dateFormat: 'yy/mm/dd',
                    changeMonth: true,
                    changeYear: true,
                    constrainInput: true,
                    minDate: "0D",
                    maxDate: "+7D",
                    // defaultDate : "+3d",

                });

                $('#eventTimeStart').timepicker({
                    change : (e)=>{this.eventTimeStart = $('#eventTimeStart').val()},
                    timeFormat: 'hh p',
                    interval: 60,
                    minTime: '10',
                    maxTime: '5:00pm',
                    defaultTime: '10',
                    startTime: '10:00',
                    dynamic: false,
                    dropdown: true,
                    scrollbar: false
                });

                $('#eventTimeEnd').timepicker({
                    change : (e)=>{this.eventTimeEnd = $('#eventTimeEnd').val()},
                    timeFormat: 'hh p',
                    interval: 60,
                    minTime: '11',
                    maxTime: '6:00pm',
                    defaultTime: '11',
                    startTime: '10:00',
                    dynamic: false,
                    dropdown: true,
                    scrollbar: false
                });
                        
                this.validationOk();

        },
        
        updated() {
            $( "#createEvent_draggable" ).draggable({
                // cursor: "pointer",
                // cursorAt: { left: 150, top: 100  },
                // containment: ".createEvent_div_choosePhotoL",
                drag: ( event, ui ) => {
                    this.potoposition = $("#createEvent_draggable").attr('style');
                    // console.log(this.potoposition);
                }
            });
            
            for(let i = 1; i < 5; i++){
                $('.createEvent_div_choosePhotoR ul li.'+i+' img').on('click', () => {
                    // this.potoposition = $('.createEvent_div_choosePhotoR ul li img').attr('src');
                    this.image = $('.createEvent_div_choosePhotoR ul li.'+i+' img').attr('src');
                });
            };

            
        },
        

    });
});
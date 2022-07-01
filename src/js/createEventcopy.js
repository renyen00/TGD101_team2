
new Vue({
    el: '#createEvent',
    data: {     // 變數放這裡！ 
        spotinfo_list:[],          
        selectedlist:[], 
        selectedType:'',
        selectedspots:[],
        selectedspot:'',
        selectedMax:'',
        numOfPeople:3,
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
        createConfirm(){
            // if(this.validation() === true){
            //     this.currentStep = 1;
            // };
            // $('#inputform').validate();
            if(this.eventTitle == ''){
                $('#eventTitle').addClass('--requiredInput');
                $('html, body').animate({
                    scrollTop: ($('#eventTitle').offset().top) -60,
                }, 700);
                $('#eventTitle').parent().children().append('<span class="--requiredSpan"> *此欄位尚未填寫</span>').children().addClass('--requiredSpan');
            }
            if(this.eventDate == ''){
                $('#eventDate').addClass('--requiredInput');
                $('html, body').animate({
                    scrollTop: ($('#eventDate').offset().top) -60,
                }, 700);
                $('#eventDate').parent().children().append('<span class="--requiredSpan"> *此欄位尚未填寫</span>').children().addClass('--requiredSpan');
            }
            if(this.eventTimeStart == ''){
                $('#eventTimeStart').addClass('--requiredInput');
                $('html, body').animate({
                    scrollTop: ($('#eventTimeStart').offset().top) -60,
                }, 700);
                $('#eventTimeStart').parent().children().append('<span class="--requiredSpan"> *此欄位尚未填寫</span>').children().addClass('--requiredSpan');
            }
            if(this.eventTimeStart == ''){
                $('#eventTimeEnd').addClass('--requiredInput');
                $('html, body').animate({
                    scrollTop: ($('#eventTimeEnd').offset().top) -60,
                }, 700);
                $('#eventTimeEnd').parent().children().append('<span class="--requiredSpan"> *此欄位尚未填寫</span>').children().addClass('--requiredSpan');
            }
            this.currentStep = 1;
        },

        validation(){
            // for(let i = 0; i < $('.validation').length; i++){
            //     if($('.validation').val().trim() === ''){
            //         $('.validation').addClass('--requiredInput').parent().children().append('<span class="--requiredSpan"> *此欄位尚未填寫</span>');
            //         $('.validation').bind("input propertychange",() => {
            //             $('.validation').removeClass('--requiredInput').prev().remove('span');
            //         })
            //         return false;
            //     }else{
            //         return true;
            //     }
            // }
            // let empty = false; //先假設每一個欄位都有輸入
            // $('.validation').each(function() {
            //     console.log($(this))
            //     if( $(this).val() == '' ){
            //         empty = true;
            //         // $('.validation').addClass('--requiredInput').parent().children('h4').append('<span class="--requiredSpan"> *此欄位尚未填寫</span>');
            //         $(this).addClass('--requiredInput').parent().children('h4').append('<span class="--requiredSpan"> *此欄位尚未填寫</span>');
            //     }
            // });

            // if(empty == true){
            // }else{
            //     return true;
            // }
            
            
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
            const url = './php/createEventcopy.php';
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
            const url = './php/createEventcopy.php';
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
            const url = './php/createEventcopy.php';
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
            // .then(response => response.json())
            //     .then(data => alert(data));
        }
        
    },
    
    computed: {
        selectedArea(){
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
            this.selectedCost=this.spotinfo_list[this.selectedspot-1].COST;
            this.eventType=this.spotinfo_list[this.selectedspot-1].TYPENAME;
            this.eventSpot=this.spotinfo_list[this.selectedspot-1].NAME;
            return this.selectedMax=this.spotinfo_list[this.selectedspot-1].LIMIT;   
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
            // return choosedate.getFullYear()+'/'+(choosedate.getMonth()+1)+'/'+(choosedate.getDate()+7);
        }
    },
    watch: {
        potoposition(newValue, oldValue){
            console.log(`${newValue}  <${oldValue}`);
        }
    },
    
    created() {
            this.ajaxInitData();
            this.ajaxPlaceType();
           
        },
    mounted() {
        var today = new Date();
            $( "#eventDate" ).datepicker({
                onSelect: (dateText => this.eventDate = dateText),
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
        
            
            
    
            


    },
    
    updated() {
        $( "#draggable" ).draggable({
            cursor: "pointer",
            // containment: ".createEvent_div_choosePhotoL",
            drag: ( event, ui ) => {
                this.potoposition = $("#draggable").attr('style');
                // console.log(this.potoposition);
              }
        });
        
        for(let i = 1; i < 5; i++){
            $('.createEvent_div_choosePhotoR ul li.'+i+' img').on('click', () => {
                // this.potoposition = $('.createEvent_div_choosePhotoR ul li img').attr('src');
                this.image = $('.createEvent_div_choosePhotoR ul li.'+i+' img').attr('src');
            });
        };

        // $('.validation').each(() => {
        //     $('.validation').bind("input propertychange",() => {
        //         $('.validation').removeClass('--requiredInput').prev().remove('span');
        //     });
        // })
    },
    

});
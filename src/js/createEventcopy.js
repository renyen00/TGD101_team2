
new Vue({
    el: '#createEvent',
    data: {     // 變數放這裡！ 
        spotinfo_list:[],          
        selectedtype:[],
        selectedspot:[],
        currentStep: 0,
        eventTitle: '',
        eventDate:'',
        eventTimeStart:'',
        eventTimeEnd:'',
        eventType:'',
        eventSpot:'',
        eventContent:'',
        image: '',
        potoposition:'',
    },
    methods: {
        createConfirm(){
            // $('#inputform').validate();
            this.currentStep = 1;
        },

        setEventTitle(e){
            this.eventTitle = e.target.value;
        },

        setEventSpot(e){
            this.eventSpot = e.target.value;
        },

        selectedT(e){
            // console.log(e.target.value);
            this.eventType = this.selectedspot[e.target.value];
        },
        
        selectedS(e){
            // console.log(e.target.value);
            this.eventSpot = this.selectedspot[e.target.value];
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

    },
    
    computed: {
    },
    watch: {
        potoposition(newValue, oldValue){
            console.log(`${newValue}  <${oldValue}`);
        }
    },
    
    created() {
        const url = './php/createEventcopy.php';
            fetch(url)
                .then(response => response.json())
                // .then(text => this.console.log(text))
                // .then(text => this.selectedspot = text);
                .then(data => {
                    this.spotinfo_list = data;
                    for(let i=0; i< this.spotinfo_list.length; i++){
                        this.selectedtype.push(this.spotinfo_list[i]['TYPENAME']);
                        this.selectedspot.push(this.spotinfo_list[i]['NAME']);
                        // console.log(this.selectedspot)
                    }
                });
        },
    mounted() {
        
            $( "#eventDate" ).datepicker({
                onSelect: (dateText => this.eventDate = dateText),
                dateFormat: 'yy/mm/dd',
                changeMonth: true,
                changeYear: true,
                constrainInput: true,
                minDate: "0D",
                maxDate: "+1M",
            });

            $('#eventTimeStart').timepicker({
                change : (e)=>{this.eventTimeEnd = $('#eventTimeEnd').val()},
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
            cursorAt: { top: 150, left: 150 },
            drag: ( event, ui ) => {
                this.potoposition = $("#draggable").attr('style');
                // console.log(this.potoposition);
              }
        });
    },

});
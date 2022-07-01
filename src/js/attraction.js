
let search_obj = new URLSearchParams(location.search);
const spot_id = search_obj.get("target");
// const spot_id = 3;
// console.log(spot_id);

let vm = new Vue({
    el: '#attraction_info',

    data: {     // 變數放這裡！           
        attraction_list:[],
        attraction_imgs:[],
        title:'',
        tag:'',
        info1:'',
        info2:'',
        showbtn:'',
        currentSpot:0,
    },
    methods: {
        init_img(picNames){
            this.attraction_imgs =[];
        let picName = picNames.split(',');
            for(let i = 0; i < picName.length; i++){
                this.attraction_imgs.push('./images/attraction/' + picName[i]+ '.jpg');
            }           
        },

        nextSpot(e){
            let spotIndex = this.attraction_list.length - 1;
            
            if(spotIndex === this.currentSpot){
                this.currentSpot = 0;
            }else{
                ++this.currentSpot;
            }
            this.init_img(this.attraction_list[this.currentSpot]['PIC_ARRAY']);
            this.title = this.attraction_list[this.currentSpot]['NAME'];
            this.tag = this.attraction_list[this.currentSpot]['TAG'];
            this.info1 = this.attraction_list[this.currentSpot]['TEXT'];
            this.info2 = this.attraction_list[this.currentSpot]['TEXT2'];
            
        },
    },
    computed: {
        showBtn(){
            if(this.attraction_list.length > 1){
                return this.showbtn=true;
            }else{
                return this.showbtn=false;
            }
        }
    },
    watch: {
        
    },
    
    created() {
        const url = './php/attraction.php';
            // fetch(url)
            //     .then(response => response.json())
            //     // .then(text => this.console.log(text))
            //     // .then(text => this.attraction_list = text);
            //     .then(data => {
            //         for(let i = 0; i < data.length; i++){
            //             this.attraction_list.push(data[i]);
            //         }
            //         this.attraction_lists(spot_id);
            //     });
            // },
            fetch(url, {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					typeid: spot_id
				})
			}).then(response => response.json())
            // .then(text => console.log(text))
            // .then(text => this.attraction_list = text)
            .then(data => {
                this.init_img(data[0]['PIC_ARRAY']);
                this.title = data[0]['NAME'];
                this.tag = data[0]['TAG'];
                this.info1 = data[0]['TEXT'];
                this.info2 = data[0]['TEXT2'];
                this.attraction_list = data;
            })
        },
            
    mounted() { 
        // console.log(this.attraction_imgs);
        
        $('.slick-dots li button').text('');

        // $('.ul_sliderpic .slick-track li').data('slick-index', '-2').children().attr('src', $('.ul_sliderpic li img.2').attr('src'));
        //         // let a = $('.ul_sliderpic li img.2').attr(':src');
        //         let a=$('.attraction_section_morepic [data-slick-index=0]').children().attr(':src');
        //         // let a = $('.slick-slide li').data('slick-index', '0').children();
        //         console.log(a);
    },
    
    updated() {
        if( $('.attraction_mainslider, .attraction_section_morepic .ul_sliderpic').hasClass('slick-initialized')) {
             $('.attraction_mainslider, .attraction_section_morepic .ul_sliderpic').slick('unslick');
         }
        $('.attraction_mainslider').not('.slick-initialized').slick({
            dots: true,
            cssEase: 'linear',
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 500,
            fade: true,
        });
        
        $('.attraction_section_morepic .ul_sliderpic').not('.slick-initialized').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            // infinite: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 428, 
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
      
        $('.slick-dots li button').text('');
    },

});





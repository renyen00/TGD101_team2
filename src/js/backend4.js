Vue.component('back4',{
    props:['h1'],
    data(){
        return{
            content:'',
            php1:[],
            php2:[],
            infor:[],            
        }
    },
    template:`
        <main class="backend_main">
            <div class="backend_main_top">
                <h1>{{h1}}</h1>              
                <h3 class="click">登出</h3>
            </div>
            <btn4 @chg='change'></btn4>

            <component :is='content' :infor='infor'></component>
            
        </main>
        `,
    methods:{
        change(e,page){
            $('.backend_ul_page').find('.nowpage').removeClass('nowpage');
            e.classList.add('nowpage')
            this.content = 'backd1'
            if (page == 'php1'){
                this.infor = this.php1
            }else if(page == 'php2'){
                this.infor = this.php2
            }
        },
    },
    mounted() {
        const url1 = './php/backend4_1.php';
        fetch(url1)
            .then(response => response.json())
            .then((text) =>{
                this.php1 = text
            } );
        const url2 = './php/backend4_2.php';
        fetch(url2)
            .then(response => response.json())
            .then((text) =>{
                this.php2 = text
            } );
        },
    })


Vue.component('btn4',{
data(){
    return{
        con:['處理中','歷史訂單']
    }
},
template:`
<ul class="backend_ul_page">
    <li class="back_btnL"  v-for="(value,i) in con" :data-n="'php'+ (i+1)" @click="change">{{value}}</li>
</ul>
`,
methods:{
    change(e){
        let btn = e.target.closest('li')
        let n = btn.dataset.n
        this.$emit('chg',btn,n)
    }
},
})

Vue.component('backd1',{
    data(){
        return{
            popup:[],
        }
    },
    props:['infor'],
    template:`
        <div>
            <ul class="backend_ul_sort">
                <input class='backend_input_search'type="text" placeholder="search">
            </ul>
            <table>
                <tr>
                    <td>訂單編號</td>
                    <td>帳號</td>
                    <td>姓名</td>
                    <td>訂單狀態</td>
                    <td>總金額</td>
                    <td>詳細</td>
                </tr>
                <tr v-for="(val,i) in infor" :data-n='i'>
                    <td>{{val[0]}}</td>
                    <td>{{val[5]}}</td>
                    <td>{{val[6]}}</td>
                    <td>{{val[4]}}</td>
                    <td>{{val[8]}}</td>
                    <p @click='chgpop'>詳細</p>
                </tr>
            </table> 
            <popd1 :infor='popup'></popd1>
        </div>
        `,
        methods:{
            chgpop(e){
                let i = e.target.closest('tr').dataset.n
                this.popup = this.infor[i]
                document.querySelector('.backend_div_popup').classList.add('backend_show')
            },
        },
    })
    Vue.component('popd1',{
        props:['infor'],
        data(){
            return{
                list:[],
            }
        },
        template:`
        <div class="backend_div_popup">
            <section>
                <i class="fa-solid fa-x" @click='close'></i>
                <div class="backend_product">
                    <ul>
                        <li><h5>訂單編號</h5><h3>{{infor[1]}}</h3></li>
                        <li><h5>成立日期</h5><h3>{{infor[2]}}</h3></li>
                        <li><h5>訂購會員</h5><h3>{{infor[5]}}</h3></li>
                        <li><h5>姓名</h5><h3>{{infor[6]}}</h3></li>
                        <li><h5>聯絡電話</h5><h3>{{infor[7]}}</h3></li>
                    </ul>
                    <div class="backend_pop_right">
                        <h3> </h3>
                        <ul>
                            <li><h2>　</h2></li>
                            <li><h2>　</h2></li>
                            <li><h5>訂單狀態</h5><h3>{{infor[4]}}</h3></li>
                            <li><h5>取貨方式</h5><h3>{{infor[3]}}</h3></li>
                            <li><h5>總金額</h5><h3>{{infor[8]}}</h3></li>
                        </ul>
                    </div>
                    
                    
                </div>
                <h3>詳細</h3>
                <div class="backend_detail">
                    <ul>
                        <li class="backend_detail_li" v-for="val in list"><h2>{{val[0]}}</h2><h3>{{val[1]}}</h3></li>
                    </ul>
                <img class="backend_img_bird" src="./images/emojione-v1_bird.jpg">
                </div>
            
                <button class="back_btnM" @click='close'>關閉</button>
            </section>
        </div>
            `,
        methods:{
            close(e){
                e.target.closest('div.backend_div_popup').classList.remove('backend_show')
            }
        },
        watch:{
            infor(){
                const urll = `./php/backend4_pop.php?id=${this.infor[0]}`;
                fetch(urll)
                    .then(response => response.json())
                    .then((text) =>{
                        this.list = text
                    } );
            }
        }
})
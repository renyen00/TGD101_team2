Vue.component('back5',{
    props:['h1'],
    data(){
        return{
            content:'',
            php:[],
            php2:[],
            php3:[],
        }
    },
    template:`
        <main class="backend_main">
            <div class="backend_main_top">
                <h1>{{h1}}</h1>              
                <h3 class="click">登出</h3>
            </div>
            <btn5 @chg='change'></btn5>

            <component :is='content' :php='php,php2,php3'></component>
        </main>
        `,
    methods:{
        change(e,page){
            $('.backend_ul_page').find('.nowpage').removeClass('nowpage');
            e.classList.add('nowpage')
            this.content = page
        },
    },
    mounted() {
        const url1 = './php/backend5_1.php';
        fetch(url1)
            .then(response => response.json())
            .then((text) =>{
                this.php = text
            } );
        const url2 = './php/backend5_2.php';
        fetch(url2)
            .then(response => response.json())
            .then((text) =>{
                this.php2 = text
            } );
        const url3 = './php/backend5_3.php';
        fetch(url3)
            .then(response => response.json())
            .then((text) =>{
                this.php3 = text
            } );
    },    
})


Vue.component('btn5',{
data(){
    return{
        con:['揪團清單','官方活動','歷史紀錄']
    }
},
template:`
<ul class="backend_ul_page">
    <li class="back_btnL"  v-for="(value,i) in con" :data-n="'backe'+ (i+1)" @click="change">{{value}}</li>
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

Vue.component('backe1',{
    props:['php'],
    data(){
        return{
            popup:[],
        }
    },
    template:`
        <div>
            <ul class="backend_ul_sort">
                <input class='backend_input_search'type="text" placeholder="search">
            </ul>
            <table>
                <tr>
                    <td>揪團編號</td>
                    <td>發起人</td>
                    <td>發起日期</td>
                    <td>截止日期</td>
                    <td>景點</td>
                    <td>參與人數</td>
                    <td>揪團狀態</td>
                    <td>詳細</td>
                </tr>
                <tr v-for="(val,i) in php" :data-n='i'> 
                    <td>{{val[0]}}</td>
                    <td>{{val[1]}}</td>
                    <td>{{val[2]}}</td>
                    <td>{{val[3]}}</td>
                    <td>{{val[4]}}</td>
                    <td>{{val[5]}}/{{val[6]}}</td>
                    <td>{{val[7]}}</td>
                    <p @click='chgpop'>詳細</p>
                </tr>
            </table> 
            <pope1 :infor='popup'></pope1>
        </div>
        `,
        methods:{
            chgpop(e){
                let i = e.target.closest('tr').dataset.n
                this.popup = this.php[i]
                document.querySelector('.backend_div_popup').classList.add('backend_show')
            },
        },
    })
Vue.component('backe2',{
    props:['php2'],
    data(){
        return{
            popup:[],
        }
    },
    template:`
        <div>
            <ul class="backend_ul_sort">
                <div class="backend_ul_right">
                    <input class='backend_input_search'type="text" placeholder="search">
                    <button class="backend_btn_add back_btnS" @click='chg'>新增</button>
                </div>
            </ul>
            <table>
                <tr>
                    <td>揪團編號</td>
                    <td>發起日期</td>
                    <td>截止日期</td>
                    <td>景點</td>
                    <td>參與人數</td>
                    <td>揪團狀態</td>
                    <td>詳細</td>
                </tr>
                <tr v-for="(val,i) in php2" :data-n='i'> 
                    <td>{{val[0]}}</td>
                    <td>{{val[1]}}</td>
                    <td>{{val[2]}}</td>
                    <td>{{val[3]}}</td>
                    <td>{{val[4]}}/{{val[5]}}</td>
                    <td>{{val[6]}}</td>
                    <p @click='chgpop'>詳細</p>
                </tr>
            </table> 
            <pope2 :infor='popup'></pope2>

            <pope3 :infor='popup'></pope3>

        </div>
        `,
        methods:{
            chgpop(e){
                let i = e.target.closest('tr').dataset.n
                this.popup = this.php2[i]
                document.querySelector('.backend_div_popup').classList.add('backend_show')
            },
            chg(){
                document.querySelector('.backend_popup').classList.add('backend_show')
                this.popup =[]
            }
        },
    })
Vue.component('backe3',{
    props:['php3'],
    data(){
        return{
            popup:[],
        }
    },
    template:`
        <div>
            <ul class="backend_ul_sort">
                <input class='backend_input_search'type="text" placeholder="search">
            </ul>
            <table>
                <tr>
                    <td>揪團編號</td>
                    <td>發起人</td>
                    <td>發起日期</td>
                    <td>截止日期</td>
                    <td>景點</td>
                    <td>參與人數</td>
                    <td>揪團狀態</td>
                    <td>詳細</td>
                </tr>
                <tr v-for="(val,i) in php3" :data-n='i'> 
                    <td>{{val[0]}}</td>
                    <td>{{val[1]}}</td>
                    <td>{{val[2]}}</td>
                    <td>{{val[3]}}</td>
                    <td>{{val[4]}}</td>
                    <td>{{val[5]}}/{{val[6]}}</td>
                    <td>{{val[7]}}</td>
                    <p @click='chgpop'>詳細</p>
                </tr>
            </table> 
            <pope1 :infor='popup'></pope1>

        </div>
        `,
        methods:{
            chgpop(e){
                let i = e.target.closest('tr').dataset.n
                this.popup = this.php3[i]
                document.querySelector('.backend_div_popup').classList.add('backend_show')
            },
        },
    })
Vue.component('pope1',{
    props:['infor'],
    data(){
        return{
            list:[]
        }
    },
    template:`
    <div class="backend_div_popup">
        <section>
            <i class="fa-solid fa-x" @click='close'></i>
            <div class="backend_product">
                <ul>
                    <li><h2>編號</h2><h3>{{infor[0]}}</h3></li>
                    
                    <li><h2>地點</h2><h3>{{infor[4]}}</h3></li>
                </ul>
                <div class="backend_pop_right">
                    <h3> </h3>
                    <ul>
                        <li><h2>成立日期</h2><h3>{{infor[2]}}</h3></li>
                        <li><h2>截止日期</h2><h3>{{infor[3]}}</h3></li>
                        <li><h2>活動日期</h2><h3>{{infor[8]}}</h3></li>
                    </ul>
                </div>
            </div>       
            <h2>參加名單</h2>
            <div class="backend_detail">
                <ul>
                    <li class="backend_detail_li" v-for="val in list"><h2>{{val[0]}}</h2></li>
                </ul>
                <img class="backend_img_bird" src="./images/emojione-v1_bird.jpg">
            </div>
            <button class="backend_btn_dosomething_red">取消揪團</button>
            <button class="back_btnM" @click='close'>關閉</button>
        </section>
    </div>`,
    methods:{
        close(e){
            e.target.closest('div.backend_div_popup').classList.remove('backend_show')
        }
    },
    watch:{
        infor(){
            const urll = `./php/backend5_pop.php?id=${this.infor[0]}`;
            fetch(urll)
                .then(response => response.json())
                .then((text) =>{
                    this.list = text
                } );
        }
    }
})
Vue.component('pope2',{
    props:['infor'],
    data(){
        return{
            list:[]
        }
    },
    template:`
    <div class="backend_div_popup">
        <section>
            <i class="fa-solid fa-x" @click='close'></i>
            <div class="backend_product">
                <ul>
                    <li><h2>編號</h2><h3>{{infor[0]}}</h3></li>
                    
                    <li><h2>地點</h2><h3>{{infor[3]}}</h3></li>
                </ul>
                <div class="backend_pop_right">
                    <h3> </h3>
                    <ul>
                        <li><h2>成立日期</h2><h3>{{infor[1]}}</h3></li>
                        <li><h2>截止日期</h2><h3>{{infor[2]}}</h3></li>
                        <li><h2>活動日期</h2><h3>{{infor[7]}}</h3></li>
                    </ul>
                </div>
            </div>       
            <h2>參加名單</h2>
            <div class="backend_detail">
                <ul>
                    <li class="backend_detail_li" v-for="val in list"><h2>{{val[0]}}</h2></li>
                </ul>
                <img class="backend_img_bird" src="./images/emojione-v1_bird.jpg">
            </div>
            <button class="backend_btn_dosomething_red">取消揪團</button>
            <button class="back_btnM" @click='close'>關閉</button>
        </section>
    </div>`,
    methods:{
        close(e){
            e.target.closest('div.backend_div_popup').classList.remove('backend_show')
        }
    },
    watch:{
        infor(){
            const urll = `./php/backend5_pop2.php?id=${this.infor[0]}`;
            fetch(urll)
                .then(response => response.json())
                .then((text) =>{
                    this.list = text
                } );
        }
    }
})

Vue.component('pope3',{
    props:['infor'],
    data(){
        return{
            list:[],
            num:'',
        }
    },
    template:`
    <div class="backend_div_popup backend_popup">
    <section>
        <i class="fa-solid fa-x" @click='close'></i>
        <div class="backend_product">
            <ul>
                <li><h2>活動日期:</h2><input type="date" v-model='infor[7]'></li>
                <li><h2>地點:</h2>
                    <select v-model='infor[3]'>
                        <option v-for="(val,i) in list">{{i+1}}.{{val[0]}}</option>
                    </select>
                </li>
                <li><h2>人數:</h2><input v-model='infor[5]'></li>
                <li><h2>金額:</h2><input v-model='infor[8]'></li>
            </ul>
        </div>       
        
        <img class="backend_img_bird_sp " src="./images/emojione-v1_bird.jpg">
        <div class="backend_pop_bottom">
            <p class="back_btnS" @click='close'>取消</p>
            <p class="back_btnS">儲存</p>
        </div>
    </section>
</div>`,
    methods:{
        close(e){
            e.target.closest('div.backend_div_popup').classList.remove('backend_show')
        },
    },
    mounted(){
        const urll = `./php/backend5_pop3.php`;
            fetch(urll)
                .then(response => response.json())
                .then((text) =>{
                    this.list = text
                } );
    },
    watch:{
        infor(){
            this.num= this.infor[3].substr(0,1);
        }
    }
})

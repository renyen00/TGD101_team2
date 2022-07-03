Vue.component('back7',{
    props:['h1'],
    data(){
        return{
            content:'',
            php:[],

        }
    },
    template:`
        <main class="backend_main">
            <div class="backend_main_top">
                <h1>{{h1}}</h1>              
                <h3 class="click">登出</h3>
            </div>
            <backg :infor='php'></backg>            
        </main>
        `,
    methods:{  
    },
    mounted() {
        const url1 = './php/backend7.php';
        fetch(url1)
            .then(response => response.json())
            .then((text) =>{
                this.php = text
        } );
    }
})
Vue.component('backg',{
    data(){
      return{
        popup:[],
      }  
    },
    props:['infor'],
    template:`
        <div>
            <ul class="backend_ul_sort">
                <div class="backend_ul_right">
                    <input class='backend_input_search'type="text" placeholder="search">
                    <button class="backend_btn_add back_btnS" @click='chg'>新增</button>
                </div>
            </ul>
            <table class="backend_table_special">
                <tr>
                    <td>景點編號</td>
                    <td>名稱</td>
                    <td>縮圖</td>
                    <td>類別</td>
                    <td>人數</td>
                    <td>上架狀態</td>
                    <td>編輯</td>
                </tr>
                <tr  v-for="(val,i) in infor" :data-n='i'>
                    <td>{{val[0]}}</td>
                    <td>{{val[1]}}</td>
                    <td>
                        <img class="backend_img_preview" src="./images/" alt="">
                    </td>
                    <td>{{val[3]}}</td>
                    <td>{{val[4]}}</td>
                    <td>
                        <label class="backend_switch">
                            <input type="checkbox" v-model='val[7]' :true-value="1" :false-value="0">
                            <span class="backend_slider backend_round"></span>
                        </label>
                    </td>
                    <p @click="chgpop">編輯</p>
                </tr>
            </table> 
            <popg1 :infor="popup"></popg1>
        </div>
        `,
        methods:{
            chgpop(e){
                let i = e.target.closest('tr').dataset.n
                this.popup = this.infor[i]
                document.querySelector('.backend_div_popup').classList.add('backend_show')
            },
            chg(){
                document.querySelector('.backend_div_popup').classList.add('backend_show')
                this.popup =[]
            }
        },
    })


  
    Vue.component('popg1',{
        props:['infor'],
        data(){
            return{
                list:[],
                select:'',
            }
        },
        template:`
            <div class="backend_div_popup">
                <section>
                    <i class="fa-solid fa-x" @click='close'></i>
                    <div class="backend_product">
                        <ul>
                            <li><h2>編號：</h2><h3>{{infor[0]}}</h3></li>
                            <li><h2>名稱：</h2><input v-model="infor[1]"></li>
                            <li><h2>類別：</h2>
                            <select v-model='infor[3]'>
                                <option v-for="val in list" :data-n="val[0]">{{val[1]}}</option>
                            </select>
                            </li>
                            <li><h2>上限人數：<input v-model="infor[4]"></li>
                        </ul>
                        <div class="backend_pop_right">
                            <ul> 
                                <li>
                                    <input type="file" multiple>
                                </li>
                                <li>
                                    <div class="backend_product">
                                        <input type="radio" v-model="infor[7]" value='1'><h3>上架</h3>
                                        <input type="radio" v-model="infor[7]" value='0'><h3>下架</h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h3>描述</h3>
                    <textarea cols="30" rows="10" v-model="infor[5]" class="backend_div_content"></textarea>
                    <h3>描述2</h3>
                    <textarea cols="30" rows="10" v-model="infor[6]" class="backend_div_content"></textarea>

                    
                    <img class="backend_img_bird_sp " src="./images/emojione-v1_bird.jpg">
                    <div class="backend_pop_bottom">
                        <p class="back_btnS" @click='close'>取消</p>
                        <p class="back_btnS">儲存</p>
                    </div>
                </section>
            </div>
                `,
        methods:{
            close(e){
                e.target.closest('div.backend_div_popup').classList.remove('backend_show')
            },
            file(e){
                let i = e.target.dataset.n
                this.infor[i]=e.target.files[0].name
            }
        },
        mounted(){
            const url1 = './php/backend7pop.php';
            fetch(url1)
                .then(response => response.json())
                .then((text) =>{
                    this.list = text
            } );
        }
})
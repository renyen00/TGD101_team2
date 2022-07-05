Vue.component('back6',{
    props:['h1'],
    template:`
        <main class="backend_main">
            <div class="backend_main_top">
                <h1>{{h1}}</h1>              
                <h3 class="click">登出</h3>
            </div>

            <backf></backf>
        </main>
        `,
    methods:{
    }
    })

Vue.component('backf',{
    data(){
        return{
            infor:[],
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
                    <td>會員編號</td>
                    <td>暱稱</td>
                    <td>姓名</td>
                    <td>信箱</td>
                    <td>違規次數</td>
                    <td>停權</td>
                    <td>詳細</td>
                </tr>
                <tr v-for="(val,i) in infor" :data-n='i'>
                    <td>{{val[0]}}</td>
                    <td>{{val[1]}}</td>
                    <td>{{val[2]}}</td>
                    <td>{{val[3]}}</td>
                    <td>{{val[4]}}</td>
                    <td>
                        <label class="backend_switch">
                            <input type="checkbox" :checked='val[4]>2'>
                            <span class="backend_slider backend_round"></span>
                        </label>
                    </td>
                    <p @click="chgpop">詳細</p>
                </tr>
            </table> 
            <popf1 :infor="popup"></popf1>
        </div>
        `,
        methods:{
            chgpop(e){
                let i = e.target.closest('tr').dataset.n
                this.popup = this.infor[i]
                document.querySelector('.backend_div_popup').classList.add('backend_show')
            },
        },
        mounted() {
            const url1 = './php/backend6.php';
            fetch(url1)
                .then(response => response.json())
                .then((text) =>{
                    this.infor = text
                } );
        },
    })
Vue.component('popf1',{
        props:['infor'],
        template:`
        <div class="backend_div_popup">
            <section>
                <i class="fa-solid fa-x" @click='close'></i>
                <div class="backend_product">
                    <ul>
                        <li><h2>會員編號：</h2><h3>{{infor[0]}}</h3></li>
                        <li><h2>信箱：</h2><h3>{{infor[3]}}</h3></li>
                        <li><h2>暱稱：</h2><h3>{{infor[1]}}</h3></li>
                        <li><h2>姓名：</h2><h3>{{infor[2]}}</h3></li>
                        <li><h2>電話號碼：</h2><h3>{{infor[5]}}</h3></li>
                        <li><h2>違規次數：</h2><h3>{{infor[4]}}</h3></li>
                        <li><h2>上次登入：</h2><h3>{{infor[6]}}</h3></li>
                    </ul>
                    <div class="backend_pop_right">
                        <img :src="infor[7]" class="backend_avatar">
                    </div>
                </div>       
                
                <img class="backend_img_bird_sp " src="./images/emojione-v1_bird.jpg">
                <button class="back_btnM" @click='close'>關閉</button>
            </section>
        </div>
            `,
        methods:{
            close(e){
                e.target.closest('div.backend_div_popup').classList.remove('backend_show')
            }
        }
    })
    
        
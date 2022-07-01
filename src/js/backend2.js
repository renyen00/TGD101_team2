Vue.component('back2',{
    props:['h1'],
    data(){
        return{
            content:'',
            php:[],
            php2:[],
        }
    },
    template:`
        <main class="backend_main">
            <div class="backend_main_top">
                <h1>{{h1}}</h1>            
                <h3 class="click">登出</h3>
            </div>
            <btn2 @chg='change'></btn2>

            <component :is='content' :infor='php' :infor2='php2'></component>
            
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
        const url1 = './php/backend2_1.php';
        fetch(url1)
            .then(response => response.json())
            .then((text) =>{
                this.php = text
            } );
        const url2 = './php/backend2_2.php';
        fetch(url2)
            .then(response => response.json())
            .then((text) =>{
                this.php2 = text
            } );
    },
})


Vue.component('btn2',{
data(){
    return{
        con:['待處理','已處理']
    }
},
template:`
<ul class="backend_ul_page">
    <li class="back_btnL"  v-for="(value,i) in con" :data-n="'backb'+ (i+1)" @click="change">{{value}}</li>
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

Vue.component('backb1',{
    props:['infor'],
    data(){
        return{
            popup:[],
        }
    },
    template:`
        <div>
            <ul class="backend_ul_sort">
                <li>全部↓</li>
                <li>審核↓</li>
            </ul>
            <table>
                <tr>
                    <td>檢舉編號</td>
                    <td>文章編號</td>
                    <td>檢舉人</td>
                    <td>檢舉時間</td>
                    <td>檢舉原因</td>
                    <td>審核狀態</td>
                    <td>詳細</td>
                </tr>
                <tr v-for="(val,i) in infor" :data-n='i'>
                    <td>{{val[0]}}</td>
                    <td>{{val[1]}}</td>
                    <td>{{val[2]}}</td>
                    <td>{{val[3]}}</td>
                    <td>{{val[4]}}</td>
                    <td>{{val[5]}}</td>
                    <p @click='chgpop'>詳細</p>
                </tr>
            </table>
            <popb1 :infor='popup'></popb1>
        </div>
        `,
        methods:{
            chgpop(e){
                let i = e.target.closest('tr').dataset.n
                this.popup = this.infor[i]
                document.querySelector('.backend_div_popup').classList.add('backend_show')
            }
        }
    })
Vue.component('backb2',{
    props:['infor2'],
    template:`
        <div>
            <ul class="backend_ul_sort">
                <li>全部↓</li>
                <li>審核↓</li>
            </ul>
            <table>
                <tr>
                    <td>檢舉編號</td>
                    <td>文章編號</td>
                    <td>檢舉人</td>
                    <td>檢舉時間</td>
                    <td>檢舉原因</td>
                    <td>審核狀態</td>
                    <td>詳細</td>
                </tr>
                <tr v-for="(val,i) in infor2" :data-n='i'>
                    <td>{{val[0]}}</td>
                    <td>{{val[1]}}</td>
                    <td>{{val[2]}}</td>
                    <td>{{val[3]}}</td>
                    <td>{{val[4]}}</td>
                    <td>{{val[5]}}</td>
                    <p @click='chgpop'>詳細</p>
                </tr>
            </table> 
        </div>
        `,
    })
Vue.component('popb1',{
        props:['infor'],
        template:`
        <div class="backend_div_popup">
            <section>
                <i class="fa-solid fa-x" @click='close'></i>
                <ul>
                    <li><h2>發文人</h2><h3>{{infor[6]}}</h3></li>
                    <h2>被檢舉內容</h2>
                </ul>
                <div class="backend_div_content">
                    <p>{{infor[7]}}</p>
                    
                </div>
                <ul>
                    <li><h2>檢舉人</h2><h3>{{infor[2]}}</h3></li>
                    <li><h2>檢舉原因</h2></li>
                </ul>
                <div class="backend_div_content">
                    <p>{{infor[4]}}</p>
                    <img class="backend_img_bird" src="./images/emojione-v1_bird.jpg">
                </div>
                <div class="backend_pass">
                    <input type="radio" name="pass">通過
                    <input type="radio" name="pass">駁回
                </div>
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
Vue.component('popb2',{
    props:['infor'],
    template:`
    <div class="backend_div_popup">
    <section>
        <i class="fa-solid fa-x" @click='close'></i>
        <ul>
            <li><h2>發文人</h2><h3>{{infor[6]}}</h3></li>
            <h2>被檢舉內容</h2>
        </ul>
        <div class="backend_div_content">
            <p>{{infor[7]}}</p>
            
        </div>
        <ul>
            <li><h2>檢舉人</h2><h3>{{infor[2]}}</h3></li>
            <li><h2>檢舉原因</h2></li>
        </ul>
        <div class="backend_div_content">
            <p>{{infor[4]}}</p>
            <img class="backend_img_bird" src="./images/emojione-v1_bird.jpg">
        </div>
        <div class="backend_pass">
            <h3>{{infor[5]}}</h3>
        </div>
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

    
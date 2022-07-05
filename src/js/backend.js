Vue.component('back1',{
    props:['h1'],
    data(){
        return{
            content:'',
            php:[],
            php2:[],
            php3:[],
            php4:[],
        }
    },
    template:`
        <main class="backend_main">
            <div class="backend_main_top">
                <h1>{{h1}}</h1>              
                <h3 class="click">登出</h3>
            </div>
            <btn @chg='change'></btn>

            <component :is='content'  :infor='php' :infor2='php2' :infor3='php3' :infor4='php4'></component>
            
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
        const url1 = './php/backend1_1.php';
        fetch(url1)
            .then(response => response.json())
            .then((text) =>{
                this.php = text
            } );
        const url2 = './php/backend1_2.php';
        fetch(url2)
            .then(response => response.json())
            .then((text) =>{
                this.php2 = text
            } );
        const url3 = './php/backend1_3.php';
        fetch(url3)
            .then(response => response.json())
            .then((text) =>{
                this.php3 = text
            } );
        const url4 = './php/backend1_4.php';
        fetch(url4)
            .then(response => response.json())
            .then((text) =>{
                this.php4 = text
            } ); 
    },
})

Vue.component('btn',{
    data(){
        return{
            con:['貼文管理','會員詢問','官方公告','智慧客服']
        }
    },
    template:`
    <ul class="backend_ul_page">
        <li class="back_btnL"  v-for="(value,i) in con" :data-n="'backa'+ (i+1)" @click="change">{{value}}</li>
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

Vue.component('backa1',{
    props:['infor'],
    data(){
        return{
            popup:[],
            index:'',
        }
    },
    template:`
        <div>
            <table>
                <tr>
                    <td>文章編號</td>
                    <td>貼文位置</td>
                    <td>發文帳號</td>
                    <td>發文時間</td>
                    <td>詳細</td>
                </tr>
                <tr v-for="(val,i) in infor" :data-n='i'>
                    <td>{{val[0]}}</td>
                    <td>{{val[1]}}</td>
                    <td>{{val[2]}}</td>
                    <td>{{val[3]}}</td>
                    <p @click='chgpop'>詳細</p>
                </tr>
            </table>
            <popa1 :infor='popup' :index='index' @del="pop"></popa1>
        </div>
        `,
        methods:{
            chgpop(e){
                let i = e.target.closest('tr').dataset.n
                this.popup = this.infor[i]
                this.index = i
                document.querySelector('.backend_div_popup').classList.add('backend_show')
            },
            pop(i){
                this.infor.splice(i,1)
            }
        }
    })
Vue.component('backa2',{
    props:['infor2'],
    data(){
        return{
            popup:[],
        }
    },
    template:`
        <div>
            <table>
                <tr>
                    <td>來函編號</td>
                    <td>標題</td>
                    <td>來函帳號</td>
                    <td>來函時間</td>
                    <td>回覆狀態</td>
                    <td>詳細</td>
                </tr>
                <tr v-for="(val,i) in infor2" :data-n='i'>
                    <td>{{val[0]}}</td>
                    <td>{{val[1]}}</td>
                    <td>{{val[2]}}</td>
                    <td>{{val[3]}}</td>
                    <td>{{val[4]}}</td>
                    <p @click='chgpop'>詳細</p>
                </tr>
            </table>
            <popa2 :infor='popup'></popa2>
        </div>
        `,
        methods:{
            chgpop(e){
                let i = e.target.closest('tr').dataset.n
                this.popup = this.infor2[i]
                document.querySelector('.backend_div_popup').classList.add('backend_show')
            }
        }
    })
Vue.component('backa3',{
    props:['infor3'],
    data(){
        return{
            popup:[],
            item:[],
        }
    },
    template:`
        <div>
            <ul class="backend_ul_sort">
                <button class="backend_btn_add back_btnS" @click='chg'>新增</button>
            </ul>
            <table>
                <tr>
                    <td>公告編號</td>
                    <td>標題</td>
                    <td>發布時間</td>
                    <td>詳細</td>
                </tr>
                <tr v-for="(val,i) in infor3" :data-n='i'>
                    <td>{{val[0]}}</td>
                    <td>{{val[1]}}</td>
                    <td>{{val[3]}}</td>
                    <p @click='chgpop'>詳細</p>
                </tr>
            </table>
            <popa3 @up='sub'></popa3>
            <popa3_1 :infor='popup' ></popa3_1>

        </div>
        `,
        methods:{
            chgpop(e){
                let i = e.target.closest('tr').dataset.n
                this.popup = this.infor3[i]
                document.querySelector('.backend_popup').classList.add('backend_show')
            },
            chg(){
                document.querySelector('.backend_div_popup').classList.add('backend_show')
            },
            sub(){  
                    setTimeout(() =>{
                        const url3 = './php/backend1_3.php';
                        fetch(url3)
                        .then(response => response.json())
                        .then((text) =>{
                            this.item = text
                        } );
                    },500)
            }
        },
        watch:{
            item(){
                this.infor3.unshift(this.item[0])
            }
        }
    })
Vue.component('backa4',{
        props:['infor4'],
        data(){
            return{
                item:[],      
            }
        },
        template:`
        <table>
            <tr>
                <td>編號</td>
                <td>關鍵字</td>
                <td>回覆內容</td>
                <td> </td>
                <td> </td>
            </tr>
            <tr v-for="val in infor4" :data-n='val[0]'>
                <td>{{val[0]}}</td>
                <td class='tog'><input class='back_a4 backend_hide' v-model='val[1]'><h5>{{val[1]}}</h5></td>
                <td class='tog'><input class='back_a4 backend_hide' v-model='val[2]'><h5>{{val[2]}}</h5></td>
                <td>
                    <button class="back_btnS" @click='sure'>編輯</button>
                    <button class="back_btnS backend_hide justswitch" @click='toggle'>取消</button>
                    <button class="back_btnS justswitch" @click='del'>刪除</button>
                </td>
            </tr>
            <tr>
                <td></td>
                <td><input placeholder="關鍵字" class='back_a4'></td>
                <td><input placeholder="回覆內容" class='back_a4'></td>
                <td>
                    <button class="back_btnS" @click='plus'>新增</button>
                    <button class="back_btnS" @click='clear'>清除</button>
                </td>
            </tr>
    
        </table>
            `,
        methods:{
            clear(e){
                e.target.closest('tr').querySelectorAll('input')[0].value ='',
                e.target.closest('tr').querySelectorAll('input')[1].value =''
                
            },
            del(e){
                let n = e.target.closest('tr').dataset.n

                const url = `./php/backend1_insert.php?quest=4&n=${n}`;
                fetch(url)
                e.target.closest('tr').remove()
            },
            plus(e){
                let val = e.target.closest('tr').querySelectorAll('input')
                const url = `./php/backend1_insert.php?quest=3&a=${val[0].value}&b=${val[1].value}`;
                fetch(url)
                setTimeout(() =>{
                    const url3 = './php/backend1_4.php';
                    fetch(url3)
                    .then(response => response.json())
                    .then((text) =>{
                        this.item = text
                    } );
                },500)
            },
            sure(e){
                let val = e.target.closest('tr').querySelectorAll('input')
                let n = e.target.closest('tr').dataset.n
                const url = `./php/backend1_insert.php?quest=2&i=${n}&a=${val[0].value}&b=${val[1].value}`;
                fetch(url)
                this.toggle(e)
            },
            toggle(e){
                    let btn = e.target.closest('td').querySelectorAll('.justswitch')
                    for(let i of btn){
                        i.classList.toggle('backend_hide')
                    }
                    let txt = e.target.closest('tr').querySelectorAll('input')
                    let p = e.target.closest('tr').querySelectorAll('h5')
                    for(let i of txt){
                        i.classList.toggle('backend_hide')
                    }
                    for(let i of p){
                        i.classList.toggle('backend_hide')
                    }
                }
            },
            watch:{
                item(){
                    let n = this.item.length -1
                    this.infor4.push(this.item[n])
                }
            }
        }
)
Vue.component('popa1',{
    props:['infor','index'],
    template:`
    <div class="backend_div_popup">
        <section>
            <i class="fa-solid fa-x" @click='close'></i>
            <ul>
                <li><h2>留言位置</h2><h3>{{infor[1]}}</h3></li>
                <li><h2>留言時間</h2><h3>{{infor[2]}}</h3></li>
                <li><h2>留言者</h2><h3>{{infor[3]}}</h3></li>
            </ul>
            <div class="backend_div_content">
                <p>{{infor[4]}}</p>
                <img class="backend_img_bird" src="./images/emojione-v1_bird.jpg">
            </div>
            <button class="backend_btn_dosomething_red" @click='del'>刪除留言</button>
            <button class="back_btnM" @click='close'>關閉</button>
        </section>
    </div>
            `,
    methods:{
        close(e){
            e.target.closest('div.backend_div_popup').classList.remove('backend_show')
        },
        del(e){
            
            if(confirm('確定刪除?')){
                const url = `./php/backend1_insert.php?quest=5&n=${this.infor[0]}`;
                fetch(url)
                this.$emit('del',this.index)
                this.close(e)
            };
        }
    }
})
Vue.component('popa2',{
    props:['infor'],
    template:`
    <div class="backend_div_popup">
        <section>
            <i class="fa-solid fa-x" @click='close'></i>
            <ul>
                <li><h2>會員</h2><h3>{{infor[2]}}</h3></li>
                <li><h2>來函時間</h2><h3>{{infor[3]}}</h3></li>
                <li><h2>標題</h2><h3>{{infor[1]}}</h3></li>
                <h2>來函內容</h2>
            </ul>
            <div class="backend_div_content">
                <p>{{infor[5]}}</p>
                <img class="backend_img_bird" src="./images/emojione-v1_bird.jpg">
            </div>
            <h2>回覆</h2>
            <textarea cols="30" rows="10" v-model='infor[6]'></textarea>
            <input type="submit" value="回覆" class="backend_btn_dosomething_blue" @click='sub'>
            <button class="back_btnM" @click='close'>關閉</button>
        </section>
    </div>
            `,
    methods:{
        sub(e){
            const url = `./php/backend1_insert.php?quest=6&id=${this.infor[0]}&content=${this.infor[6]}`;
                fetch(url)
            this.close(e)
        },

        close(e){
            e.target.closest('div.backend_div_popup').classList.remove('backend_show')
        }
    }
})
Vue.component('popa3',{
    data(){
        return{
            title:'',
            cont:'',
        }
    },
    template:`
    <div class="backend_div_popup">
        <section>
            <i class="fa-solid fa-x" @click='close'></i>
            <h2>標題</h2>
            <input type="text" v-model='title'>
            <h2>內容</h2>
            <div class="backend_div_content_text">
                <textarea cols="30" rows="10" v-model='cont'></textarea>
                <img class="backend_img_bird" src="./images/emojione-v1_bird.jpg">
            </div>
            
            <input type="submit" value="發送" class="backend_btn_dosomething_blue" @click='sub'>
            <button class="back_btnM" @click='close'>關閉</button>
        </section>
    </div>
            `,
    methods:{
        close(e){
            e.target.closest('div.backend_div_popup').classList.remove('backend_show')
        },
        sub(e){

            const url = `./php/backend1_insert.php?quest=1&title=${this.title}&content=${this.cont}`;
            fetch(url)

            this.$emit('up')
            this.close(e)
        }
    }
})
Vue.component('popa3_1',{
    props:['infor'],
    template:`
    <div class="backend_div_popup backend_popup">
        <section>
            <i class="fa-solid fa-x" @click='close'></i>
            <ul>
                <li><h2>標題</h2><h3>{{infor[1]}}</h3></li>
                <li><h2>發布時間</h2><h3>{{infor[3]}}</h3></li>
                <h2>內容</h2>
            </ul>
            <div class="backend_div_content">
                <p>{{infor[2]}}</p>
                <img class="backend_img_bird" src="./images/emojione-v1_bird.jpg">
            </div>
            
            <button class="back_btnM" @click='close'>關閉</button>
        </section>
    </div>
            `,
    methods:{
        close(e){
            e.target.closest('div.backend_popup').classList.remove('backend_show')
        }
    }
})        
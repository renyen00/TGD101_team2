Vue.component('back3',{
    props:['h1'],
    data(){
        return{
            content:''
        }
    },
    template:`
        <main class="backend_main">
            <div class="backend_main_top">
                <h1>{{h1}}</h1>              
                
                <h3 class="click">登出</h3>
            </div>


            <backc></backc>
            
        </main>
        `,
    methods:{
    }
    })

Vue.component('backc',{
    data(){
        return{
            infor:[],
            popup:[],
        }
    },
    template:`
        <div>
            <ul class="backend_ul_sort">
                <li>全部↓</li>
                <li>最新↓</li>
                <li>上架↓</li>
                <div class="backend_ul_right">
                    <input class='backend_input_search'type="text" placeholder="search">
                    <button class="backend_btn_add back_btnS">新增</button>
                </div>
            </ul>
            <table>
                <tr>
                    <td>商品編號</td>
                    <td>品名</td>
                    <td>價格</td>
                    <td>上架狀態</td>
                    <td>編輯</td>
                </tr>
                <tr v-for="(val,i) in infor" :data-n='i'>
                    <td>{{infor[i][0]}}</td>
                    <td>{{infor[i][1]}}</td>
                    <td>{{infor[i][2]}}</td>
                    <td>
                        <label class="backend_switch">
                            <input type="checkbox" :checked="infor[i][4]">
                            <span class="backend_slider backend_round"></span>
                        </label>
                    </td>
                    <p @click='chgpop'>編輯</p>
                </tr>
            </table> 
            <popc1 :infor='popup'></popc1>
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
            const url1 = './php/backend3.php';
            fetch(url1)
                .then(response => response.json())
                .then((text) =>{
                    this.infor = text
                } );
        },
    })
    Vue.component('popc1',{
        props:['infor'],
        template:`
        <div class="backend_div_popup">
        <section>
            <i class="fa-solid fa-x" @click='close'></i>
            <div class="backend_product">
                <ul>
                    <li><h2>編號</h2> <input v-model="infor[0]"></li>
                    <li><h2>品名</h2> <input v-model="infor[1]"></li>
                    <li><h2>價格</h2> <input v-model="infor[2]"></li>
                    <li><h2>種類</h2> <input v-model="infor[5]"></li>
                    <li><h2>材質</h2> <input v-model="infor[6]"></li>
                </ul>
                <div class="backend_pop_right">
                    <h3>顏色</h3>
                    <ul>
                        <li><h3>白:</h3><input type="file" @change='file' data-n='7'></li>
                        <li><h3>黃:</h3><input type="file" @change='file' data-n='8'></li>
                        <li><h3>藍:</h3><input type="file" @change='file' data-n='9'></li>
                    </ul>
                </div>
                
                
            </div>
            <div class="backend_product">
                <input type="radio" v-model="infor[4]" value='1'><h3>上架</h3>
                <input type="radio" v-model="infor[4]" value='0'><h3>下架</h3>
            </div>
            <h3>商品描述</h3>
            <textarea cols="30" rows="10" class="backend_div_content">
            </textarea>
          
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
        }
})
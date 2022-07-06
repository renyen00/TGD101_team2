Vue.component('back3',{
    props:['h1'],
    template:`
        <main class="backend_main">
            <div class="backend_main_top">
                <h1>{{h1}}</h1>              
                
                <h3 class="click">登出</h3>
            </div>


            <backc></backc>
            
        </main>
        `,
    })

Vue.component('backc',{
    data(){
        return{
            infor:[],
            popup:[],
            item:'',
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
                    <td>商品編號</td>
                    <td>品名</td>
                    <td>價格</td>
                    <td>上架狀態</td>
                    <td>編輯</td>
                </tr>
                <tr v-for="(val,i) in infor" :data-n='i' :data-index='val[0]'>
                    <td>{{val[0]}}</td>
                    <td>{{val[1]}}</td>
                    <td>{{val[2]}}</td>
                    <td>
                        <label class="backend_switch">
                            <input type="checkbox" v-model='val[4]' :true-value="1" :false-value="0" @click='status'>
                            <span class="backend_slider backend_round"></span>
                        </label>
                    </td>
                    <p @click='chgpop'>編輯</p>
                </tr>
            </table> 
            <popc1 :infor='popup,item' ></popc1>
        </div>
        `,
        methods:{
            status(e){
                let i = e.target.closest('tr').dataset.index
                let ox;
                if(e.target.checked){
                    ox = 1
                }else(
                    ox = 0
                )
                const url = `./php/backend3_insert.php?quest=1&id=${i}&s=${ox}`;
                fetch(url)
            },

            chgpop(e){
                let i = e.target.closest('tr').dataset.n
                this.popup = this.infor[i]
                document.querySelector('.backend_div_popup').classList.add('backend_show')
                this.item = 0
            },
            chg(){
                document.querySelector('.backend_div_popup').classList.add('backend_show')
                this.popup = []
                this.item = 1
            }
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
        props:['infor','item'],
        data(){
            return{
                list:['服飾','配件','其他'],
                image:'',
            }
        },
        template:`
        <div class="backend_div_popup">
            <section>
                <i class="fa-solid fa-x" @click='close'></i>
                <div class="backend_product">
                    <ul>
                        <li><h2>編號</h2> <h3>{{infor[0]}}</h3></li>
                        <li><h2>品名</h2> <input v-model="infor[1]"></li>
                        <li><h2>價格</h2> <input v-model="infor[2]"></li>
                        <li><h2>種類</h2> 
                            <select v-model='infor[5]'>
                                <option v-for="(val,i) in list" :value='i+1'>{{val}}</option>
                            </select>
                        </li>
                        <li><h2>材質</h2> <input v-model="infor[6]"></li>
                    </ul>
                    <div class="backend_pop_right">
                        <h3>顏色</h3>
                        <ul>
                            <li><h3>白:</h3><input type="file" @change='file' data-n='7'></li>
                            <li><h3>黃:</h3><input type="file" @change='file' data-n='8'></li>
                            <li><h3>藍:</h3><input type="file" @change='file' data-n='9'></li>
                            <li><img :src="infor[7]"><img :src="infor[8]"><img :src="infor[9]"></li>
                        </ul>
                        
                    </div>
                    
                    
                </div>
                <div class="backend_product">
                    <input type="radio" v-model="infor[4]" value='1'><h3>上架</h3>
                    <input type="radio" v-model="infor[4]" value='0'><h3>下架</h3>
                </div>
                <h3>商品描述</h3>
                <textarea cols="30" rows="10" class="backend_div_content" v-model="infor[3]">
                </textarea>
            
                <div class="backend_pop_bottom">
                    <p class="back_btnS" @click='close'>取消</p>
                    <p class="back_btnS" @click='save'>儲存</p>
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
                let file = e.target.files[0]
                let readFile = new FileReader()
                    readFile.readAsDataURL(file)
                    readFile.addEventListener('load', this.loadImage)
            },
            loadImage(e){
                this.image = e.target.result
            },
            save(e){

                if(this.item == 1 && this.infor[0] !='' && this.infor[1] !='' && this.infor[2] !='' && this.infor[3] !='' && this.infor[4] !='' && this.infor[5] !='' && this.infor[6] !=''){
                    const url = `./php/backend3_insert.php?quest=2&name=${this.infor[1]}&price=${this.infor[2]}&text=${this.infor[3]}&status=${this.infor[4]}&type=${this.infor[5]}&material=${this.infor[6]}&pic=${this.infor[7]}&pic2=${this.infor[8]}&pic3=${this.infor[9]}`;
                    fetch(url, {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({
                            postType: 'insertData',
                            PICTURE: this.image,
                        })
                        })
                    this.close(e)
                }else if(this.item == 0){
                    const url = `./php/backend3_insert.php?quest=3&id=${this.infor[0]}&name=${this.infor[1]}&price=${this.infor[2]}&text=${this.infor[3]}&status=${this.infor[4]}&type=${this.infor[5]}&material=${this.infor[6]}&pic=${this.infor[7]}&pic2=${this.infor[8]}&pic3=${this.infor[9]}`;
                    fetch(url, {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({
                            postType: 'insertData',
                            PICTURE: this.image,
                        })
                    })
                    this.close(e)
                }
            }
        }
})
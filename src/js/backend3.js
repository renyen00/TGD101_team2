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
            php:[],
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
                    <td>庫存</td>
                    <td>上架狀態</td>
                    <td>編輯</td>
                </tr>
                <tr>
                    <td>商品編號</td>
                    <td>品名</td>
                    <td>價格</td>
                    <td>庫存</td>
                    <td>
                        <label class="backend_switch">
                            <input type="checkbox">
                            <span class="backend_slider backend_round"></span>
                        </label>
                </td>
                    <td>編輯</td>
                </tr>
            </table> 
        </div>
        `,
        mounted() {
            const url1 = './php/backend3.php';
            fetch(url1)
                .then(response => response.json())
                .then((text) =>{
                    this.php = text
                } );
        },
    })

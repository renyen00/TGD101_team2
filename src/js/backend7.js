Vue.component('back7',{
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
            <backg></backg>            
        </main>
        `,
    methods:{
        
    }
    })
Vue.component('backg',{
    template:`
        <div>
            <ul class="backend_ul_sort">
                <li>全部↓</li>
                <li>帳號↓</li>
                <li>停權↓</li>
                <div class="backend_ul_right">
                    <input class='backend_input_search'type="text" placeholder="search">
                    <button class="backend_btn_add back_btnS">新增</button>
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
                <tr>
                    <td>景點編號</td>
                    <td>名稱</td>
                    <td>
                        <img class="backend_img_preview" src="./images/" alt="">
                    </td>
                    <td>類別</td>
                    <td>人數</td>
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
    })

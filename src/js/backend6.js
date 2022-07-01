Vue.component('back6',{
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

            <backf></backf>
            
        </main>
        `,
    methods:{
    }
    })

Vue.component('backf',{
    template:`
        <div>
            <ul class="backend_ul_sort">
                <li>全部↓</li>
                <li>帳號↓</li>
                <li>停權↓</li>
                <input class='backend_input_search'type="text" placeholder="search">
            </ul>
            <table>
                <tr>
                    <td>會員編號</td>
                    <td>暱稱</td>
                    <td>姓名</td>
                    <td>帳號</td>
                    <td>信箱</td>
                    <td>權限</td>
                    <td>違規次數</td>
                    <td>停權</td>
                    <td>詳細</td>
                </tr>
                <tr>
                    <td>會員編號</td>
                    <td>暱稱</td>
                    <td>姓名</td>
                    <td>帳號</td>
                    <td>信箱</td>
                    <td>權限</td>
                    <td>違規次數</td>
                    <td>
                        <label class="backend_switch">
                            <input type="checkbox">
                            <span class="backend_slider backend_round"></span>
                        </label>
                    </td>
                    <td>詳細</td>
                </tr>
            </table> 
        </div>
        `,
    })

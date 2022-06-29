Vue.component('back5',{
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
            <btn5 @chg='change'></btn5>

            <component :is='content'></component>
            
        </main>
        `,
    methods:{
        change(e,page){
            $('.backend_ul_page').find('.nowpage').removeClass('nowpage');
            e.classList.add('nowpage')
            this.content = page
        },
    }
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
    template:`
        <div>
            <ul class="backend_ul_sort">
                <li>全部↓</li>
                <li>發起人↓</li>
                <li>景點↓</li>
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
            </table> 
        </div>
        `,
    })
Vue.component('backe2',{
    props:[],
    template:`
        <div>
            <ul class="backend_ul_sort">
                <li>全部↓</li>
                <li>發起人↓</li>
                <li>景點↓</li>
                <div class="backend_ul_right">
                    <input class='backend_input_search'type="text" placeholder="search">
                    <button class="backend_btn_add back_btnS">新增</button>
                </div>
            </ul>
            <table>
                <tr>
                    <td>揪團編號</td>
                    <td>發起人</td>
                    <td>發起日齊</td>
                    <td>截止日期</td>
                    <td>景點</td>
                    <td>參與人數</td>
                    <td>揪團狀態</td>
                    <td>詳細</td>
                </tr>
            </table> 
        </div>
        `,
    })
Vue.component('backe3',{
    props:[],
    template:`
        <div>
            <ul class="backend_ul_sort">
                <li>全部↓</li>
                <li>發起人↓</li>
                <li>揪團狀態↓</li>
                <input class='backend_input_search'type="text" placeholder="search">
            </ul>
            <table>
                <tr>
                    <td>揪團編號</td>
                    <td>發起人</td>
                    <td>發起日齊</td>
                    <td>截止日期</td>
                    <td>景點</td>
                    <td>參與人數</td>
                    <td>揪團狀態</td>
                    <td>詳細</td>
                </tr>
            </table> 
        </div>
        `,
    })

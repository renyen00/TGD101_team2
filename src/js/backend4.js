Vue.component('back4',{
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
            <btn4 @chg='change'></btn4>

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


Vue.component('btn4',{
data(){
    return{
        con:['處理中','歷史訂單']
    }
},
template:`
<ul class="backend_ul_page">
    <li class="back_btnL"  v-for="(value,i) in con" :data-n="'backd'+ (i+1)" @click="change">{{value}}</li>
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

Vue.component('backd1',{
    template:`
        <div>
            <ul class="backend_ul_sort">
                <li>全部↓</li>
                <li>付款狀態</li>
                <li>出貨狀態</li>
                <input class='backend_input_search'type="text" placeholder="search">
            </ul>
            <table>
                <tr>
                    <td>訂單編號</td>
                    <td>帳號</td>
                    <td>姓名</td>
                    <td>付款狀態</td>
                    <td>訂單狀態</td>
                    <td>出貨狀態</td>
                    <td>總金額</td>
                    <td>詳細</td>
                </tr>
            </table> 
        </div>
        `,
    })
Vue.component('backd2',{
    props:[],
    template:`
        <div>
            <ul class="backend_ul_sort">
                <li>全部↓</li>
                <li>訂單狀態↓</li>
                <input class='backend_input_search'type="text" placeholder="search">
            </ul>
            <table>
                <tr>
                    <td>訂單編號</td>
                    <td>帳號</td>
                    <td>姓名</td>
                    <td>付款狀態</td>
                    <td>訂單狀態</td>
                    <td>出貨狀態</td>
                    <td>總金額</td>
                    <td>詳細</td>
                </tr>
            </table> 
        </div>
        `,
    })

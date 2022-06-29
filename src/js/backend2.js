Vue.component('back2',{
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
            <btn2 @chg='change'></btn2>

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
                </tr>
            </table> 
        </div>
        `,
    })
Vue.component('backb2',{
    props:[],
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
                </tr>
            </table> 
        </div>
        `,
    })

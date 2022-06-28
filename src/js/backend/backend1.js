Vue.component('backa1',{
    props:['content'],
    template:`
        <div>
            <ul class="backend_ul_sort">
                <li>全部↓</li>
                <li>最新↓</li>
                <li>區域↓</li>
            </ul>
            <table>
                <tr>
                    <td>文章編號</td>
                    <td>貼文位置</td>
                    <td>發文帳號</td>
                    <td>發文時間</td>
                    <td>詳細</td>
                </tr>
            </table>
        </div>
        `,
    })
Vue.component('backa2',{
    props:[],
    template:`
        <div>
            <ul class="backend_ul_sort">
                <li>全部↓</li>
                <li>最新↓</li>
                <li>回覆狀態↓</li>
            </ul>
            <table>
                <tr>
                    <td>來函編號</td>
                    <td>標題</td>
                    <td>來函帳號</td>
                    <td>來函時間</td>
                    <td>回覆狀態</td>
                    <td>詳細</td>
                </tr>
            </table>
        </div>
        `,
    })
Vue.component('backa3',{
    props:[],
    template:`
        <div>
            <ul class="backend_ul_sort">
                <li>全部↓</li>
                <li>最新↓</li>
                <li>類型↓</li>
                <button class="backend_btn_add back_btnS">新增</button>
            </ul>
            <table>
                <tr>
                    <td>公告編號</td>
                    <td>標題</td>
                    <td>類型</td>
                    <td>發布時間</td>
                    <td>詳細</td>
                </tr>
            </table>
        </div>
        `,
    })
Vue.component('backa4',{
        props:[],
        template:`
        <table>
            <tr>
                <td>編號</td>
                <td>關鍵字</td>
                <td>回覆內容</td>
                <td> </td>
                <td> </td>
            </tr>
            <tr>
                <td>1</td>
                <td>關鍵字</td>
                <td>回覆內容</td>
                <td>
                    <button class="back_btnS">編輯</button>
                    <button class="back_btnS">刪除</button>
                </td>
            </tr>        
        </table>
            `,
        })
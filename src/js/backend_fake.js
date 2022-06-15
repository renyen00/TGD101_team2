

let page = document.querySelectorAll('.backend_li_left')
let main = document.querySelector('.backend_main');




for(let i = 0 ;i < page.length;i++){
    page[i].addEventListener('click',()=>{
        
        if( i == 0 ){
            main.innerHTML =`
            <div class="backend_main_top">
                <h1>貼文管理</h1>
                
                <i class="fa-regular fa-bell click"></i>
                <h2 class="click">登出</h3>
            </div>
            <ul class="backend_ul_page">
                <li class="back_btnL">貼文管理</li>
                <li class="back_btnL">會員詢問</li>
                <li class="back_btnL">官方公告</li>
                <li class="back_btnL">智慧客服</li>
            </ul>
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
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <ul class="backend_ul_more">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        `
        }
        else if(i == 1){
            main.innerHTML =`
            <div class="backend_main_top">
    <h1>檢舉審核</h1>
    
    <i class="fa-regular fa-bell click"></i>
    <h2 class="click">登出</h3>
</div>
<ul class="backend_ul_page">
    <li class="back_btnL">待處理</li>
    <li class="back_btnL">已處理</li>
</ul>
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
    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr><tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
                
</table> 
           
        `
        }
        else if(i == 2){
            main.innerHTML =`
            <div class="backend_main_top">
    <h1>商品管理</h1>
    
    <i class="fa-regular fa-bell click"></i>
    <h2 class="click">登出</h3>
</div>
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
    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
              
</table> 
           
        `
        }
        else if(i == 3){
            main.innerHTML =`
            
            <div class="backend_main_top">
            <h1>訂單管理</h1>
            
            <i class="fa-regular fa-bell click"></i>
            <h2 class="click">登出</h3>
        </div>
        <ul class="backend_ul_page">
            <li class="back_btnL">處理中</li>
            <li class="back_btnL">歷史訂單</li>
        </ul>
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
            <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr><tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td><td></td><td></td>
            </tr>
        </table> 
        `
        }
        else if(i == 4){
            main.innerHTML =`
            
            <div class="backend_main_top">
            <h1>揪團管理</h1>
            
            <i class ="fa-regular fa-bell click"></i>
            <h2 class="click">登出</h3>
        </div>
        <ul class="backend_ul_page">
            <li class="back_btnL">揪團清單</li>
            <li class="back_btnL">官方活動</li>
            <li class="back_btnL">歷史紀錄</li>
        </ul>
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
                <td>發起日齊</td>
                <td>截止日期</td>
                <td>景點</td>
                <td>參與人數</td>
                <td>揪團狀態</td>
                <td>詳細</td>
            </tr>
            <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr><tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
        </table> 
        `
        }
        else if(i == 5){
            main.innerHTML =`
            <div class="backend_main_top">
    <h1>會員管理</h1>
    
    <i class="fa-regular fa-bell click"></i>
    <h2 class="click">登出</h3>
</div>
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
           
        `
        }
        else if(i == 6){
            main.innerHTML =`
            
            <div class="backend_main_top">
            <h1>景點管理</h1>
            
            <i class="fa-regular fa-bell click"></i>
            <h2 class="click">登出</h3>
        </div>
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
        `
        }

    })    
}
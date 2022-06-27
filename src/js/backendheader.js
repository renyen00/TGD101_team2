Vue.component('backheader',{
    props:['content'],
    template:`
    <header class="backend_header">
        <div class="click">
            <a href="./index.html">
                <img src="./images/LogoProto_WW 3.png" alt="">
                <p>鳥語鳥嶼</p>
            </a>
        </div>
        <nav>
            <ul>
                <li class="backend_li_left click backend_header_now" data-n="back1" @click="ch">
                    <i class="fa-solid fa-comment"></i>
                    <h3>貼文管理</h3>
                    <span class="iconify" data-icon="fa-solid:kiwi-bird"></span>
                </li>
                <li class="backend_li_left click" data-n="back2" @click="ch">
                    <i class="fa-solid fa-comment-slash"></i>
                    <h3>檢舉審核</h3>
                    <span class="iconify" data-icon="fa-solid:kiwi-bird"></span>
                </li>
                <li class="backend_li_left click" data-n="back3" @click="ch">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <h3>商品管理</h3>
                    <span class="iconify" data-icon="fa-solid:kiwi-bird"></span>
                </li>
                <li class="backend_li_left click" data-n="back4" @click="ch">
                    <i class="fa-solid fa-barcode"></i>
                    <h3>訂單管理</h3>
                    <span class="iconify" data-icon="fa-solid:kiwi-bird"></span>
                </li>
                <li class="backend_li_left click" data-n="back5" @click="ch">
                    <i class="fa-solid fa-children"></i>
                    <h3>揪團管理</h3>
                    <span class="iconify" data-icon="fa-solid:kiwi-bird"></span>
                </li>
                <li class="backend_li_left click" data-n="back6" @click="ch">
                    <i class="fa-solid fa-clipboard-user"></i>
                    <h3>會員管理</h3>
                    <span class="iconify" data-icon="fa-solid:kiwi-bird"></span>
                </li>
                <li class="backend_li_left click" data-n="back7" @click="ch">
                    <i class="fa-solid fa-image"></i>
                    <h3>景點管理</h3>
                    <span class="iconify" data-icon="fa-solid:kiwi-bird"></span>
                </li>
            </ul>
        </nav>
    </header>
        `,
    methods: {
        ch(e){
            let btn = e.target.closest('li')
            let n = btn.dataset.n
            this.$emit('chg',btn,n)
        }
    },    
    })
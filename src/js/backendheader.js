Vue.component('backheader',{
    // props:['content'],
    data(){
        return{
            h3:['貼文管理','檢舉審核','商品管理','訂單管理','揪團管理','會員管理','景點管理']
        }
    },
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
                    <h3>{{h3[0]}}</h3>
                    <span class="iconify" data-icon="fa-solid:kiwi-bird"></span>
                </li>
                <li class="backend_li_left click" data-n="back2" @click="ch">
                    <i class="fa-solid fa-comment-slash"></i>
                    <h3>{{h3[1]}}</h3>
                    <span class="iconify" data-icon="fa-solid:kiwi-bird"></span>
                </li>
                <li class="backend_li_left click" data-n="back3" @click="ch">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <h3>{{h3[2]}}</h3>
                    <span class="iconify" data-icon="fa-solid:kiwi-bird"></span>
                </li>
                <li class="backend_li_left click" data-n="back4" @click="ch">
                    <i class="fa-solid fa-barcode"></i>
                    <h3>{{h3[3]}}</h3>
                    <span class="iconify" data-icon="fa-solid:kiwi-bird"></span>
                </li>
                <li class="backend_li_left click" data-n="back5" @click="ch">
                    <i class="fa-solid fa-children"></i>
                    <h3>{{h3[4]}}</h3>
                    <span class="iconify" data-icon="fa-solid:kiwi-bird"></span>
                </li>
                <li class="backend_li_left click" data-n="back6" @click="ch">
                    <i class="fa-solid fa-clipboard-user"></i>
                    <h3>{{h3[5]}}</h3>
                    <span class="iconify" data-icon="fa-solid:kiwi-bird"></span>
                </li>
                <li class="backend_li_left click" data-n="back7" @click="ch">
                    <i class="fa-solid fa-image"></i>
                    <h3>{{h3[6]}}</h3>
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
            let v = btn.querySelector('h3').innerText
            this.$emit('chg',btn,n,v)
        }
    },    
    })
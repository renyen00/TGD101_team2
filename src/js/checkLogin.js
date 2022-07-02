$(document).ready(function(){
    // $.ajax({
    //     type: "POST",
    //     url: "",
    //     dataType: "json",
    //     success: show,
    //     error: function(){ 
    //         alert("error!");
    //     }
    // });
    new Vue({
        el:'#memberInfo',
        data:{
            php:[],
        },
        template:
        `<div class="memberInfo">
            <img id="avatarP" :src="php.avatar" >
            <span id="nick">{{php.nickname}}</span>
            <a href="###"><i class="fa-solid fa-comment"></i></a>
            <a href="./php/logout.php">{{php.logst}}<i class="fa-solid fa-arrow-right-from-bracket"></i></a>
        </div>`
        ,
        methods: {
            
        },
        mounted(){
            const url =`./php/checkLogin.php`;
            fetch(url, {})
                .then((response) => {
                    // 這裡會得到一個 ReadableStream 的物件
                    // console.log(response);
                    // 可以透過 blob(), json(), text() 轉成可用的資訊
                    return response.json();
                }).then((jsonData) => {
                    this.php=jsonData
                    console.log(this.php);
                }).catch((err) => {
                    console.log('錯誤:', err);
                });

        }
    })

})

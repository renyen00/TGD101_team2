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
    if(document.querySelector('.thislog')){
        console.log("login");
    }else{
        new Vue({
            el:'#memberInfo',
            data:{
                php:[],
            },
            template:
            `<div class="memberInfo">
                <img id="avatarP" :src="php.avatar" >
                <a href="./personalMain.html" id="nick">{{php.nickname}}</a>
                <a href="./personalNotice.html"><i class="fa-solid fa-comment"></i></a>
                <a :href="php.link">{{php.logst}}<i class="fa-solid fa-arrow-right-from-bracket"></i></a>
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
                        
                        if(this.php.name == "訪客" && document.querySelector('.check_status')){
                            window.location.href = 'login.html';
                        }
                      
                    }).catch((err) => {
                        console.log('錯誤:', err);
                    });
    
            },
            updated() {
                sessionStorage.setItem("memInfo",JSON.stringify(this.php));
            },
        })
    }


})

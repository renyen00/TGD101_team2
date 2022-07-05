$(document).ready(function () {
    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }

    // 登入 -> 忘記密碼
    $("#missingBtn").click(function () {
        $('#logIn').slideUp(1000);
        $('.sign_container').addClass("sign_new-bg2").removeClass('sign_bg').removeClass('sign_new-bg');
    });
    //忘記密碼 -> 登入 
    $("#loginBtn").click(function () {
        $('#logIn').slideDown(1000);
        $('.sign_container').addClass("sign_bg").removeClass('sign_new-bg').removeClass('sign_new-bg2');

    });
    //註冊 -> 登入
    $("#signUp").click(function () {
        $('.sign_container').addClass("sign_bg").removeClass('sign_new-bg').removeClass('sign_new-bg2');
        $("#sign_wrapper").removeClass("right-panel-active");
    });
    //登入-> 註冊
    $("#signIn").click(function () {
        $('#logIn').slideDown(0);
        $('.sign_container').addClass("sign_new-bg").removeClass('sign_bg').removeClass('sign_new-bg2');
        $("#sign_wrapper").addClass("right-panel-active");

    });

    



});

//註冊密碼驗證
function validate(){
    var pwd_s = document.getElementById("pwd_s");
    var pwd_c = document.getElementById("pwd_c");

    if(pwd_s.value == pwd_c.value){
        if(pwd_s.value !== ""){
            document.getElementById("check").innerHTML = 'OK';
            document.getElementById("submit").disabled = false;
        }else{
            document.getElementById("check").innerHTML = '請輸入密碼';
            document.getElementById("submit").disabled = true;
        }
    }else{
        document.getElementById("check").innerHTML = '密碼不相符';
        document.getElementById("submit").disabled = true;
    }
}

new Vue({
    el:'#signUpE',
    data:{
        reg_list:[],
        lname:null,
        lnick:null,
        lemail:null,
        lpwd:null,
        lcpwd:null,
        ltel:null,
        lbirth:null,
    },
    methods: {
        // fereg(e){
        //     e.preventDefault();
            
        //     if(
        //     this.lname.value === "" || 
        //     this.lnick ==="" || 
        //     this.lemail === "" || 
        //     this.lpwd === "" ||
        //     this.ltel === "" ||
        //     this.lbirth === "" 
        //     ){
        //         alert("請檢查所有必填項目是否已填資料");
        //     }else{
        //         let pattern = /^09\d{8}$/;
        //         if(is.email(this._email)){
        //             if(pattern.test(this._tel)){
        //                 const url = '../php/createAcc.php'
        //             }
        //         }
        //         console.log("123");
        //     }

        // },
        submit(e){
            e.preventDefault();
            const url = `./php/login2.php?EMAIL=${this.lemail}`
            fetch(url)
            .then(resp => resp.json())
            .then(Msg => {
                if(Msg == "沒有"){
                    
                    $("#submit")[0].click();

                }else{
                    alert("此Email已經被使用，請使用其他Email");
                }
            })

        },
    },
});

new Vue({
    el: '#logIn',

    data: {
        login_list: [],
        email: "",
        pwd: "",
        tips: "",
        error: 'hint',
    },

    methods: {
        submit(e) {
            e.preventDefault();

            if (this.email == '' || this.pwd == '') {
                alert('請輸入帳號密碼');
            } else {
                const url = `./php/login.php?EMAIL=${this.email}&PASSEORD=${this.pwd}`;
                fetch(url)
                    .then(response => response.json())
                    .then(text => {
                        if (text === 'false') {
                            alert('帳號或密碼錯誤');
                            this.tips = '帳號或密碼錯誤';
                            this.error = 'hint error';

                        } else {
                            window.location.href = 'member.html';
                        }
                    })
            }

        },
    },
    compute: {},
    watch: {},
    create() {

    },
})

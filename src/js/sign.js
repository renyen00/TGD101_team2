$(document.body).click(function () {
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
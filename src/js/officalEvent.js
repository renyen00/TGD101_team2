
let VM = new Vue({
    el: '#offical_info',

    data: {     // 變數放這裡！
        officalid: 0,
        offical_info:[],
        PICTURE: '',
        TITLE: '',
        PLACE: '',
        EVENTDATE: '',
        STARTTIME: '',
        ENDTIME: '',
        COST: '',
        MAX: '',
        STOPTIME: '',
        CONTENT: '',           
    },
    methods: {
        applyBtn: function applyBtn() {
            var _this6 = this;
    
            Swal.fire({
              title: "確定要報名此團嗎?",
              text: "報名成功後返回揪團頁面!",
              icon: "question",
              showCancelButton: !0,
              confirmButtonText: "我要報名!",
              customClass: {
                confirmButton: "btnS_y",
                cancelButton: "btnS_b--s"
              },
              buttonsStyling: !1
            }).then(function (t) {
              t.isConfirmed && fetch("./php/createEventDetail.php", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  postType: "insertApplyData",
                  ACTIVITY_ID: _this6.activity_id
                })
              }).then(function (t) {
                return t.json();
              }).then(function (t) {
                !0 === t ? Swal.fire({
                  icon: "success",
                  title: "報名成功 ! 請至會員中心查詢"
                }).then(function () {
                  window.location.href = "./activityList.html";
                }) : !1 === t ? Swal.fire({
                  icon: "warning",
                  title: "請先登入會員"
                }).then(function () {
                  window.location.href = "./login.html", localStorage.setItem("LINK", "./officalEvent.html");
                }) : "applied" === t ? Swal.fire({
                  icon: "warning",
                  title: "你報名過囉"
                }) : "applymax" === t && Swal.fire({
                  icon: "warning",
                  title: "報名額滿"
                });
              });
            });
          },
          ajaxInitReportReason: function ajaxInitReportReason() {
            var _this7 = this;
    
            fetch("./php/createEventInfo.php", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                postType: "initReportReason"
              })
            }).then(function (t) {
              return t.json();
            }).then(function (t) {
              _this7.reportReason = t;
            });
          }
        },
    computed: {

    },
    watch: {},

    created() {
                
                let search_obj = new URLSearchParams(location.search);
                this.officalid = search_obj.get("officalid");

                const url = './php/offical.php';
                fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                })
                })
                .then(response => response.json())

                .then((data) =>{
                    this.PICTURE = data[this.officalid]['PICTURE'];
                    this.TITLE = data[this.officalid]['TITLE'];
                    this.PLACE = data[this.officalid]['NAME'];
                    this.EVENTDATE = data[this.officalid]['EVENTDATE'];
                    this.COST = data[this.officalid]['COST'];
                    this.MAX = data[this.officalid]['MAX'];
                    this.STARTTIME = data[this.officalid]['STARTTIME'];
                    this.STOPTIME = data[this.officalid]['STOPTIME'];
                    this.CONTENT = data[this.officalid]['CONTENT'];
                    this.offical_info = data;
                });
        
    },
    updated() {

    }
        
});
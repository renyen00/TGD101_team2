// $(document).ready(function(){
//     $.ajax({
//         type: "POST",
//         url: "",
//         dataType: "json",
//         success: show,
//         error: function(){ 
//             alert("error!");
//         }
//     });
// })
// function show(data){
//     console.log(data);

//     // for(i=0; i<data.length; i++){   
//     //     str = '<tr><td>'+
//     //     data[i].ID+'</td><td>'+
//     //     data[i].Username+'</td><td>'+
//     //     data[i].Created_at+'</td><td>'+
//     //     data[i].Email+'</td></tr>';

//     //     $("#member_list").append(str);  
//     // };

// };
new Vue({
    el:'',
    data:{
        php:[],
    },
    mounted(){
        const url =`../php/checkLogin.php`;
        

    }
})
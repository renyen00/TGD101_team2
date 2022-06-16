//chat_body
const cloud = document.getElementById('cloud');
const chat_body = document.getElementById('chat_body');
const chat = document.getElementById('chat');
cloud.addEventListener('click', function(){
    // for(j = 0;j < f_list.length;j++){
    //     f_list[j].classList.toggle('active');
    // }
    chat_body.classList.toggle('active_b');
    chat.classList.toggle('active_c');
})



//chat_box
const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')

const content1 = document.getElementById('content1')
const content2 = document.getElementById('content2')
const content3 = document.getElementById('content3')

let chose = 1;
const changeOption = () => {
    chose == 1 ? (
        option1.classList.value = 'option option-active',
        content1.classList.value = 'content content-active'
    )
    : (
        option1.classList.value = 'option',
        content1.classList.value = 'content'
    )
    chose == 2 ? (
        option2.classList.value = 'option option-active',
        content2.classList.value = 'content content-active'
    )
    : (
        option2.classList.value = 'option',
        content2.classList.value = 'content'
    )
    chose == 3 ? (
        option3.classList.value = 'option option-active',
        content3.classList.value = 'content content-active'
    )
    : (
        option3.classList.value = 'option',
        content3.classList.value = 'content'
    )

}
option1.addEventListener('click', ()=>{
    chose = 1
        changeOption()
    
})
option2.addEventListener('click', ()=>{
    chose = 2
        changeOption()
    
})
option3.addEventListener('click', ()=>{
    chose = 3
        changeOption()
    
})

//friend
const according = document.getElementsByClassName('friend_list');
const f_list = document.getElementsByClassName('f_list');
for (i = 0 ;i < according.length;i++){
    according[i].addEventListener('click', function(){
        // for(j = 0;j < f_list.length;j++){
        //     f_list[j].classList.toggle('active');
        // }
        this.classList.toggle('active');

        
    })
}
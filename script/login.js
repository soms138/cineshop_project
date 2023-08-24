const tab_title = document.querySelectorAll('.tab_title a')
const tab_contents = document.querySelectorAll('.tab_contents > div')
const radio = document.querySelectorAll('.radio label')
const login_btn = document.querySelector('.login_btn')
const user_id = document.querySelector('#id')
const user_pw = document.querySelector('#pwd')
const order_contents = document.querySelectorAll('.order_contents > div')
console.log(tab_title,tab_contents,radio,order_contents)
for(let i of tab_contents){i.style.display = 'none'}
tab_contents[0].style.display = 'block'
tab_title.forEach(function(t,i){
    t.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of tab_title){i.classList.remove('active')}
        t.classList.add('active')
                for(let i of tab_contents){i.style.display = 'none'}
                tab_contents[i].style.display = 'block'
    })
})
for(let i of order_contents){i.style.display = 'none'}
order_contents[0].style.display = 'block'
radio.forEach(function(target,index,array){
    target.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of radio){i.classList.remove('active')}
        target.classList.add('active')
                for(let i of order_contents){i.style.display = 'none'}
                order_contents[index].style.display = 'block'
    })
})
login_btn.addEventListener('click',function(){
    if(user_id.value==='' && user_pw.value===''){
        window.alert('아이디, 비밀번호를 입력하세요')
    }else if(user_id.value===''){
        window.alert('아이디를 입력하세요')
    }else if(user_pw.value===''){
        window.alert('비밀번호를 입력하세요')
    }else{
        window.alert('로그인 성공')
    }
})
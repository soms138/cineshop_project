const open_search = document.querySelector('.open_search')
const search_btn = document.querySelector('.search_wrap > button')
const search_close = document.querySelector('#search_close')
const gnb = document.querySelectorAll('.gnb > li')
const gnbInner = document.querySelectorAll('.gnb .inner')
const sub = document.querySelectorAll('.inner .sub')
const nav_bg = document.querySelector('.nav_bg')
const header = document.querySelector('header')
const section = document.querySelectorAll('section')
const popup = document.querySelector('#popup')

console.log(open_search,search_btn,search_close,gnb,sub,nav_bg)
open_search.style.transform = 'translateY(-100%)';
open_search.style.transition = 'all 1s ease';
search_btn.addEventListener('click',function(){
    open_search.style.transform = 'translateY(0)';
    header.style.background = 'none'
})
search_close.addEventListener('click',function(){
    open_search.style.transform = 'translateY(-100%)'
    header.style.background = 'rgba(0,0,0,0.7)'
})
nav_bg.style.display = 'none'
for(let i of sub){
    i.style.display = 'none'
}
function sub_func(status){ // 서브 숨기기, 보이기 함수생성
    nav_bg.style.transform = status
}
sub_func('translateY(-100%)') // 함수 호출
for(let i of gnbInner){
    i.lastElementChild.style.transform = 'translateY(-100%)'
    for(let j of sub){
        j.style.transform = 'translateY(-100%)'
    }
    sub_func('translateY(-100%)')
    i.style.transition = 'all 1s ease';
    i.addEventListener('mouseover',function(){
        console.log(i.lastElementChild)
        sub_func('translateY(0)') // 함수 호출
        i.lastElementChild.style.display = 'flex';
        i.firstElementChild.style.color = '#FAFF00'
    })
    i.addEventListener('mouseout',function(){
        sub_func('translateY(-100%)') // 함수 호출
        i.lastElementChild.style.transform = 'translateY(-100%)'
        i.lastElementChild.style.backgroundColor = 'none'
        for(let j of sub){
            j.style.transform = 'translateY(-100%)'
        }
        i.firstElementChild.style.color = 'white'
    })
}
for(let i of gnb){
    i.addEventListener('mouseover',function(){
        i.firstElementChild.style.color = '#FAFF00'
        header.style.backgroundColor = 'rgba(0,0,0,0.7)'
    })
    i.addEventListener('mouseout',function(){
        i.firstElementChild.style.color = 'white'
    })
}
popup.style.display = 'none'
window.addEventListener('scroll',function(){
    if(window.pageYOffset > section[1].offsetTop-800){
        header.style.background = 'rgba(0,0,0,0.7)'
        popup.style.display = 'block'
    }else{
        popup.style.display = 'none'
    }
})
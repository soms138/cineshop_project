const open_search = document.querySelector('.open_search')
const search_btn = document.querySelector('.search_wrap > button')
const search_close = document.querySelector('#search_close')
const gnb = document.querySelectorAll('.gnb > li')
const sub = document.querySelectorAll('.sub')
const sub2 = document.querySelectorAll('.sub2')
const nav_bg = document.querySelector('.nav_bg')
console.log(open_search,search_btn,search_close,gnb,sub,nav_bg)
open_search.style.display = 'none';
// open_search.style.transform = 'translateY(100%)';
// open_search.style.transition = 'all 1s ease';
search_btn.addEventListener('click',function(){
    // open_search.style.transform = 'translateY(0)';
    open_search.style.display = 'block';
})
search_close.addEventListener('click',function(){
    // open_search.style.transform = 'translateY(100%)'
    open_search.style.display = 'none'
})
/* nav_bg.style.display = 'none'
for(let i of sub){
    i.style.display = 'none'
}
for(let i of sub2){
    i.style.display = 'none'
}
function sub_func(status){ // 서브 숨기기, 보이기 함수생성
    nav_bg.style.display = status
    for(let i of sub){i.style.display = status}
}
sub_func('none') // 함수 호출
for(let i of gnb){
    i.addEventListener('mouseover',function(){
        sub_func('block') // 함수 호출
        i.lastElementChild.style.display = 'flex'
        nav_bg.style.display = 'block'
        for(let i of sub2){
            i.style.display = 'block'
        }
        gnb.lastElementChild.style.backgroundColor = 'rgba(0,0,0,0.7)'
        i.lastElementChild.style.backgroundColor = 'rgba(255,255,255,0.2)'
        i.firstElementChild.style.color = '#FAFF00'
    })
    i.addEventListener('mouseout',function(){
        sub_func('none') // 함수 호출
        i.lastElementChild.style.display = 'none'
        nav_bg.style.display = 'none'
        for(let i of sub2){
            i.style.display = 'none'
        }
        gnb.lastElementChild.style.backgroundColor = 'none'
        i.lastElementChild.style.backgroundColor = 'none'
        i.firstElementChild.style.color = 'white'
    })
} */
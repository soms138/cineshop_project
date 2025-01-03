// swiper 광고영역
const mainSlide = new Swiper('#main_slide',{
    direction: 'horizontal',
    autoplay:{delay:5000},
    speed:800,
    loop:true,
    loopAdditionalSlides: 1,
    navigation: {
        nextEl: '#main_slide .swiper-button-next',
        prevEl: '#main_slide .swiper-button-prev'
    }
})
const categorySlide = new Swiper('#category_slide',{
    slidesPerView: 3,
    loop:true,
    loopAdditionalSlides: 1,
    spaceBetween: 30,
    breakpoints:{
        700:{slidesPerView:5,},
        1000:{slidesPerView:7,},
    },
    navigation: {
        nextEl: '#category_slide .swiper-button-next',
        prevEl: '#category_slide .swiper-button-prev'
    }
})
const bestSlide = new Swiper('#best_slide',{
    slidesPerView: 1,
    direction: 'horizontal',
    autoplay:{delay:3000},
    speed:800,
    loop:true,
    loopAdditionalSlides: 1,
    scrollbar:{el:'#best_slide .swiper-scrollbar'}, // 스크롤바 표시
    breakpoints:{
        600:{slidesPerView:2,},
        850:{slidesPerView:3,},
        1100:{slidesPerView:4,},
    },
})
const offlineSlide = new Swiper('#shop_slide',{
    slidesPerView: 3,
    direction: 'horizontal',
    centeredSlides:true,
    slideToClickedSlide: true,
    autoplay:{delay:3000},
    effect : 'coverflow',
    coverflowEffect: {
        rotate: 0,
        slideShadows: false,
        stretch: 70,
    },
    speed:800,
    loop:true,
    loopAdditionalSlides: 1,
    on:{
        init:function(){
            this.slides[this.activeIndex].querySelector('.slide_txt').style.opacity = '1';
        },
        slideChange:function(){
            this.slides.forEach(target => {
                target.querySelector('.slide_txt').style.opacity = '0';
                target.querySelector('.slide_txt').style.transform = 'translateX(40%)';
            })
            this.slides[this.activeIndex].querySelector('.slide_txt').style.opacity = '1';
            this.slides[this.activeIndex].querySelector('.slide_txt').style.transform = 'translateX(0)';
        },
    },
})
const tab_title = document.querySelectorAll('.tab_title a')
const tab_contents = document.querySelectorAll('.tab_contents > div')
const like_img = document.querySelectorAll('.box .like_img')
for(let i of tab_contents){i.style.display = 'none'}
tab_contents[0].style.display = 'block'
tab_title.forEach(function(t,i){
    t.addEventListener('click', function(e){
        e.preventDefault()
        for(let i of tab_title){i.classList.remove('active')}
        t.classList.add('active')
        for(let i of tab_contents){i.style.display = 'none'}
        tab_contents[i].style.display = 'block'
    })
})
for(let i of like_img){
    i.addEventListener('click',function(e){
        e.preventDefault()
        i.classList.toggle('like_fill')
    })
}
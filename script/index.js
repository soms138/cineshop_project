// swiper 광고영역
const mainSlide = new Swiper('#main_slide',{
    direction: 'horizontal',
    autoplay:{delay:5000},
    speed:800,
    loop:true,
    navigation: {
        nextEl: '#main_slide .swiper-button-next',
        prevEl: '#main_slide .swiper-button-prev'
    }
})
const categorySlide = new Swiper('#category_slide',{
    slidesPerView: 3,
    direction: 'horizontal',
    autoplay:{delay:1000},
    speed:1000,
    loop:true,
    breakpoints:{
        700:{slidesPerView:5,},
        1400:{slidesPerView:7,},
    },
    navigation: {
        nextEl: '#category_slide .swiper-button-next',
        prevEl: '#category_slide .swiper-button-prev'
    }
})
const bestSlide = new Swiper('#best_slide',{
    slidesPerView: 2,
    direction: 'horizontal',
    autoplay:{delay:3000},
    speed:800,
    loop:true,
    breakpoints:{
        700:{slidesPerView:3,},
        1100:{slidesPerView:4,},
    },
})
const offlineSlide = new Swiper('#shop_slide',{
    slidesPerView: 'auto',
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
        }
    },
})
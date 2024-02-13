const box = document.querySelectorAll('.acco');

box.forEach(acco => {

    const ans = acco.querySelector('.ans');

    acco.addEventListener('click',()=>{

        ans.classList.toggle('open');

    })
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplayTimeout:500,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:7,
            nav:true,
            loop:true
        }
    }
})
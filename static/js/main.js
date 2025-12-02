document.addEventListener('DOMContentLoaded', () => {
    const contactItems = document.querySelectorAll('.contacts__item');

    contactItems.forEach(item => {
        const span = item.querySelector('a')

        const showInfo = gsap.to(span, { duration: 0.5, autoAlpha: 1, x: 0, maxWidth: '30rem', paddingRight: '1rem', paused: true, ease: 'power2.out' })

        item.addEventListener('mouseenter', () => {
            showInfo.play();
            console.log('play');
        });

        item.addEventListener('mouseleave', () => {
            showInfo.reverse();
            console.log('out');

        });
    })
})



var swiper = new Swiper(".swiper-certificates", {
    loop: true,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});


var projectsSwiper = new Swiper(".swiper-projects", {
    observer: true,
    observeParents: true,
    spaceBetween: 30,
    grabCursor: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});


// Escrolagem Suave


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create();

gsap.to('.header', {
    y: '-100%',
    ease: 'none',
    duration: 0.1,

    scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: '+=20',
        scrub: true
    }
})
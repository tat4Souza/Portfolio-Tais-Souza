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
    grabCursor: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 18,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 18,
        },
        1188: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
});


var swiper = new Swiper(".swiper-projects", {
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 18,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 18,
        },
        1188: {
            slidesPerView: 3,
            spaceBetween: 24,
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
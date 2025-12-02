document.querySelectorAll('.education__course').forEach(card => {
    card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();

        const localX = e.clientX - rect.left;
        const localY = e.clientY - rect.top;

        card.style.setProperty('--x-local', `${Math.round(localX)}px`);
        card.style.setProperty('--y-local', `${Math.round(localY)}px`);
    });
});

gsap.registerPlugin(ScrollTrigger);

gsap.from('.education h2', { duration: 1, y: -10 });
gsap.from('.certificates h2', { duration: 1, x: -200, opacity: 0, scrollTrigger: { trigger: 'certificates', scrub: true } });

gsap.fromTo('.education h2',
    { x: 0, opacity: 1 },

    {
        x: '200',
        opacity: 0,
        ease: 'none',

        scrollTrigger: {
            trigger: '.education',
            start: 'top top',
            end: '+=300',
            scrub: true,
        }
    }
);


// gsap.to('.education__course', {
//     duration: 0.5,
//     opacity: 1,
//     left: 0,
//     stagger: 0.1,
//     ease: 'power2.out',
// });

gsap.fromTo('.education__course',
    // ESTADO INICIAL (FROM)
    { opacity: 0, left: -100 },

    // ESTADO FINAL (TO)
    {
        duration: 0.5,
        opacity: 1,
        left: 0,
        stagger: 0.1,
        ease: 'power2.out'
    }
);


const boxes = gsap.utils.toArray('.education__course');
boxes.forEach(box => {
    gsap.set(box, { opacity: 1, left: 0 });

    gsap.to(box, {
        left: -50,
        opacity: 0,
        ease: 'power2.out',

        scrollTrigger: {
            trigger: box,
            start: 'bottom 50%',
            end: 'bottom',
            scrub: true,
        }
    });
});


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



gsap.set('.education__course', { className: 'education__course no-hover' });

gsap.timeline({ defaults: { duration: 0.5 } })
    .from('.education__course', {
        opacity: 0,
        left: -80,
        stagger: 0.2,
        ease: 'power2.out',

        onComplete: function () {
            this.targets()[0].classList.remove('no-hover');
            this.targets()[1].classList.remove('no-hover');
            this.targets()[2].classList.remove('no-hover');

        }
    });


const boxes = gsap.utils.toArray('.education__course');
boxes.forEach(box => {
    gsap.to(box, {
        left: -50,
        immediateRender: false,
        opacity: 0,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: box,
            start: 'bottom 50%',
            end: 'bottom',
            scrub: true,

        }
    })
});


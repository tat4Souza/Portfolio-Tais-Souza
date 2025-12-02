
gsap.timeline({ defaults: { duration: .8 } }).from('.header', { opacity: 0, y: '-50' });

const contentTimeline = gsap.timeline({ defaults: { duration: .8 }, paused: true });
gsap.registerPlugin(ScrollTrigger);

contentTimeline
    .from('.intro__header', { opacity: 0, x: '-5vw', ease: 'power2.inOut' })
    .from('.intro__left-container > p', { opacity: 0, ease: 'slow' })
    .from('.stars--1', { opacity: 0, y: '-300', rotation: 360, ease: 'power4.out' }, 1)
    .from('.stars--2', { opacity: 0, x: '-15vw', rotation: '360', ease: 'power4.out' }, 1)
    .from('.stars--3', { opacity: 0, x: '-15vw', rotation: '360', ease: 'power4.out', delay: 0.6 }, 1);

gsap.to('.intro__right-container img', {
    y: '80vh',
    ease: 'none',

    scrollTrigger: {
        trigger: 'main',
        start: 'top top',
        end: '+=1000',
        scrub: true
    }
})

const skills = gsap.utils.toArray('.skills-animation');
skills.forEach(skill_content => {
    gsap.from(skill_content, {
        y: -200,
        opacity: 0,
        scrollTrigger: {
            trigger: skill_content,
            end: '-+20',
            scrub: true
        }
    })
});

gsap.from('.skills-animation--2', {
    y: 300,
    opacity: 0,
    scrollTrigger: {
        trigger: '.skills',
        end: '-+30',
        scrub: true
    }
})

ScrollTrigger.create({
    trigger: '.intro',
    start: 'top bottom',

    onEnterBack: () => {
        contentTimeline.timeScale(1.5).restart(true);
    },

    onEnter: () => {
        contentTimeline.timeScale(1).restart(true);
    }
});


const competencies = gsap.utils.toArray('.competencies-animation');
gsap.from(competencies, {
    x: -200,
    opacity: 0,
    stagger: 0.3,

    scrollTrigger: {
        trigger: competencies,
        start: 'top 80%',
        end: '+=280',
        scrub: 1,
    }
});
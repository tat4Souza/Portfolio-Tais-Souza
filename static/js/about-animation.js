
const timeline = gsap.timeline({ defaults: { duration: .8 } });
gsap.registerPlugin(ScrollTrigger);

timeline
    .from('.header', { opacity: 0, y: '-50' })
    .from('.intro__header', { opacity: 0, x: '-5vw', ease: 'power2.inOut' })
    .from('.intro__left-container > p', { opacity: 0, ease: 'slow' })
    .from('.stars--1', { opacity: 0, y: '-300', rotation: 360, ease: 'power4.out' }, 1)
    .from('.stars--2', { opacity: 0, x: '-15vw', rotation: '360', ease: 'power4.out' }, 1)
    .from('.stars--3', { opacity: 0, x: '-15vw', rotation: '360', ease: 'power4.out', delay: 0.6 }, 1)

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
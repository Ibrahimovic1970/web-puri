// src/styles/animations.js
import { gsap } from 'gsap';

// ✅ Sudah di-register di lib/gsap.js

export const animateFromBottom = (element, duration = 1, delay = 0) => {
    if (!element) return;
    gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
            },
        }
    );
};

export const fadeIn = (element, duration = 0.8, delay = 0) => {
    if (!element) return;
    gsap.fromTo(
        element,
        { opacity: 0, scale: 0.95 },
        {
            opacity: 1,
            scale: 1,
            duration,
            delay,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
            },
        }
    );
};

export const slideFromLeft = (element, duration = 1, delay = 0) => {
    if (!element) return;
    gsap.fromTo(
        element,
        { x: -100, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
            },
        }
    );
};

export const slideFromRight = (element, duration = 1, delay = 0) => {
    if (!element) return;
    gsap.fromTo(
        element,
        { x: 100, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
            },
        }
    );
};

export const addParallax = (element, speed = -0.2) => {
    if (!element) return;
    gsap.to(element, {
        y: () => window.innerHeight * speed,
        ease: 'none',
        scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        },
    });
};

export const scaleIn = (element, duration = 0.7, delay = 0) => {
    if (!element) return;
    gsap.fromTo(
        element,
        { scale: 0.8, opacity: 0 },
        {
            scale: 1,
            opacity: 1,
            duration,
            delay,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
            },
        }
    );
};

export const staggerGrid = (elements, config = {}) => {
    if (!elements || elements.length === 0) return;
    const { duration = 0.6, delay = 0, stagger = 0.2 } = config;

    gsap.fromTo(
        elements,
        { y: 50, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration,
            delay,
            stagger,
            ease: 'back.out(1.5)',
            scrollTrigger: {
                trigger: elements[0]?.parentElement || elements,
                start: 'top 85%',
            },
        }
    );
};
import { gsap } from 'gsap';

export function buildAvengersAssembleTimeline(root: HTMLElement) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: root,
      start: 'top 50%',
      end: 'bottom 20%',
      scrub: 1,
    }
  });

  tl.fromTo('.chapter-text', {
    opacity: 0,
    x: -100,
  }, {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: 'power2.out',
  })
  .fromTo('.chapter-visual', {
    opacity: 0,
    scale: 0.8,
    x: 100,
  }, {
    opacity: 1,
    scale: 1,
    x: 0,
    duration: 1,
    ease: 'power2.out',
  }, '<');

  return tl;
}

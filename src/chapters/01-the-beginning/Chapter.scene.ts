import { gsap } from 'gsap';

export function buildTheBeginningTimeline(root: HTMLElement) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: root,
      start: 'top top',
      end: '+=100%',
      pin: true,
      scrub: 1,
    }
  });

  tl.to('.title-text', {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 1,
    ease: 'power2.out',
  })
  .to('.subtitle-text', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out',
  }, '-=0.5')
  .to('.scroll-indicator', {
    opacity: 1,
    y: 0,
    duration: 0.5,
  }, '-=0.5')
  .to('.title-text', {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: 'power2.in',
  }, '+=1')
  .to('.subtitle-text', {
    opacity: 0,
    y: -30,
    duration: 1,
    ease: 'power2.in',
  }, '<')
  .to('.scroll-indicator', {
    opacity: 0,
    duration: 0.5,
  }, '<');

  return tl;
}

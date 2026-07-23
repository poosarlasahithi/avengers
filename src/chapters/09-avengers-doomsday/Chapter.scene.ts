import { gsap } from 'gsap';

export function buildDoomsdayTimeline(root: HTMLElement) {
  // We use the root itself as the trigger, but pin the inner sticky container implicitly by having a tall section.
  // Wait, the component uses a sticky container inside a 300vh section.
  // We can just use standard ScrollTrigger scrub on the root.
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: root,
      start: 'top top',
      end: 'bottom bottom', // Scrub over the 300vh height
      scrub: 1,
    }
  });

  // 1. Mask starts small and rotates in
  tl.fromTo('.doom-mask', {
    rotateY: -180,
    rotateX: 20,
    scale: 0.5,
    z: -500,
  }, {
    rotateY: 0,
    rotateX: 0,
    scale: 1,
    z: 0,
    duration: 2,
    ease: 'power3.out',
  })
  
  // 2. Eyes glow green
  .to('.doom-eye', {
    opacity: 1,
    duration: 0.5,
  })
  
  // 3. Lightning flash
  .to('.green-lightning', {
    opacity: 0.8,
    duration: 0.1,
  })
  .to('.green-lightning', {
    opacity: 0,
    duration: 0.3,
  })

  // 4. Title Reveal (shrinking letter spacing)
  .fromTo('.doomsday-title', {
    opacity: 0,
    letterSpacing: '0.8em',
    scale: 1.2,
  }, {
    opacity: 1,
    letterSpacing: '0.1em',
    scale: 1,
    duration: 1.5,
    ease: 'power2.out',
  }, '-=0.5')

  // 5. Subtitle reveal
  .to('.doomsday-subtitle', {
    opacity: 1,
    y: 0,
    duration: 1,
  }, '-=0.5')
  
  // 6. Hold for a bit
  .to({}, { duration: 1 })
  
  // 7. Fade out everything to transition to the next section
  .to('.doom-mask, .doomsday-title, .doomsday-subtitle', {
    opacity: 0,
    y: -50,
    duration: 1,
    stagger: 0.1,
  });

  return tl;
}

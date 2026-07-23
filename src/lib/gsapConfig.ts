import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initGSAP = () => {
  ScrollTrigger.defaults({
    scroller: document.documentElement,
  });
};

export { gsap, ScrollTrigger };

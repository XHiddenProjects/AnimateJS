// Instantiate AnimateJS
const animate = new AnimateJS();

// Select the element you want to animate
const [myElement] = animate.Utils.$('#myDiv');

// Define some custom keyframes
const fadeInKeyframes = new KeyFrames().opacity(0);

const slideInLeftKeyframes = new KeyFrames().translateX(-200);

const bounceKeyframes = new KeyFrames().scale(0.5);

// Create custom animations using AnimationJS
const fadeInAnimation = new AnimationJS('custom', 'fadeIn')
  .createTimeline('0', fadeInKeyframes)
  .develop();

const slideInLeftAnimation = new AnimationJS('custom', 'slideInLeft')
    .createTimeline('0', slideInLeftKeyframes)
    .develop();

const bounceAnimation = new AnimationJS('custom', 'bounce')
    .createTimeline('0', bounceKeyframes)
    .develop();
animate.add(fadeInAnimation);
animate.add(slideInLeftAnimation);
animate.add(bounceAnimation);
// Run animations sequentially
animate.run(
    () => animate.animate(myElement, 'custom.fadeIn', {duration: 1000}),
    () => animate.animate(myElement, 'custom.slideInLeft', {duration: 1000, delay: 500}),
    () => animate.animate(myElement, 'custom.bounce', {duration: 1000, delay: 500})
);

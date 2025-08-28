// Instantiate AnimateJS
const animator = new AnimateJS();

// Create a custom keyframe animation with multiple frames including 3D transformations
const custom3DAnimation = new AnimationJS('custom', 'rotateScale3D')
  .createTimeline('0', 
    new KeyFrames()
      .rotate3D(1, 1, 0, 0)
      .scale(1)
      .perspective(800),
    new KeyFrames()
      .rotate3D(1, 1, 0, 180)
      .scale(2)
      .perspective(800)
  )
  .createTimeline('50', 
    new KeyFrames()
      .rotate3D(0, 1, 1, 90)
      .scale(1.5)
      .perspective(800)
  )
  .createTimeline('100', 
    new KeyFrames()
      .rotate3D(1, 0, 1, 0)
      .scale(1)
      .perspective(800)
  )
  .develop(); // Prepare the callback function

// Add the custom 3D animation to the collection
animator.add(custom3DAnimation);

// Select the element to animate
const [cube] = animate.Utils.$('.my-cube');

// Trigger the 3D animation
animator.animate(cube, 'custom.rotateScale3D', {
  timing: animator.CUBIC_BEZIER(0.25, 0.1, 0.25, 1),
  duration: 3000,
  delay: 100,
  count: 1,
  mode: 'forwards'
}).then(() => {
  console.log('3D animation completed!');
});

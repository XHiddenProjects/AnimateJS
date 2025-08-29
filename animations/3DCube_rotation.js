// Initialize AnimateJS
const animate = new AnimateJS();

// Create a custom keyframe animation for rotating the cube
const cubeRotation = new AnimationJS('cubeRotation','turn')
  .createTimeline('from', 
    new KeyFrames()
    .rotate3D(0, 0, 0, 0) // Start at 45 degrees (or 0 if you prefer)
  )
  .createTimeline('to', 
    new KeyFrames()
    .rotate3D(1, 1, 0, 360) // Rotate full circle
  )
  .develop(); // Generate the callback

// Apply the animation to the cube element
const [cubeEl] = animate.Utils.$('.cube');
animate.Utils.preserve3D(cubeEl);
animate.add(cubeRotation);
animate.animate(cubeEl, 'cubeRotation.turn', {
  timing: 'linear',
  duration: 5 * 1000, // 5 seconds for a full rotation
  count: animate.ANIMATION_INFINITE, // Infinite loop
  mode: animate.NONE
});

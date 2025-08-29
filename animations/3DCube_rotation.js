// Initialize AnimateJS
const animate = new AnimateJS();

// Create a custom keyframe animation for rotating the cube
const cubeRotation = new AnimationJS('cubeRotation','turn')
  .createTimeline('0', 
    new KeyFrames()
    .rotate3D(0, 0, 0, 0) // Starting position
  )
  .createTimeline('25', 
    new KeyFrames()
    .rotate3D(1, 2, 1, 180) // Rotate halfway
  )
  // Middle rotation at 50%
  .createTimeline('50', 
    new KeyFrames()
    .rotate3D(2, 1, 3, 180) // Rotate halfway
  )
  .createTimeline('75', 
    new KeyFrames()
    .rotate3D(1, 1, 1, 180) // Rotate halfway
  )
  // Final rotation at 100%
  .createTimeline('100', 
    new KeyFrames()
    .rotate3D(1, 1, 0, 360) // Complete full rotation
  )
  .develop(); // Generate the callback

const [cubeEl] = animate.Utils.$('.cube');
animate.Utils.preserve3D(cubeEl);
animate.add(cubeRotation);
animate.animate(cubeEl, 'cubeRotation.turn', {
  timing: 'linear',
  duration: 5 * 1000, // 5 seconds for a full rotation
  count: animate.ANIMATION_INFINITE, // Infinite loop
  mode: animate.NONE
});

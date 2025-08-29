// Instantiate AnimateJS
const animator = new AnimateJS(),
  heartBeatAnimation = new AnimationJS('custom', 'heartbeat')
    .createTimeline(0, 
        new KeyFrames()
        .scale(1)
    )
    .createTimeline(14, 
        new KeyFrames()
        .scale(1.3)
    )
    .createTimeline(28, 
        new KeyFrames()
        .scale(1)
    )
    .createTimeline(42, 
        new KeyFrames()
        .scale(1.3)
    )
    .createTimeline(70, 
        new KeyFrames()
        .scale(1)
    )
  .develop(); // Prepare the callback function

// Add the custom 3D animation to the collection
animator.add(heartBeatAnimation);

// Select the element to animate
const [heartbeat] = animator.Utils.$('.heartbeat');

// Trigger the 3D animation
animator.animate(heartbeat, 'custom.heartbeat', {
    duration: 1500,
    count: animator.ANIMATION_INFINITE,
    mode: animator.NONE
})

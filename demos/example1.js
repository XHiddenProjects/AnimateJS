// Instantiate the AnimateJS class
const animator = new AnimateJS();

// Select the element you want to animate
const [myElement] = animator.Utils.$('#myElement');

// Use the animate method to trigger an animation
animator.animate(myElement, 'fade.in', {
    timing: 'ease-in-out',
    duration: 2000, // 2 seconds
    delay: 500,     // Half a second delay before starting
    count: 1,       // Play once
    mode: 'forwards' // Keep the final state
}).then(() => {
    console.log('Animation completed!');
});

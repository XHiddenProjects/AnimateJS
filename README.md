# AnimateJS
AnimateJS is a user-friendly library that simplifies creating smooth 2D and 3D animations using JavaScript and CSS. Ideal for adding dynamic, engaging effects to your web projects with minimal effort.

## Startup
To include the the script use the HTML code here
```html
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/path/to/animate.min.css"/>
</head>
<body>
...
<script src="/path/to/animate.min.js"></script>
<script src="index.js"></script>
</body>
</html>
```

## Animating
To use the animate your object use the `animate()` method
```js
const animate = new AnimateJS(),
[container] = animate.Utils.$('.my-cube');
/**
  * Trigger animation on an element based on predefined animation paths
  * @param {Element} el - DOM element to animate
  * @param {string} animationPath - dot-separated path to animation in Animations
  * @param {{timing: 'linear'|'ease'|'ease-in'|'ease-out'|'ease-in-out'|'cubic-bezier(n,n,n,n)', duration: number, delay: number, count: number, direction: 'normal'|'reverse'|'alternate'|'alternate-reverse' , mode: 'none'|'forwards'|'backwards'|'both'}} options - animation options like duration, delay etc.
  * @returns {Promise} - resolves after animation ends
  */
animate.animate(container,'fade.in').then(()=>{
// Send a console message when animation is done
console.log('Animation done!');
});
```
You can check out the in-built [animations](#built-in-animations)

***

## Running multiple animations (Sequentially)
To execute animation as step process you will have to use the `run()` method
```js
const animate = new AnimateJS(),
[myElement] = animate.Utils.$('.my-cube');
// Run animations sequentially
animate.run(
    () => animate.animate(myElement, 'fade.in', {duration: 1000}),
    () => animate.animate(myElement, 'rotate.clockwise', {duration: 1000, delay: 500}),
    () => animate.animate(myElement, 'slide.outRight', {duration: 1000, delay: 500})
);
```

***

## Built in animations
| Animation | Path |
| --------- | ---- |
| FadeIn    | fade.in |
| FadeOut   | fade.out |
| FadeInTop    | fade.inTop |
| FadeOutTop   | fade.outTop |
| FadeInRight    | fade.inRight |
| FadeOutRight   | fade.outRight |
| FadeInBottom    | fade.inBottom |
| FadeOutBottom   | fade.outBottom |
| FadeInLeft    | fade.inLeft |
| FadeOutLeft   | fade.outLeft |
| SlideIn    | slide.in |
| SlideOut   | slide.out |
| SlideInTop    | slide.inTop |
| SlideOutTop   | slide.outTop |
| SlideInRight    | slide.inRight |
| SlideOutRight   | slide.outRight |
| SlideInBottom    | slide.inBottom |
| SlideOutBottom   | slide.outBottom |
| SlideInLeft    | slide.inLeft |
| SlideOutLeft   | slide.outLeft |
| rotateIn | rotate.in |
| rotateOut | rotate.Out |
| rotateClockwise | rotate.clockwise |
| rotateCounterClockwise | rotate.counterClockwise |
| zoomIn | zoom.in |
| zoomOut | zoom.out |
| bounce | bounce |
| stretchWidth | stretch.width |
| stretchHeight | stretch.height |



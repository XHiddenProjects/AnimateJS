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

animate.animate(container,'fade.in');
```
You can check out the in-built [animations](#built-in-animations)

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



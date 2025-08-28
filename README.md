# AnimateJS
AnimateJS is a user-friendly library that simplifies creating smooth 2D and 3D animations using JavaScript and CSS. Ideal for adding dynamic, engaging effects to your web projects with minimal effort.

Check out the [demo](https://jsfiddle.net/mg84pybw/1/)

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

## Custom Animations
To create custom animation you will need 2 classes `AnimationJS()` and `KeyFrames()`

Here is an example:
```js
const animate = new AnimateJS(),
[container] = animate.Utils.$('.text');

const frame = new KeyFrames();
// AnimationJS(pathName); The path would be "custom.rainbow"
const rainbowTextAnimation = new AnimationJS('custom', 'rainbow')
    // createTimeline(percentage|from-to, KeyFrames)
    .createTimeline('0', frame.fontShadow({v:0,h:0,blur:2,color:'red'}).color('red'))
    .createTimeline('20', frame.clear().fontShadow({v:0,h:0,blur:2,color:'orange'}).color('orange'))
    .createTimeline('40', frame.clear().fontShadow({v:0,h:0,blur:2,color:'yellow'}).color('yellow'))
    .createTimeline('60', frame.clear().fontShadow({v:0,h:0,blur:2,color:'green'}).color('green'))
    .createTimeline('80', frame.clear().fontShadow({v:0,h:0,blur:2,color:'blue'}).color('blue'))
    .createTimeline('100', frame.clear().fontShadow({v:0,h:0,blur:2,color:'purple'}).color('purple'))
    .develop();



// Add it to AnimateJS instance
animate.add(rainbowTextAnimation);

animate.animate(container,'custom.rainbow',{
    timing: animate.EASE_IN_OUT,
    duration: animate.SLOW,
    mode: animate.FORWARDS,
    count: animate.ANIMATION_INFINITE
});
```

***

## KeyFrames
Keyframes are what is placed inside each `timeline`

**Methods:**

| Methods | Code | Description |
| ------- | ---- | ----------- |
| Rotate  | `Rotate(degree)` | Rotate the object by degree |
| RotateX  | `RotateX(degree)` | Rotate the object by X-axis |
| RotateY  | `RotateY(degree)` | Rotate the object by Y-axis |
| RotateZ  | `RotateZ(degree)` | Rotate the object by Z-axis |
| Rotate3D  | `Rotate3D(x, y, z, degree)` | Rotate the object by 3D |
| skew  | `skew(xDeg, yDeg)` | Skew the object |
| skewX  | `skewX(xDeg)` | Skew the object by x-axis |
| skewY  | `skewY(yDeg)` | Skew the object by y-axis |
| Scale  | `Scale(sx, sy)` | Scale the object by size |
| ScaleX  | `ScaleX(sx)` | Scale the object by X-axis |
| ScaleY  | `ScaleY(sy)` | Scale the object by Y-axis |
| ScaleZ  | `ScaleZ(sz)` | Scale the object by Z-axis |
| Scale3D  | `Scale3D(sx, sy, sz)` | Scale the object by 3D |
| perspective | `perspective(distance)` | Adds perspective transformation. |
| transition | `transition(...string)` | transition properties |
| border | `border(width, style, color, ...locations)` | Border style |
| boxShadow | `boxShadow(...{h:number, v: number, blur: number, spread: number, color: string})` | Box shadow to object |
| fontShadow | `fontShadow(...{h:number, v:number, blur: number, color: string})` | Text shadow to object |
| color | `color(color)` | Color to object |
| opacity | `opacity(value)` | Opacity to object |
| background | `background(...backgrounds)` | Combines background values |
| matrix | `matrix(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p)` | Applies a 4x4 matrix transformation. |
| matrix3D | `matrix3D(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4)` | Applies a 3D matrix transformation. |
| clear | `clear()` | clears everything to default |

***

## Utilities
Here are some utities that can be used

**inView**

Sends a boolean whether or not the page is focued on an item
```js
/**
 * Checks if an element is within the viewport
 * @param {Element} el - DOM element to check
 * @returns {boolean} - TRUE if in view, else FALSE
 */
animate.Utils.inView(el);
```

**$**

Selects all elements based on the selected query: _document.querySelectorAll()_
```js
/**
 * Selects all elements under target selector.
 * **Reference:** _(document.querySelectorAll)_
 * @param {string} el CSS selector
 * @returns {NodeList} Returns all element descendants of node that match selectors.
 */
animate.Utils.$(el);
```

**$$**

Selects first element based on the selected query: _document.querySelector()_
```js
/**
 * Selects an element under target selector.
 * **Reference:** _(document.querySelector)_
 * @param {string} el CSS selector
 * @returns {any} Returns the first element that is a descendant of node that matches selectors.
 */
animate.Utils.$S(el);
```

**Merger**

Merges animations from the current animation
```js
/**
 * Merges a new animation string with existing styles
 * @param {Element} el - DOM element
 * @param {string} animation - animation string to merge
 */
animate.Utils.Merger(el,animation);
```

**contrast**

Returns the contrast between two colors
```js
/**
 * Returns the contrast ratio between 2 colors
 * @param {string} color1 Background color
 * @param {string} color2 Fore color
 * @returns {number} Ratio between to colors 
 */
animate.Utils.contrast(color1, color2)
```

***

## CONSTANTS
Here are some constants that will make things easier for you

**Count**

| Constant | Value |
| -------- | ----- |
| ANIMATION_INFINITE | -1 |

**Timing**

| Constant | Value |
| -------- | ----- |
| EASE | 'ease' |
| LINEAR | 'linear' |
| EASE_IN | 'ease-in' |
| EASE_IN_OUT | 'ease-in-out' |
| EASE_OUT | 'ease-out' |
| CUBIC_BEZIER | `CUBIC_BEZIER(x1,y1,x2,y2)`|

**Direction**

| Constant | Value |
| -------- | ----- |
| NORMAL | 'normal' |
| REVERSE | 'reverse' |
| ALT | 'alternate' |
| ALT_REVERSE | 'alternate-reverse' |

**Mode**

| Constant | Value |
| -------- | ----- |
| NONE     | 'none' |
| FORWARDS | 'forwards' |
| BACKWARDS | 'backwards' |
| BOTH      | 'both' |

**Speed**

| Constant | Value |
| -------- | ----- |
| SUPER_SLOW | 5000 |
| SLOW | 3000 |
| MODERATE | 1000 |
| FAST | 500 |
| SUPER_FAST | 200 |

**Colors**

| Constant | Value |
| -------- | ----- |
| RED | '#ff0000' |
| BROWN | '#a52a2a' |
| TAN | '#d2b48c' |
| ORANGE | '#ffa500' |
| YELLOW | '#ffff00' |
| GOLD | '#ffd700' |
| GREEN | '#008000' |
| LIME | '#00ff00' |
| BLUE | '#0000ff' |
| CYAN | '#00ffff' |
| NAVY | '#000080' |
| PURPLE | '#800080' |
| MAGENTA | '#ff00ff' |
| GRAY | '#808080' |
| LIGHT_GRAY | '#d3d3d3' |
| PINK | '#ffc0cb' |
| BLACK | '#000' |
| WHITE | '#FFF' |

**Transparency**

| Constant | Value |
| -------- | ----- |
| OPACITY | 1 |
| OPACITY_HALF | 0.5 |
| NO_OPACITY | 0 |





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



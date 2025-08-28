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

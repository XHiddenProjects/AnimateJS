 // Initialize AnimateJS
  const animate = new AnimateJS(),
   box = animate.Utils.$('#box');

  // Example: Animate on load
  animate.load(box, (a, el) => {
    a.Animations.fade.in(el, a.EASE, a.MODERATE);
  });

  // Example: Animate on hover
  animate.hover(box, (a, el) => {
    a.Animations.fade.in(el, a.EASE, a.FAST);
  }, (a, el) => {
    a.Animations.fade.out(el, a.EASE, a.FAST);
  });

  // Example: Animate on scroll
  animate.scroll(document, (a, el) => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const triggerPoint = el.querySelector('#scrollBox').offsetTop;
    if (scrollY + window.innerHeight > triggerPoint) {
      // Animate when the element is in view
      a.Animations.slide.inBottom(el.querySelector('#scrollBox'), a.EASE, a.MODERATE);
    }
  });

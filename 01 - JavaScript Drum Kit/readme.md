## [Day One - JavaScript Drum Kit](https://github.com/stpCollabr8nLstn/JavaScript30/tree/master/01%20-%20JavaScript%20Drum%20Kit)

View [codepen](https://codepen.io/StpCollabr8nLstn/pen/bgeVRV) (sans sound)


The only major deviation here is that I opted to use `keyup` rather than listening for the end of `transform`.

Original Solution:  

```javascript  
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
```

My Solution:  

```javascript  
  function endSound (e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!key) return;
    key.classList.remove('playing');
  }

  window.addEventListener('keyup', endSound);
```

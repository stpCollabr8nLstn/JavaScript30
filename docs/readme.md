![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript 30

I took the JavaScript 30 Day Challenge by [@wesbos](https://twitter.com/wesbos).  
I encourage you to grab the course at [https://JavaScript30.com](https://JavaScript30.com).  
Wes writes some of the best tutorials whether you're just learning or looking for a refresh.

Since I deviated a bit from the course material, I decided to post my solutions as alternatives.  
Each of my solutions have been added in my github with file name `index-ARIOS.html`.  
I welcome PRs or suggestions. Sharing is caring, afterall.  
Enjoy and follow me on Twitter! [@stpColabr8nLstn](https://twitter.com/stpcolabr8nlstn)

---

## [Day One - JavaScript Drum Kit](https://github.com/stpCollabr8nLstn/JavaScript30/tree/master/01%20-%20JavaScript%20Drum%20Kit)

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


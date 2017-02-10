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

---

## [Day Two - JS + CSS Clock](https://github.com/stpCollabr8nLstn/JavaScript30/tree/master/02%20-%20JS%20%2B%20CSS%20Clock)

View [codepen](https://codepen.io/StpCollabr8nLstn/pen/xgOwXz)

For today I played with a couple of ideas because some of the lines appear redundant, save for the time unit specified. In the end I couldn't really come up with a solid way to minimize the code much further. Any way I see it, you gotta have three different lines for each one.

However, I did add a function to calculate the degrees based on the time unit. Memory-wise it's less efficient but I think it looks cleaner and I LOVE clean code. In my experience it's best to use a function in this case, mostly to minimize human error. I recognize this is a small scale project and it'd be easy to spot the error but in general I find it's good practice, so why bend the rules, ya know?

Original Solution:

```javascript
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
```

My Solution:

```javascript
  function calcDegree (unit, totalUnits) {
    return ((unit / totalUnits) * 360) + 90
  }

  // Then call function in setClock
  const secDeg = calcDegree(sec, 60)
  const minDeg = calcDegree(min, 60)
  const hrDeg = calcDegree(hour, 12)

```
Speaking of OCDs... you might also notice that I separated my files. I'm all about the separation of powers. Same goes for code functions. So you'll see I have added a `script.js` file for the glorious JavaScript and `style.css` for the lovely style.

---

## [Day Three - CSS Variables](https://github.com/stpCollabr8nLstn/JavaScript30/tree/master/03%20-%20CSS%20Variables)

View [codepen](http://codepen.io/StpCollabr8nLstn/pen/qRNOVM)

I have never used CSS variables. Sad but true. So today was a fun one! I didn't get too wacky about finding an alternate solution but I did "enhance" the page a bit. I added a new image of my gorgeous dog (because who wouldn't want to see him?), changed the `base` to purple (it matches my terminal) and added some toggles for border-radius and width.

Original Solution:

```css
  :root {
    --base: #ffc600;
    --spacing: 10px;
    --blur: 10px;
  }

  img {
    padding: var(--spacing);
    background: var(--base);
    filter: blur(var(--blur));
  }
```

My Solution:

```css
  :root {
    --base: #800fff;
    --spacing: 10px;
    --blur: 10px;
    --width: 100px;
    --border: 5px;
  }

  img {
    padding: var(--spacing);
    background: var(--base);
    filter: blur(var(--blur));
    width: var(--width);
    border-radius: var(--border);
  }
```

As mentioned yesterday I've started dividing my files up so you'll notice that today, as well.

--- 

# [Day Four - Array Cardio Day 1](https://github.com/stpCollabr8nLstn/JavaScript30/tree/master/04%20-%20Array%20Cardio%20Day%201)

This is a great way to flex your JavaScript muscles! 

I use these methods pretty regularly and really enjoyed the format of today's tutorial. 
Today I opted to approach the #7 slightly differently:

Original Solution:

```javascript
    const alpha = people.sort((lastOne, nextOne) => {
      const [aLast, aFirst] = lastOne.split(', ');
      const [bLast, bFirst] = nextOne.split(', ');
      return aLast > bLast ? 1 : -1;
    });
    console.log(alpha);
```

My Solution:

```javascript
    const alphaPple = people.sort((a, b) => {
      const aLast = a.split(', ')[0];
      const bLast = b.split(', ')[0];
      return aLast < bLast ? 1 : -1;
    })
    console.log(alphaPple);
```

Since we're not using the first name I didn't even bother pulling it out of the split array.
You could even abstract it further and just do:

```javascript
    const alphaPple = people.sort((a, b) => {
      return a.split(', ')[0] > b.split(', ')[0] ? 1 : -1;
    })
    console.log(alphaPple);
```

But this is just unreadable and would make me shake an angry fist. 

---

# Day Five - [Flex Panel Gallery](https://github.com/stpCollabr8nLstn/JavaScript30/tree/master/05%20-%20Flex%20Panel%20Gallery)

This was a great intro to utilizing flex. JavaScript was super minimal today so I didn't see room for any major additions. As a bonus I just signed up for the [What the Flexbox?!](https://flexbox.io/) class because I want to know more of the flex things!

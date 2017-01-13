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

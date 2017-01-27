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

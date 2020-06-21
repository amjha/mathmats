# Mathmats 
0.1.0

Simple math library written in TypeScript

---
**NOTE**

This documentation is work in progress and will keep changing.

---

##  Getting started
### Install
Install Mathmats using `npm` or `yarn`
```bash
npm install mathmats

yarn add mathmats
```

You can import library in your code
```javascript
const mathm = require('mathmats')
let result = mathm.doLinesIntersect([0, 0], [12, 12], [12, 0], 
```
More details are listed [here](#functions).

### Test
You can run clone and change directory inside `mathmats`:
```bash
npm run test
```

## Functions
### `doLinesIntersect(p1,p2,q1,q2)`

Check if lines connecting `(p1, p2)` and `(q1, q2)` intersect at a point in their drawn segments. 
```javascript
const m = require('mathmats')
console.log(m.doLinesIntersect([0, 0], [12, 12], [12, 0], [10, 22]));
// => prints true

```

### `parallelLines(p1,p2,q1,q2)`
Check if lines connecting `(p1, p2)` and `(q1, q2)` are parallel. 

```javascript
const m = require('mathmats')
console.log(m.parallelLines([0, 0], [12, 12], [12, 0], [10, 22]));
// => prints false
```

### `perpendicularLines(p1,p2,q1,q2)`
Check if lines connecting `(p1, p2)` and `(q1, q2)` are perpendicular to each other. 

```javascript
const m = require('mathmats')
console.log(m.perpendicularLines([0, -1], [10, -21], [2, 0], [10, 4]));
// => prints true
```

### `isEquilateralTriangle(p,q,r,)`
Check if lines connecting `(p1, p2)` and `(q1, q2)` are parallel. 

```javascript
const m = require('mathmats')
console.log(m.parallelLines([0, 0], [12, 12], [12, 0]));
// => prints true
```

## Contribution
- Fork repo and clone it locally to your workstation
- Add issues reference in PRs and summarize all changes 
- Ensure all test cases run successfully before submitting PR
- Submit PR to the `amjha/mathmats` master branch
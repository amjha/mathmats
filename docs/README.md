# Mathmats 
0.1.0

Simple math library written in TypeScript

---
**NOTE**

This documentation is work in progress and will keep changing.

---



## Functions
### `doLinesIntersect(p1,p2,q1,q2)`

Check if lines connecting `(p1, p2)` and `(q1, q2)` intersect at a point in their drawn form. 
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
- Fork repo and clone locally to your workstation
- Add issues reference in PRs and summarize changes 
- Ensure all test cases successfully runs before submitting PR
- Fork repo and submit PR to the `amjha/mathmats` master
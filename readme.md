Hoity (High Order ITerators Yielded)
======================================================================

Hoity is born to discover the power of Javascript-generators and allows us code with high-order functions over them. There're some high order functions named as 'ops' and you can use their in two ways:

* Loading all operations into Iterator's prototype.
* Loading the 'pipe' operation that allows concatenate other ops.

The code differece seems something like:

```javascript
function* range(from, to) {
  while (from < to)
    yield from++;
}

// Loading all operators into Iterator's prototype.
const it = range(0, 10)
  .map(n => n * 2)
  .filter(n => n % 4);

for (const x of it) {
  console.log(x);
}
```

or if you prefer don't overload the prototype:

```javascript
// Loading only pipe op
const it = range(0, 10)
  .pipe(
    map(n => n * 2),
    filter(n => n % 4)
  );

```

## Installation and Usage

### Via NPM

`npm install @devoinc/hoity-core`


### Basic usage

#### Loading all ops
```javascript
const hoity = require('@devoinc/hoity-core');
// Loading all ops into Iterator's prototype
const unload = hoity.proto({all: true});
```

#### Loading pipe op
```javascript
const hoity = require('@devoinc/hoity-core');
// Loading pipe ops into Iterator's prototype
const unload = hoity.proto({pipe: true});
```

#### Loading some ops
```javascript
const hoity = require('@devoinc/hoity-core');
// Loading pipe ops into Iterator's prototype
const unload = hoity.proto({
  map: true,
  filter: true,
  pipe: true
});
```

#### Unload prototype
```javascript
const hoity = require('@devoinc/hoity-core');
const unload = hoity.proto({all: true});
unload();
```

#### Access to ops
```javascript
const hoity = require('@devoinc/hoity-core');
const {
  async: asyncOps,
  sync: syncOps
} = hoity.ops;
```

### OPS
You can view Ops detail on [OPS DOC](doc/ops.md)

License
======================================================================

The MIT License (MIT)

Copyright (C) 2018 Devo, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
Hoity (High Order ITerators Yielded) - Ops
======================================================================

There's synchronous and asynchronous ops, but all of them has the same interface. Simple and easy.

## array(): Array\<T\>

Returns an array with all iterator values.

Warning: If iterator is infinite it never returns a value and, if synchronous operation it would be stop main thread.

`array() -> return [x`<sub>1</sub>`, ..., x`<sub>i</sub>`]`

## at(n: Integer): T

Receives a positive integer named *n* and returns a value in the *n*  position.

If iterator breaks before *n* position, return *undefined*.

`at(n) -> return x`<sub>n</sub>

## concat(...its: Iterator<T>): Iterator\<T\>

Receives *n* iterators and returns an iterator.
This one emit all values of each iterator in order of the arguments insertion, starting by the original iterator.

For example:

```
numbers -> 0, 1, 2, 3, 4, 5

chars -> a, b, c, d, e, f

concat(numbers, chars) -> 0, 1, 2, 3, 4, 5, a, b, c, d, e, f
```

`concat(it`<sub>1</sub>`, ..., it`<sub>n</sub>`) -> yield x`<sub>n<sub>i</sub></sub>

## drop(n: Integer): Iterator\<T\>

Receives an integer that represents how many values do you want to skip and returns the same iterator but with the dropped values.

`drop(n) -> yield x`<sub>i > n</sub>

## every(f: Function): Boolean

Work as `Array.prototype.every`.

## filter(f: Function): Iterator\<T\>

Work as `Array.prototype.filter`.

## find(f: Function): Iterator\<T\>

Work as `Array.prototype.find`.

NOTE: Returns a Iterator with one or no value.

## first(): T

Returns first iterator value.

`first() -> return x`<sub>0</sub>

## flat(): Iterator\<T\>

In the case you have an iterators of iterators and you want to flatten, this is your op.

`flat() -> yield x`<sub>i<sub>j</sub></sub>

## flatMap(f): Iterator\<T\>

Combine the ops `flat()` and `map(f)`.

`flat() -> yield f(x`<sub>i<sub>j</sub></sub>`)`

## forEach(f): void

Works as `Array.prototype.forEach`.

## join(separator: String): String

Works as `Array.prototype.join`.

## last(): T

Returns last iterator value.

`last() -> return x`<sub>length - 1</sub>

## map(f: Function): Iterator\<T\>

Work as `Array.prototype.map`.

## merge(...its: Iterator<T>): Iterator\<T\>

Receives n iterators and returns an iterator.
This one emit all values of each iterator and emits sequencially each value in the same position.

For example:

```
numbers -> 0, 1, 2, 3, 4, 5

chars -> a, b, c, d, e, f

merge(numbers, chars) -> 0, a, 1, b, 2, c, 3, d, 4, e, 5, f
```

`merge(it`<sub>1</sub>`, ..., it`<sub>n</sub>`) -> yield x`<sub>i<sub>n</sub></sub>

## pipe(...f: Function): Iterator\<T\>

Calls all high over functions / ops taking like parameter the result of before call.
The first argument is the original iterator (this).

`pipe(f`<sub>0</sub>`, ..., f`<sub>n</sub>`) -> f`<sub>n</sub>`(f`<sub>0</sub>`(this))`

## reduce(f: Function, init): T

Works as `Array.prototype.reduce`.

## some(f: Function): Boolean

Works as `Array.prototype.some`.

## take(n: Integer): Iterator\<T\>

Takes a range of iterator values from 0 to *n*.

`take(n) -> yield x`<sub>i < n</sub>

## zip(it: Iterator\<T\>, f: Function): Iterator\<T\>

Iterate and takes a value in the same position from two iterators (original iterator and *it*) and calls a function with two arguments where first argument is original iterator value and second the other iterator's value.

If one of iterators close, it close other too.

For example:

```
numbers -> 0, 1, 2, 3, 4, 5

chars -> a, b, c, d, e, f

numbers.zip(chars, f) -> f(0, a), f(1, b), f(2, c), f(3, d), f(4, e), f(5, f)
```

`zip(it, f) -> yield f(this`<sub>i</sub>`, it`<sub>i</sub>`)`

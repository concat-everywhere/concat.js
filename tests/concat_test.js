import { suite, test, assert } from '@pmoo/testy';
import { concat, drop, dup, swap, rot, over } from '../lib/concat.js';
import { divBy, minus, plus, times } from '../lib/math.js';

suite('Basics are stacking up', () => {
    test('concat(1) is [1]', () =>
        assert.that(concat(1)).isEqualTo([1]));

    test('concat(1, 2) is [1, 2]', () => 
        assert.that(concat(1, 2)).isEqualTo([1, 2]));

    test('concat(1, 2, 3) is [1, 2, 3]', () =>
        assert.that(concat(1, 2, 3)).isEqualTo([1, 2, 3]));
});

suite('Math adds up', () => {
    test('concat(1, 2, plus) is [3]', () =>
        assert.that(concat(1, 2, plus)).isEqualTo([3]));

    test('concat(3, 5, minus) is [-2]', () =>
        assert.that(concat(3, 5, minus)).isEqualTo([-2]));

    test('concat(7, 11, times) is [77]', () =>
        assert.that(concat(7, 11, times)).isEqualTo([77]));

    test('concat(221, 13, divBy) is [17]', () =>
        assert.that(concat(221, 13, divBy)).isEqualTo([17]));
});

suite('Shuffling is all in order', () => {
    test('concat(1, dup) is [1, 1]', () =>
        assert.that(concat(1, dup)).isEqualTo([1, 1]));

    test('concat(2, 3, drop) is [2]', () =>
        assert.that(concat(2, 3, drop)).isEqualTo([2]));

    test('concat(5, 7, swap) is [7, 5]', () =>
        assert.that(concat(5, 7, swap)).isEqualTo([7, 5]));

    test('concat(11, 13, 17, rot) is [13, 17, 11]', () =>
        assert.that(concat(11, 13, 17, rot)).isEqualTo([13, 17, 11]));

    test('concat(19, 23, over) is [19, 23, 19]', () =>
        assert.that(concat(19, 23, over)).isEqualTo([19, 23, 19]));
});

suite('Interoperates with other JS functions', () => {
    test('console.log', () =>
        assert.that(concat(1, 2, console.log, dup)).isEqualTo([1, 2, 2]));

    test('lots of functions and a lambda', () =>
        assert.that(concat(2, console.log, 3, console.log, Math.pow, n => ~n)).isEqualTo([-9]));
});

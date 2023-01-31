'use strict';

const stringSort = require('./string_sort');

test('Should return a sorted array', () => {
    expect(stringSort('g5et ski3lls on6 use1 your2 to4 7top'))
        .toBe('use1 your2 ski3lls to4 g5et on6 7top');
});

test('Should work without arguments, should return " "', () => {
    expect(stringSort(''))
        .toBe('');
});

test('Should return a sorted array', () => {
    expect(stringSort('practic3 h4rder yo1u 2hould'))
        .toBe('yo1u 2hould practic3 h4rder');
});

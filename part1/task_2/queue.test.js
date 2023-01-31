'use strict';

const queueTime = require('./queue');

test('Should return a 418', () => {
    expect(queueTime([ 26, 42, 13, 18, 48, 38, 39, 25, 39, 6, 35, 11, 7, 38, 19, 14 ], 1))
        .toBe(418);
});

test('Should return a 162', () => {
    expect(queueTime([ 34, 31, 40, 30, 48, 2, 19, 32, 37, 13, 30, 49, 3, 13, 12, 43, 39, 22, 47 ], 4))
        .toBe(162);
});

test('Should return a 65', () => {
    expect(queueTime([ 19, 1, 27, 35, 16, 4, 45, 49, 41, 25 ], 5))
        .toBe(65);
});

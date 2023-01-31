'use strict';

const nextBigger = require('./bigger_number');

test('Should return a bigger number #1', () => {
    expect(nextBigger(23))
        .toBe(32);
});

test('Should return a bigger number #2', () => {
    expect(nextBigger(624))
        .toBe(642);
});

test('Should return a bigger number #3', () => {
    expect(nextBigger(2018))
        .toBe(8210);
});

test('Should return a -1 #1', () => {
    expect(nextBigger(9))
        .toBe(-1);
});

test('Should return a -1 #2', () => {
    expect(nextBigger(111))
        .toBe(-1);
});

test('Should return a -1 #3', () => {
    expect(nextBigger(531))
        .toBe(-1);
});


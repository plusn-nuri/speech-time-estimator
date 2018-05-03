'use strict';

const assert = require('assert');
require('mocha');

const { countWords, getTimingStrings } = require('../calculator');

suite("Calculator Tests", function () {
    suite("countWords", function () {
        test("Counts words", function () {
            const actual = countWords("**hello world**");
            assert.equal(2, actual);
        });
    });

    suite("getTimingStrings", function () {
        const testTimings =  getTimingStrings(18, { slow: 1, medium: 3, fast: 6 });
        
        
        test("creates 3 items", function () {
            const actual = testTimings;
            assert.equal(3, actual.length);
        });
        test("slow", function () {
            const actual = testTimings;
            assert.equal("slow: 18", actual[0]);
        });
        test("medium", function () {
            const actual = testTimings;
            assert.equal("medium: 6", actual[1]);
        });
        test("fast", function () {
            const actual = testTimings;
            assert.equal("fast: 3", actual[2]);
        });
    });

});


